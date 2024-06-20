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

const Nav = ({ isMobileMenuOpen }) => {
  const pathname = usePathname();

  return (
    isMobileMenuOpen && (
      <Navigation>
        <NavigationLink
          href="/co-je"
          label="Čo je IDSK"
          selected={pathname === '/co-je'}
        />
        <NavigationLink
          href="/komponenty"
          label="Komponenty"
          selected={pathname === '/komponenty'}
        />
        <NavigationLink
          href="/zaklady-principy"
          label="Základy a princípy"
          selected={pathname === '/zaklady-principy'}
        />
        <NavigationLink
          href="/vzory"
          label="Vzory"
          selected={pathname === '/vzory'}
        />
      </Navigation>
    )
  )
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true)

  const router = useRouter();

  const handleClick = () => {
    router.push('https://idsk.gov.sk/');
  };

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
          <Nav isMobileMenuOpen />
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
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                }}
                title="Slovensko.sk"
                width={0}
                height={0}
              />
              <h3 className='py-2'>Dizajn systém ID-SK</h3>
            </header>
          </div>
        </a>
      }
      mobileMenu={
        <MenuMobile
          opened
        >
          <MenuButton
            closedTitle="Menu"
            opened={isMobileMenuOpen}
            openedTitle="Zavrieť"
            toggleOpened={handleToggle}
            className='menu-button'
          />
          <Nav isMobileMenuOpen={isMobileMenuOpen} />
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
        >
          <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
            <div>
              <h3 className="idsk-text-body-1">
                Doména gov.sk je oficálna
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
          className='mr-2'
        />
      </div>
    </HeaderContainer>
  );
};

export default Navbar;