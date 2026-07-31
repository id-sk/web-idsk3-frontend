import React from 'react';
import ColorPalette from './ColorPalette'; // Cestu si uprav podľa tvojej štruktúry

export const metadata = {
  title: 'Farebná paleta | IDSK',
  description: 'Farebná paleta definuje základné farby, ktoré sú používané pre udržiavanie konzistentnosti v rámci rozhrania.',
};

export default function FarebnaPaletaPage() {
  return <ColorPalette />;
}