'use client';

/**
 * Tooltip — kontextová nápoveda (React + Tailwind, čistý JS, bez závislostí).
 *
 * DÔLEŽITÉ: `content` je iba čistý text (max 290 znakov). Žiadne odkazy ani tlačidlá
 * — porušuje to WCAG 2.1 SC 1.4.13 a zlomí navigáciu klávesnicou / čítačkou.
 *
 * Ovládanie:
 *  - klik / ťuk / Enter / Medzera – zobrazí alebo skryje text
 *  - Esc – zatvorí text
 *  - klik mimo alebo odchod focusu (Tab ďalej) – zatvorí text
 *  - hover ani samotné zameranie (Tab) text NEotvárajú
 *  - aria-describedby je stále → čítačka prečíta text pri zameraní ikony
 *  - position: fixed, automatický preklop strany a posun, aby nepretiekla z okna
 *    (ak je predok s CSS transform/filter, fixed sa viaže naň — vtedy daj komponent mimo neho)
 *
 * Použitie:
 *   <Tooltip label="Rodné číslo" content="Zadajte bez lomky." preferredPosition="top" />
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

const MAX_CONTENT_LENGTH = 290;
const SIDE_OFFSET = 5;
const COLLISION_PADDING = 10; // musí sedieť s max-w bubliny (2 × 10px = 20px)
const ARROW_LEN = 25;
const ARROW_DEPTH = 18;
const ARROW_EDGE = 8;

const SIDES = ['top', 'bottom', 'left', 'right'];
const OPPOSITE = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

const ARROW_PATH =
  'M14.7223 16.5C13.5676 18.5 10.6808 18.5 9.5261 16.5L-0.000174975 -5.78326e-07L24.2485 0L14.7223 16.5Z';
const ARROW_VERTICAL = `<svg width="25" height="18" viewBox="0 0 25 18" fill="none" focusable="false" style="display:block"><path d="${ARROW_PATH}" fill="currentColor"/></svg>`;
const ARROW_HORIZONTAL = `<svg width="18" height="25" viewBox="0 0 18 25" fill="none" focusable="false" style="display:block"><path d="${ARROW_PATH}" fill="currentColor" transform="matrix(0 1 1 0 0 0)"/></svg>`;

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const cn = (...c) => c.filter(Boolean).join(' ');
const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
const within = (el, target) => !!el && target instanceof Node && el.contains(target);

/**
 * Krúžok v ceste má stred 12,12 a polomer 10 → zaberá 2…22 (priemer 20).
 * viewBox="2 2 20 20" oreže prázdny okraj, takže krúžok vyplní celých 24×24 px
 * tlačidla a hover/focus ring sedí presne na ňom.
 */
function InfoOutlineIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="2 2 20 20"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      className="block"
    >
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}

/** Umiestni bublinu (position: fixed) a šípku voči ikone. */
function placeBubble(trigger, bubble, arrow, preferred) {
  bubble.style.left = '0px';
  bubble.style.top = '0px';

  const tr = trigger.getBoundingClientRect();
  const br = bubble.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  const dist = SIDE_OFFSET + ARROW_DEPTH;

  // Ikona odscrollovaná mimo okna → bublinu len skry
  const outside = tr.bottom < 0 || tr.top > vh || tr.right < 0 || tr.left > vw;
  bubble.style.visibility = outside ? 'hidden' : '';
  if (outside) return;

  const space = {
    top: tr.top - COLLISION_PADDING,
    bottom: vh - tr.bottom - COLLISION_PADDING,
    left: tr.left - COLLISION_PADDING,
    right: vw - tr.right - COLLISION_PADDING,
  };
  const need = (s) => (s === 'top' || s === 'bottom' ? br.height : br.width) + dist;

  // preferovaná → opačná → hore → dole → vpravo → vľavo
  const order = [...new Set([preferred, OPPOSITE[preferred], 'top', 'bottom', 'right', 'left'])];
  const side =
    order.find((s) => space[s] >= need(s)) ??
    order.reduce((best, s) => (space[s] - need(s) > space[best] - need(best) ? s : best));

  const cx = tr.left + tr.width / 2;
  const cy = tr.top + tr.height / 2;
  const vertical = side === 'top' || side === 'bottom';
  let top;
  let left;

  if (vertical) {
    top = side === 'top' ? tr.top - dist - br.height : tr.bottom + dist;
    left = clamp(cx - br.width / 2, COLLISION_PADDING, vw - br.width - COLLISION_PADDING);
  } else {
    left = side === 'left' ? tr.left - dist - br.width : tr.right + dist;
    top = clamp(cy - br.height / 2, COLLISION_PADDING, vh - br.height - COLLISION_PADDING);
  }

  bubble.style.top = `${Math.round(top)}px`;
  bubble.style.left = `${Math.round(left)}px`;
  bubble.setAttribute('data-side', side);

  const a = arrow.style;
  a.top = a.bottom = a.left = a.right = a.transform = '';

  if (vertical) {
    arrow.innerHTML = ARROW_VERTICAL;
    a.left = `${clamp(cx - left - ARROW_LEN / 2, ARROW_EDGE, br.width - ARROW_LEN - ARROW_EDGE)}px`;
    if (side === 'top') a.top = 'calc(100% - 1px)';
    else {
      a.bottom = 'calc(100% - 1px)';
      a.transform = 'scaleY(-1)';
    }
  } else {
    arrow.innerHTML = ARROW_HORIZONTAL;
    a.top = `${clamp(cy - top - ARROW_LEN / 2, ARROW_EDGE, br.height - ARROW_LEN - ARROW_EDGE)}px`;
    if (side === 'left') a.left = 'calc(100% - 1px)';
    else {
      a.right = 'calc(100% - 1px)';
      a.transform = 'scaleX(-1)';
    }
  }
}

export function Tooltip({
  content,
  label,
  preferredPosition = 'top',
  ariaLabel = 'Zobraziť informácie',
  className,
  defaultOpen = false,
}) {
  const tooltipId = `idsk-tooltip-${useId().replace(/:/g, '')}`;
  const preferred = SIDES.includes(preferredPosition) ? preferredPosition : 'top';

  const [open, setOpen] = useState(defaultOpen);

  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);
  const arrowRef = useRef(null);

  if (
    process.env.NODE_ENV !== 'production' &&
    typeof content === 'string' &&
    content.length > MAX_CONTENT_LENGTH
  ) {
    console.warn(`[Tooltip] content má ${content.length} znakov (max ${MAX_CONTENT_LENGTH}).`);
  }

  const hide = useCallback(() => setOpen(false), []);

  const reposition = useCallback(() => {
    if (triggerRef.current && bubbleRef.current && arrowRef.current) {
      placeBubble(triggerRef.current, bubbleRef.current, arrowRef.current, preferred);
    }
  }, [preferred]);

  // Umiestnenie pred vykreslením → bublina neskáče
  useIsoLayoutEffect(() => {
    if (open) reposition();
  }, [open, reposition, content]);

  // Globálne listenery iba počas otvorenia
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (!within(triggerRef.current, e.target) && !within(bubbleRef.current, e.target)) hide();
    };

    // Esc zatvorí odkiaľkoľvek (SC 1.4.13 – dismissible)
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      const focusWasInside = within(bubbleRef.current, document.activeElement);
      hide();
      if (focusWasInside) triggerRef.current?.focus();
    };

    let frame = 0;
    const onViewportChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(reposition);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onViewportChange);
    window.addEventListener('scroll', onViewportChange, { passive: true, capture: true });

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onViewportChange);
      window.removeEventListener('scroll', onViewportChange, { capture: true });
    };
  }, [open, hide, reposition]);

  // Klik, ťuk aj Enter/Medzera (natívne vyvolajú click na <button>) prepínajú
  const onClick = (e) => {
    e.preventDefault();
    setOpen((v) => !v);
  };

  // Tab preč z ikony zatvorí (okrem presunu focusu do bubliny – označovanie textu)
  const onBlur = (e) => {
    if (within(bubbleRef.current, e.relatedTarget)) return;
    hide();
  };

  const onBubbleBlur = (e) => {
    if (e.relatedTarget === triggerRef.current || within(bubbleRef.current, e.relatedTarget)) return;
    hide();
  };

  return (
    <div className={cn('inline-flex max-w-full items-center gap-x-2', className)}>
      {label && <span className="text-base leading-6 [overflow-wrap:anywhere]">{label}</span>}

      <button
        ref={triggerRef}
        type="button"
        aria-label={ariaLabel}
        aria-describedby={tooltipId}
        aria-controls={tooltipId}
        aria-expanded={open}
        onClick={onClick}
        onBlur={onBlur}
        className={cn(
          'custom-focus',
          'inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center',
          'm-0 rounded-full border-0 bg-transparent p-0 transition-[color,box-shadow]',
          'text-blue-900',
          'hover:text-[#126dff] hover:shadow-[0_0_0_4px_#757575]',
          'outline-none', 
          'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#d96e09] focus-visible:outline-offset-2',
          'forced-colors:focus-visible:outline-[Highlight]'
        )}
      >
        <InfoOutlineIcon />
      </button>

      <div
        ref={bubbleRef}
        id={tooltipId}
        role="tooltip"
        tabIndex={-1}
        data-state={open ? 'instant-open' : 'closed'}
        onBlur={onBubbleBlur}
        style={{ position: 'fixed', top: 0, left: 0, display: open ? undefined : 'none' }}
        className={cn(
          'z-50 box-border w-max max-w-[min(400px,calc(100vw-20px))]',
          'rounded-lg bg-neutral-900 p-5 text-left text-base leading-6 text-white shadow-lg',
          'whitespace-normal [overflow-wrap:anywhere] focus:outline-none',
          'forced-colors:border forced-colors:border-solid forced-colors:border-[CanvasText]',
        )}
      >
        {content}
        <span
          ref={arrowRef}
          aria-hidden="true"
          className="pointer-events-none absolute block leading-[0] text-neutral-900 forced-colors:hidden"
        />
      </div>
    </div>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
