'use client';

import React, { useEffect, useId, useState } from 'react';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  PersonIcon,
  SearchIcon,
} from './headerIcons';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const HeaderDrawerCustom = ({
  id,
  open,
  onOpenChange,
  closeAriaLabel = 'Zatvoriť menu',
  user,
  showUserSection = true,
  profileDetails = [],
  loginLabel = 'Prihlásiť sa',
  onLogin,
  myZoneLabel = 'Moja zóna',
  onMyZone,
  switchRepresentationLabel = 'Prepnúť zastupovanie',
  onSwitchRepresentation,
  logoutLabel = 'Odhlásiť sa',
  onLogout,
  showSearch = true,
  searchLabel = 'Vyhľadávanie',
  searchButtonAriaLabel = 'Hľadať',
  onSearch,
  SearchComponent,
  searchProps,
  actionZoneLabel = 'Akčná zóna',
  actionItems = [],
  navLabel = 'Navigácia',
  navItems = [],
}) => {
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');
  const drawerTitleId = `idsk-header-drawer-title-${instanceId}`;

  const [searchValue, setSearchValue] = useState('');
  const [openSections, setOpenSections] = useState({});

  const closeDrawer = () => onOpenChange?.(false);

  const toggleSection = (sectionKey) => {
    setOpenSections((current) => ({
      ...current,
      [sectionKey]: !current[sectionKey],
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch?.(searchValue);
  };

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const hasActionItems = actionItems.length > 0;
  const hasNavItems = navItems.length > 0;
  const hasContentBelowProfile =
    showUserSection && (showSearch || hasActionItems || hasNavItems);

  const renderDrawerItem = (item, index) => {
    const itemKey = item.id ?? item.href ?? item.label ?? index;
    const hasChildren = item.children?.length > 0;
    const isSectionOpen = hasChildren && (openSections[itemKey] ?? item.active);

    const outerClass = cx(
      'group relative flex w-full cursor-pointer border-0 bg-transparent p-0 text-left no-underline',
      'focus:outline-none',
      item.active && !hasChildren && 'border-l-[3px] border-[#0B4199]'
    );

    const mainContentClass = cx(
      'mx-4 flex min-h-12 w-[calc(100%-32px)] items-center gap-2 px-3 py-3 text-[16px] font-bold leading-6 text-[#0B4199]',
      'group-hover:rounded-[5px] group-hover:ring-[4px] group-hover:ring-[#757575]',
      'group-focus:rounded-[5px] group-focus:outline group-focus:outline-[3px] group-focus:outline-[#D96E00] group-focus:outline-offset-2',
      item.active && !hasChildren && 'bg-[#EFF5FE]'
    );

    if (hasChildren) {
      return (
        <li key={itemKey} className="flex w-full flex-col">
          <button
            type="button"
            className={outerClass}
            onClick={() => toggleSection(itemKey)}
            aria-expanded={isSectionOpen}
          >
            <span className={cx(mainContentClass, item.active && 'bg-[#EFF5FE]')}>
              <span>{item.label}</span>

              <span aria-hidden="true" className="ml-auto flex shrink-0 items-center">
                {isSectionOpen ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </span>
            </span>
          </button>

          {isSectionOpen && (
            <ul className="m-0 flex list-none flex-col p-0" role="list">
              {item.children.map((child, childIndex) => (
                <li key={child.href ?? child.label ?? childIndex} className="flex w-full">
                  <a
                    href={child.href}
                    className="group relative flex w-full cursor-pointer border-0 bg-transparent p-0 text-left no-underline focus:outline-none"
                    aria-current={child.active ? 'page' : undefined}
                    onClick={child.onClick}
                  >
                    {child.active && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[18px] top-0 z-[60] h-full w-[3px] bg-[#0B4199]"
                      />
                    )}

                    <span
                      className={cx(
                        'mx-4 flex min-h-12 w-[calc(100%-32px)] items-center gap-2 px-6 py-3 text-[16px] leading-6 text-[#212121]',
                        'group-hover:rounded-[5px] group-hover:bg-[#F5F5F5] group-hover:underline group-hover:decoration-2',
                        'group-focus:rounded-[5px] group-focus:outline group-focus:outline-[3px] group-focus:outline-[#D96E00] group-focus:outline-offset-2',
                        child.active && 'font-bold text-[#0B4199]'
                      )}
                    >
                      <span>{child.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    const content = (
      <span className={mainContentClass}>
        {item.icon && (
          <span
            aria-hidden="true"
            className="flex h-[25px] w-[25px] shrink-0 items-center justify-center"
          >
            {item.icon}
          </span>
        )}

        <span>{item.label}</span>

        {item.href && <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0" />}
      </span>
    );

    if (item.href) {
      return (
        <li key={itemKey} className="flex w-full">
          <a
            href={item.href}
            className={outerClass}
            onClick={item.onClick}
            aria-current={item.active ? 'page' : undefined}
          >
            {content}
          </a>
        </li>
      );
    }

    return (
      <li key={itemKey} className="flex w-full">
        <button type="button" onClick={item.onClick} className={outerClass}>
          {content}
        </button>
      </li>
    );
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[200] bg-black/45"
        onClick={closeDrawer}
      />

      <div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={drawerTitleId}
        className="fixed inset-0 z-[201] flex h-screen w-full flex-col bg-white shadow-[-4px_0_30px_rgba(0,0,0,0.25)]"
      >
        <h2 id={drawerTitleId} className="sr-only">
          Menu
        </h2>

        <div className="sticky top-0 z-[2] flex shrink-0 items-center justify-end border-b border-[#BDBDBD] bg-white py-1 pr-1">
          <button
            type="button"
            aria-label={closeAriaLabel}
            onClick={closeDrawer}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-[5px] text-[#0B4199] hover:ring-[4px] hover:ring-[#757575] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto pt-4">
          {showUserSection && (
          <div className="flex flex-col gap-4 px-4">
            <h3 className="text-[24px] font-bold leading-8 text-[#212121]">
              Profil
            </h3>

            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#212121] text-white">
                    {user.avatarSrc ? (
                      <img
                        src={user.avatarSrc}
                        alt=""
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <PersonIcon />
                    )}
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-[16px] font-bold leading-6 text-[#212121]">
                      {user.name}
                    </span>

                    {user.caption && (
                      <span className="truncate text-[14px] leading-5 text-[#757575]">
                        {user.caption}
                      </span>
                    )}
                  </div>
                </div>

                {profileDetails.length > 0 && (
                  <dl className="flex flex-col gap-2 text-[16px] leading-6">
                    {profileDetails.map((detail, index) => (
                      <div key={index} className="flex gap-3">
                        <dt className="w-[110px] shrink-0 text-[#757575]">
                          {detail.label}:
                        </dt>
                        <dd className="m-0 text-[#212121]">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="flex flex-col gap-4">
                  {onMyZone && (
                    <button
                      type="button"
                      className="min-h-12 rounded-[5px] border-2 border-[#0B4199] px-4 font-bold text-[#0B4199]"
                      onClick={onMyZone}
                    >
                      {myZoneLabel}
                    </button>
                  )}

                  {onSwitchRepresentation && (
                    <button
                      type="button"
                      className="min-h-12 rounded-[5px] px-4 font-bold text-[#0B4199] underline"
                      onClick={onSwitchRepresentation}
                    >
                      {switchRepresentationLabel}
                    </button>
                  )}

                  {onLogout && (
                    <button
                      type="button"
                      className="min-h-12 rounded-[5px] px-4 font-bold text-[#C3112B] underline"
                      onClick={onLogout}
                    >
                      {logoutLabel}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[5px] border-2 border-[#0B4199] px-4 font-bold text-[#0B4199]"
                onClick={onLogin}
              >
                <PersonIcon />
                {loginLabel}
              </button>
            )}
          </div>
          )}

          {hasContentBelowProfile && (
            <div className="shrink-0 px-4">
              <div
                aria-hidden="true"
                className="h-[2px] w-full rounded-full bg-[#BDBDBD]"
              />
            </div>
          )}

          {showSearch && (
            <div className="flex flex-col gap-4 px-4">
              <h3 className="text-[24px] font-bold leading-8 text-[#212121]">
                {searchLabel}
              </h3>

              {SearchComponent ? (
                <SearchComponent {...searchProps} />
              ) : (
                <form
                  className="flex h-[41px] w-full items-stretch"
                  onSubmit={handleSearch}
                  role="search"
                >
                  <input
                    type="search"
                    className="min-w-0 flex-1 rounded-l-[5px] border-2 border-r-0 border-[#0B4199] bg-white px-4 py-2 text-[16px] text-[#212121] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    aria-label={searchLabel}
                  />

                  <button
                    type="submit"
                    className="flex min-w-[41px] shrink-0 cursor-pointer items-center justify-center rounded-r-[5px] border-2 border-[#0B4199] bg-white text-[#0B4199] hover:bg-[#EFF5FE] focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2"
                    aria-label={searchButtonAriaLabel}
                  >
                    <SearchIcon />
                  </button>
                </form>
              )}
            </div>
          )}
          {hasActionItems && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center px-4">
                <h3 className="text-[24px] font-bold leading-8 text-[#212121]">
                  {actionZoneLabel}
                </h3>
              </div>

              <ul className="m-0 flex list-none flex-col p-0" role="list">
                {actionItems.map(renderDrawerItem)}
              </ul>
            </div>
          )}

          {hasNavItems && (
            <>
              <div className="shrink-0 px-4">
                <div
                  aria-hidden="true"
                  className="h-[2px] w-full rounded-full bg-[#BDBDBD]"
                />
              </div>

              <div className="flex flex-col gap-4 pb-8">
                <div className="flex items-center px-4">
                  <h3 className="text-[24px] font-bold leading-8 text-[#212121]">
                    {navLabel}
                  </h3>
                </div>

                <ul className="m-0 flex list-none flex-col gap-1 p-0" role="list">
                  {navItems.map(renderDrawerItem)}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderDrawerCustom;