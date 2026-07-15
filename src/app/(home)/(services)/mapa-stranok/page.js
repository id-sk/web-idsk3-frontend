import React from 'react';

import {
  idskRoutes,
  basicRoutes,
  pageRoutes,
  serviceRoutes,
} from '@/constants/constants';

export const metadata = {
  title: 'Mapa stránok | IDSK',
  description: 'Prehľad hlavných a servisných stránok webu IDSK.',
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const SitemapGroup = ({ title, items = [] }) => {
  if (!items.length) return null;

  return (
    <section aria-labelledby={`sitemap-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <h2
        id={`sitemap-${title.toLowerCase().replaceAll(' ', '-')}`}
        className="text-[24px] font-bold leading-8 text-[#212121]"
      >
        {title}
      </h2>

      <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
        {items.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className={cx(
                'inline-flex rounded-[2px] text-[19px] leading-7 text-[#0B4199] underline underline-offset-2',
                'hover:text-[#126DFF] hover:decoration-2',
                'focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2'
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function MapaStranokPage() {
  return (
    <main className="mx-auto my-8 w-full max-w-[1120px] px-4">
      <h1 className="text-2xl font-black leading-tight text-black sm:text-3xl md:text-4xl md:leading-[55px]">
        Mapa stránok
      </h1>

      <p className="mt-6 max-w-[760px] text-[19px] leading-7 tracking-wide text-[#212121]">
        Prehľad hlavných stránok a servisných odkazov webu IDSK.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-[60px]">
          <SitemapGroup title="Čo je IDSK" items={idskRoutes} />

          <SitemapGroup
            title="Vzory"
            items={[
              {
                name: 'Vzory',
                link: '/vzory',
              },
            ]}
          />
        </div>

        <div className="flex flex-col gap-[60px]">
          <SitemapGroup title="Základy a princípy" items={basicRoutes} />

          <SitemapGroup title="Servisné stránky" items={serviceRoutes} />
        </div>

        <div className="flex flex-col gap-[60px]">
          <SitemapGroup title="Komponenty" items={pageRoutes} />
        </div>
      </div>
    </main>
  );
}