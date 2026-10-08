/**
 * Prevedie dáta kartičiek (href, title, voliteľne navLabel)
 * na položky pre ContentNav ({ name, link }).
 */
export const toNav = (items = []) =>
  items.map((item) => ({
    name: item.navLabel ?? item.title,
    link: item.href,
  }));