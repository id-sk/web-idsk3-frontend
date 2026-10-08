'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const OFFSET = 120;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getScrollParent = (el) => {
  let node = el?.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    const { overflowY } = getComputedStyle(node);
    if (/(auto|scroll|overlay)/.test(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentElement;
  }
  return window;
};

const getViewport = (sc) =>
  sc === window
    ? {
        top: 0,
        height: window.innerHeight,
        scrollTop: window.scrollY,
        scrollHeight: document.documentElement.scrollHeight,
      }
    : {
        top: sc.getBoundingClientRect().top,
        height: sc.clientHeight,
        scrollTop: sc.scrollTop,
        scrollHeight: sc.scrollHeight,
      };

const useActiveSection = (ids, rootRef) => {
  const [activeId, setActiveId] = useState(null);
  const lockRef = useRef(false);
  const unlockTimerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const key = ids.join(',');

  const releaseLockLater = (ms) => {
    clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      lockRef.current = false;
    }, ms);
  };

  useEffect(() => {
    if (!ids.length) {
      setActiveId(null);
      return;
    }

    const sc = getScrollParent(rootRef.current);
    scrollContainerRef.current = sc;
    let frame = null;

    const update = () => {
      frame = null;
      if (lockRef.current) return;

      const vp = getViewport(sc);
      const range = sc === window ? vp.height - vp.top : vp.height;
      const maxScroll = vp.scrollHeight - vp.height;
      const distanceToBottom = Math.max(0, maxScroll - vp.scrollTop);

      const zone = Math.min(range, maxScroll);
      let line = OFFSET;
      if (zone > 0 && distanceToBottom < zone) {
        const progress = 1 - distanceToBottom / zone;
        line = OFFSET + (range - OFFSET) * progress;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - vp.top <= line) current = id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (lockRef.current) {
        releaseLockLater(150);
        return;
      }
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const hashId = window.location.hash.slice(1);
    if (ids.includes(hashId)) setActiveId(hashId);
    else update();

    sc.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      sc.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
      clearTimeout(unlockTimerRef.current);
    };
  }, [key]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) {
      console.warn(`ContentNav: element s id="${id}" na stránke neexistuje.`);
      return;
    }

    const sc = scrollContainerRef.current ?? window;
    const vp = getViewport(sc);
    const top = target.getBoundingClientRect().top - vp.top + vp.scrollTop - 24;

    lockRef.current = true;
    setActiveId(id);
    releaseLockLater(1000);

    sc.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });

    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    history.replaceState(null, '', `#${id}`);
  };

  return [activeId, scrollToSection];
};

const itemClasses = (isActive) =>
  cx(
    'mb-[7px] rounded-lg transition-colors duration-150',
    'hover:ring-[4px] hover:ring-[#757575]',
    'focus-within:outline focus-within:outline-[3px] focus-within:outline-custom-orange focus-within:outline-offset-2',
    isActive
      ? 'bg-[#eff5fe] border-l-[3px] border-solid border-regal-blue rounded-l-none'
      : 'bg-transparent'
  );

const linkClasses = (isActive) =>
  cx(
    'block py-2 pl-[16px] pr-3 tracking-wide select-none outline-none',
    isActive ? 'text-regal-blue' : 'text-black'
  );

const ContentNavLink = ({ href, isActive, isAnchor, onAnchorClick, onNavigate, children }) => {
  if (isAnchor) {
    return (
      <li className={itemClasses(isActive)}>
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            onAnchorClick(href.slice(1));
          }}
          aria-current={isActive ? 'location' : undefined}
          className={linkClasses(isActive)}
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li className={itemClasses(isActive)}>
      <Link
        href={href}
        onClick={(e) => {
          e.currentTarget.blur();
          onNavigate?.();
        }}
        aria-current={isActive ? 'page' : undefined}
        className={linkClasses(isActive)}
      >
        {children}
      </Link>
    </li>
  );
};

const NavList = ({ data, isItemActive, onAnchorClick, onNavigate }) => (
  <ul className="ml-0 pt-2 pr-3 pl-1 text-black list-none">
    {data.map((item) => (
      <ContentNavLink
        key={item.link}
        href={item.link}
        isAnchor={item.link.startsWith('#')}
        isActive={isItemActive(item)}
        onAnchorClick={onAnchorClick}
        onNavigate={onNavigate}
      >
        {item.name}
      </ContentNavLink>
    ))}
  </ul>
);

/* ------------------------------------------------------------------ */
/* Mobil / tablet – rozbaľovací obsah                                  */
/* ------------------------------------------------------------------ */

const MobileContentNav = ({ data, ariaLabel, label, currentName, isItemActive, onAnchorClick }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef(null);
  const pathname = usePathname();

  // Pri prechode na inú stránku zbaľ
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleAnchorClick = (id) => {
    // Najprv zbaľ (synchronne), aby sa výpočet pozície nerobil
    // s rozbaleným zoznamom, ktorý by vzápätí zmizol a posunul obsah
    flushSync(() => setOpen(false));
    onAnchorClick(id);
  };

  return (
    <nav
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className="idsk-sidebar-nav mb-2 border-b border-neutral-n400 pb-4 min-[1120px]:hidden"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 py-2 text-left"
      >
        <span className="flex flex-col gap-1">
          <span className="text-base font-bold leading-6 tracking-wide text-[#0B4199] underline underline-offset-4">
            {label}
          </span>
          {currentName && (
            <span className="block text-base leading-6 tracking-wide text-black">
              {currentName}
            </span>
          )}
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={cx(
            'mt-0.5 h-6 w-6 shrink-0 text-[#0B4199] transition-transform duration-200 motion-reduce:transition-none',
            open && 'rotate-180'
          )}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div id={panelId} hidden={!open} className="mt-3">
        <NavList
          data={data}
          isItemActive={isItemActive}
          onAnchorClick={handleAnchorClick}
          onNavigate={() => setOpen(false)}
        />
      </div>
    </nav>
  );
};

/* ------------------------------------------------------------------ */
/* Hlavný komponent                                                    */
/* ------------------------------------------------------------------ */

const ContentNav = ({ data = [], ariaLabel = 'Bočné menu', mobileLabel = 'Obsah stránky' }) => {
  const pathname = usePathname();
  const rootRef = useRef(null);
  const navBoxRef = useRef(null);

  const anchorIds = data
    .filter((item) => item.link?.startsWith('#'))
    .map((item) => item.link.slice(1));

  const [activeId, scrollToSection] = useActiveSection(anchorIds, rootRef);

  const isItemActive = (item) =>
    item.link.startsWith('#') ? item.link.slice(1) === activeId : item.link === pathname;

  const currentName = data.find(isItemActive)?.name;

  // Aktívnu položku drž viditeľnú v rámci desktopovej navigácie
  useEffect(() => {
    const box = navBoxRef.current;
    const activeEl = box?.querySelector('[aria-current]');
    if (!box || !activeEl || box.offsetParent === null) return;

    const boxRect = box.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    if (elRect.top < boxRect.top) box.scrollTop -= boxRect.top - elRect.top + 16;
    else if (elRect.bottom > boxRect.bottom) box.scrollTop += elRect.bottom - boxRect.bottom + 16;
  }, [activeId]);

  return (
    <div ref={rootRef} className="contents">
      {/* Mobil / tablet */}
      <MobileContentNav
        data={data}
        ariaLabel={ariaLabel}
        label={mobileLabel}
        currentName={currentName}
        isItemActive={isItemActive}
        onAnchorClick={scrollToSection}
      />

      {/* Desktop */}
      <aside className="hidden w-72 shrink-0 flex-col bg-white py-8 min-[1120px]:flex">
        <div
          ref={navBoxRef}
          className="sticky top-4 -ml-2 pl-2 max-h-[calc(100vh-2rem)] overflow-y-auto rounded-card bg-white py-4 pr-3"
        >
          <nav aria-label={ariaLabel} className="idsk-sidebar-nav mt-3 text-base leading-6 tracking-wide text-black">
            <NavList data={data} isItemActive={isItemActive} onAnchorClick={scrollToSection} />
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default ContentNav;