'use client';

import Head from 'next/head';
import { PrimaryButton } from '@eslovensko/idsk-react';

const DesignersPage = () => {
  const handleClick = () => {
    window.open(
      'https://www.figma.com/community/file/1581301778555425083',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="component-page">
      <Head>
        <title>Pre dizajnérov</title>
      </Head>

      <h1 className="my-8">Pre dizajnérov</h1>

      <p className="idsk-subtitle mb-16">
        V dizajnérskom nástroji Figma nájdete knižnicu dizajnového systému IDSK –
        knižnicu štýlov, komponentov či vzorov.
      </p>

      <PrimaryButton
        label="Knižnica IDSK"
        onClick={handleClick}
        className="my-4 ml-1"
      />

      <iframe
        style={{
          border: '1px solid rgba(0,0,0,0.1)',
          transformOrigin: 'top left',
        }}
        width={800}
        height={450}
        src="https://embed.figma.com/design/8zCidJGMqcU5Kdmd94BoEL/IDSK-3.1.0?node-id=5012-6464&embed-host=share"
        allowFullScreen
      />
    </div>
  );
};

export default DesignersPage;