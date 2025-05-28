'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  HeaderContainer,
  MenuButton,
  MenuMobile,
  Navigation,
  NavigationLink,
  PrimaryButton,
  SecondaryNavigation,
} from '@eslovensko/idsk-react';
import { usePathname, useRouter } from "next/navigation";
import Search from '../search/search';
import { pageRoutes } from '@/constants/constants';
import './navbar.scss'

const Nav = ({ isMobileMenuOpen, sidebarData }) => {
  const pathname = usePathname();

  const getParentPath = (path) => path.split('/')[1];

  // .slice(1) to remove the first element which is the parent
  const sidebarDataWithParent = sidebarData?.slice(1).map(element => {
    return {
      ...element,
      parent: '/' + getParentPath(element.link)
    }
  });

  const parentRoutes = [
    { href: "/co-je", label: "Čo je IDSK" },
    { href: "/komponenty", label: "Komponenty" },
    { href: "/zaklady-principy", label: "Základy a princípy" },
    { href: "/vzory", label: "Vzory" }
  ];

  const renderSubLinks = (parentHref) => (
    sidebarDataWithParent
      ?.filter(item => item.parent === parentHref)
      ?.map(subItem => (
        // todo: sidebarNavigationLink class doesn't seem to apply the font size
        <div key={subItem.link} className="pl-4 sidebarNavigationLink">
          <NavigationLink
            href={subItem.link}
            label={subItem.name}
            selected={pathname === subItem.link}
          />
        </div>
      ))
  );


  return (
    isMobileMenuOpen && (
      <Navigation>
        {parentRoutes.map(parent => (
          <React.Fragment key={parent.href}>
            <NavigationLink
              href={parent.href}
              label={parent.label}
              selected={pathname.startsWith(parent.href)}
            />
            {sidebarData && renderSubLinks(parent.href)}
          </React.Fragment>
        ))}
      </Navigation>

    )
  )
}

const Navbar = ({ sidebarData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  const router = useRouter();

  const handleClick = () => {
    router.push('https://idsk2.gov.sk/');
  };

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  const handleToggleLanguage = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  };

  return (
    <HeaderContainer
      fixed
      largeMenu={
        <div
          style={{
            height: '68px',
          }}
        >
          <Nav isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      }
      logo={
        <a href="/">
          <div className="flex gap-5 justify-between w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
            <header className="font-source-sans-pro flex gap-4 self-start font-bold text-blue-900 items-center">
              <Image
                src="/images/logotyp.svg"
                alt=""
                sizes="100vw"
                width={0}
                height={0}
                className="w-8 h-8 md:w-12 md:h-12"
              />
              <h3 className='py-2 max-w-720px dizajn'>IDSK 3</h3>
            </header>
          </div>
        </a>
      }
      mobileMenu={
        <MenuMobile
          opened
          aria-label={isMobileMenuOpen ? 'Menu otvorené' : 'Menu zatvorené'}
        >
          <MenuButton
            closedTitle="Menu"
            opened={isMobileMenuOpen}
            openedTitle="Zavrieť"
            toggleOpened={handleToggle}
            className='menu-button'
          />
          <Nav isMobileMenuOpen={isMobileMenuOpen} sidebarData={sidebarData} />
        </MenuMobile>
      }
      secondaryNavigation={
        <SecondaryNavigation
          dropDownOptions={[<a key={'english'}>english</a>]}
          dropDownTitle="slovenčina"
          heading="Oficiálna stránka"
          headingButton="verejnej správy"
          mobileHeading="SK"
          mobileHeadingButton="e-Gov"
          aria-expanded={isLanguageMenuOpen ? true : false}
          onClick={handleToggleLanguage}
        >
          <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
            <div>
              <h3 className="idsk-text-body-1">
                Doména gov.sk je oficiálna
              </h3>
              <p className="py-2.5">
                Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne stránky využívajú najmä doménu gov.sk.{' '}
                <a
                  href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
                  target="_blank"
                >
                  Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.
                </a>
              </p>
            </div>
            <div>
              <h3 className="idsk-text-body-1">
                Táto stránka je zabezpečená
              </h3>
              <p className="py-2.5">
                Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku verejnej správy SR. Zabezpečená stránka vždy začína https:// pred názvom domény webového sídla.
              </p>
            </div>
          </div>
        </SecondaryNavigation>
      }
    >
      <div className='flex flex-wrap items-center'>
        <Search pageDetails={pageRoutes} />
        <PrimaryButton
          label="IDSK 2.0"
          onClick={handleClick}
          className='mr-2 large-screen-only'
        />
      </div>
    </HeaderContainer>
  );
};

export default Navbar;
