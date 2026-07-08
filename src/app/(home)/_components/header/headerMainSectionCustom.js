'use client';

import React, { useEffect, useId, useState } from 'react';
import HeaderDrawerCustom from './headerDrawerCustom';
import NotificationButtonCustom from './notificationButtonCustom';
import {
  MailIcon,
  MenuIcon,
  NotificationsIcon,
  PersonIcon,
  SearchIcon,
  SlovakStateSignIcon,
} from './headerIcons';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const HeaderMainSectionCustom = ({
  logo = <SlovakStateSignIcon />,
  logoHref,
  logoAriaLabel = 'Domovská stránka',
  orgName,
  orgNameAsHeading = false,
  orgSubtitle,

  SearchComponent,
  searchProps,
  showSearch = true,
  onSearch,
  searchAriaLabel = 'Hľadať',

  showMail = false,
  mailHasNew = false,
  onMail,
  mailAriaLabel = 'Správy',

  showNotifications = false,
  notificationsHasNew = false,
  onNotifications,
  notificationsAriaLabel = 'Notifikácie',

  actions,

  menuLabel = 'Menu',
  menuDrawerId,
  user,
  showLogin,
  loginLabel = 'Prihlásiť sa',
  onLogin,

  drawerProps = {},

  className = '',
  ...props
}) => {
  const reactId = useId();
  const instanceId = reactId.replace(/:/g, '');
  const resolvedMenuDrawerId = menuDrawerId || `idsk-mobile-menu-${instanceId}`;

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
  const mediaQuery = window.matchMedia('(min-width: 730px)');

  const handleBreakpointChange = (event) => {
    if (event.matches) {
      setDrawerOpen(false);
        }
      };

      if (mediaQuery.matches) {
        setDrawerOpen(false);
      }

      mediaQuery.addEventListener('change', handleBreakpointChange);

      return () => {
        mediaQuery.removeEventListener('change', handleBreakpointChange);
      };
    }, []);

  const displayLogin = showLogin ?? !user;

  return (
    <>
      <div
        data-idsk="header-main-section"
        className={cx(
          'flex w-full flex-col items-center border-b border-[#BDBDBD] bg-white py-4',
          className
        )}
        {...props}
      >
        <div className="flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4">
          {(logo || orgName) && (
            <div className="flex min-w-0 flex-1 items-center">
              {logoHref ? (
                <a
                  href={logoHref}
                  aria-label={logoAriaLabel}
                  className="
                    flex min-w-0 items-center gap-4 rounded-[5px] no-underline
                    hover:ring-[4px] hover:ring-[#757575]
                    focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                  "
                >
                  {logo && (
                    <span className="flex shrink-0 items-center justify-center">
                      {logo}
                    </span>
                  )}

                  {orgName && (
                    <span className="flex min-w-0 flex-col justify-center">
                      {orgNameAsHeading ? (
                        <h1 className="truncate text-[24px] font-bold leading-8 text-[#0B4199]">
                          {orgName}
                        </h1>
                      ) : (
                        <span className="truncate text-[24px] font-bold leading-8 text-[#0B4199]">
                          {orgName}
                        </span>
                      )}

                      {orgSubtitle && (
                        <span className="truncate text-[16px] leading-6 text-[#757575]">
                          {orgSubtitle}
                        </span>
                      )}
                    </span>
                  )}
                </a>
              ) : (
                <div className="flex min-w-0 items-center gap-4">
                  {logo && (
                    <span className="flex shrink-0 items-center justify-center">
                      {logo}
                    </span>
                  )}

                  {orgName && (
                    <span className="flex min-w-0 flex-col justify-center">
                      {orgNameAsHeading ? (
                        <h1 className="truncate text-[24px] font-bold leading-8 text-[#0B4199]">
                          {orgName}
                        </h1>
                      ) : (
                        <span className="truncate text-[24px] font-bold leading-8 text-[#0B4199]">
                          {orgName}
                        </span>
                      )}

                      {orgSubtitle && (
                        <span className="truncate text-[16px] leading-6 text-[#757575]">
                          {orgSubtitle}
                        </span>
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {showSearch && SearchComponent && (
            <div className="hidden w-full max-w-[360px] min-[730px]:block">
              <SearchComponent {...searchProps} />
            </div>
          )}

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              className="
                hidden min-h-10 items-center gap-2 rounded-[5px] border-2 border-[#0B4199] px-4 font-bold text-[#0B4199]
                hover:ring-[4px] hover:ring-[#757575]
                focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                max-[729px]:flex
              "
              onClick={() => setDrawerOpen(true)}
              aria-label={drawerOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
              aria-expanded={drawerOpen}
              aria-controls={resolvedMenuDrawerId}
              aria-haspopup="dialog"
            >
              <MenuIcon className="h-[25px] w-[25px]" />
              {menuLabel}
            </button>

            {showSearch && !SearchComponent && (
              <NotificationButtonCustom
                icon={<SearchIcon className="h-[25px] w-[25px]" />}
                aria-label={searchAriaLabel}
                onClick={onSearch}
              />
            )}

            {showMail && (
              <NotificationButtonCustom
                icon={<MailIcon className="h-[25px] w-[25px]" />}
                hasNew={mailHasNew}
                newLabel="Nová správa"
                aria-label={mailAriaLabel}
                onClick={onMail}
              />
            )}

            {showNotifications && (
              <NotificationButtonCustom
                icon={<NotificationsIcon className="h-[25px] w-[25px]" />}
                hasNew={notificationsHasNew}
                newLabel="Nová notifikácia"
                aria-label={notificationsAriaLabel}
                onClick={onNotifications}
              />
            )}

            {actions}

            {displayLogin && (
              <button
                type="button"
                onClick={onLogin}
                className="
                  hidden min-h-10 items-center gap-2 rounded-[5px] border-2 border-[#0B4199] px-4 font-bold text-[#0B4199]
                  hover:ring-[4px] hover:ring-[#757575]
                  focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                  min-[730px]:inline-flex
                "
              >
                <PersonIcon className="h-[25px] w-[25px]" />
                {loginLabel}
              </button>
            )}

            {user && (
              <button
                type="button"
                onClick={user.onClick}
                className="
                  hidden items-center gap-2 rounded-[5px] p-0 text-left
                  hover:ring-[4px] hover:ring-[#757575]
                  focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2
                  min-[730px]:flex
                "
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#212121] text-white">
                  {user.avatarSrc ? (
                    <img
                      src={user.avatarSrc}
                      alt=""
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    user.initials || <PersonIcon />
                  )}
                </span>

                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[16px] leading-6 text-[#212121]">
                    {user.name}
                  </span>

                  {user.caption && (
                    <span className="truncate text-[14px] leading-5 text-[#757575]">
                      {user.caption}
                    </span>
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      <HeaderDrawerCustom
        id={resolvedMenuDrawerId}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        user={user}
        loginLabel={loginLabel}
        onLogin={onLogin}
        showSearch={showSearch}
        SearchComponent={SearchComponent}
        searchProps={searchProps}
        searchLabel="Vyhľadávanie"
        onSearch={onSearch}
        {...drawerProps}
      />
    </>
  );
};

export default HeaderMainSectionCustom;