'use client';

import React, { useId, useState } from 'react';
import LanguagePickerCustom from './languagePickerCustom';
import { ChevronDownIcon, ChevronUpIcon } from './headerIcons';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const TopBarCustom = ({
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  officialWebsiteTitle = 'Doména gov.sk je oficiálna',
  officialWebsiteText = 'Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne stránky využívajú najmä doménu gov.sk.',
  officialWebsiteLinkHref = 'https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci',
  officialWebsiteLinkLabel = 'Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.',
  secureWebsiteTitle = 'Táto stránka je zabezpečená',
  secureWebsiteText = 'Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku verejnej správy SR. Zabezpečenú webovú stránku spoznáte podľa webovej adresy začínajúcej https://.',
  showLanguagePicker = true,
  languages,
  languageValue,
  onLanguageChange,
  className = '',
  ...props
}) => {
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');
  const panelId = `idsk-top-bar-panel-${instanceId}`;

  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;

  const handleToggle = () => {
    const nextValue = !isExpanded;

    if (!isControlled) {
      setInternalExpanded(nextValue);
    }

    onExpandedChange?.(nextValue);
  };

  return (
    <div
      data-idsk="top-bar"
      className={cx(
        'relative z-[100] flex w-full flex-col items-center bg-[#003078] text-white',
        className
      )}
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1120px] items-center justify-between gap-3 px-4 py-1 md:gap-4 md:pr-8">
          <button
            type="button"
            aria-label={
              isExpanded
                ? 'Skryť informácie o oficiálnej stránke verejnej správy SR'
                : 'Zobraziť informácie o oficiálnej stránke verejnej správy SR'
            }
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={handleToggle}
            className={cx(
              'my-[1px] inline-flex min-h-10 min-w-0 max-w-[calc(100%-96px)] shrink items-center gap-1 rounded-[5px] py-2 text-left text-[16px] leading-6 underline',
              'hover:ring-[4px] hover:ring-white',
              'active:bg-[#EFF5FE] active:text-[#0B4199]',
              'focus:outline focus:outline-[3px] focus:outline-[#FFF] focus:outline-offset-2'
            )}
          >
            <span className="min-w-0 text-left">
              <span>Oficiálna stránka</span>{' '}
              <strong>verejnej správy SR</strong>
            </span>

            <span aria-hidden="true" className="inline-flex shrink-0 items-center">
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </button>

          {showLanguagePicker && (
            <div className="shrink-0">
              <LanguagePickerCustom
                languages={languages}
                value={languageValue}
                onValueChange={onLanguageChange}
                onDark
              />
            </div>
          )}
        </div>
      </div>

      <div id={panelId} hidden={!isExpanded} className="w-full">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 pt-3 pb-5">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="min-w-0 flex-1">
              <h3 className="mb-2 text-[16px] font-bold leading-6 text-white">
                {officialWebsiteTitle}
              </h3>

              <p className="m-0 py-2.5 text-[16px] leading-6 text-white">
                {officialWebsiteText}{' '}
                <a
                  href={officialWebsiteLinkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline hover:decoration-[3px] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
                >
                  {officialWebsiteLinkLabel}
                </a>
              </p>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="mb-2 text-[16px] font-bold leading-6 text-white">
                {secureWebsiteTitle}
              </h3>

              <p className="m-0 py-2.5 text-[16px] leading-6 text-white">
                {secureWebsiteText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarCustom;