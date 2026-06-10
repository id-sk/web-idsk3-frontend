export const pageRoutes = [
    {
        "name": "Zoznam komponentov",
        "link": "/komponenty"
    },
    {
        "name": "Akordeón",
        "link": "/komponenty/akordeon"
    },
    {
        "name": "Hlavička - elektronické služby",
        "link": "/komponenty/hlavicka-elektronicke-sluzby"
    },
    /*{
        "name": "Hlavička - webové sídla",
        "link": "/komponenty/hlavicka-webove-sidla"
    },*/
    {
        "name": "Informačná lišta",
        "link": "/komponenty/informacna-lista"
    },
    /*{
        "name": "Informačná lišta upozornenie",
        "link": "/komponenty/informacna-lista-upozornenie"
    },*/
    {
        "name": "Kartička",
        "link": "/komponenty/karticka"
    },
    {
        "name": "Lišta spätnej väzby",
        "link": "/komponenty/lista-spatnej-vazby"
    },
    {
        "name": "Omrvinková navigácia",
        "link": "/komponenty/omrvinkova-navigacia"
    },
    {
        "name": "Päta",
        "link": "/komponenty/pata"
    },
    {
        "name": "Pole na nahratie súboru",
        "link": "/komponenty/nahratie-suboru"
    },
    {
        "name": "Prehľad s chybovými hláseniami",
        "link": "/komponenty/prehlad-s-chybovymi-hlaseniami"
    },
    {
        "name": "Prepínacie pole",
        "link": "/komponenty/prepinacie-pole"
    },
    {
        "name": "Rázcestník - horizontálny",
        "link": "/komponenty/razcestnik-horizontalny"
    },
    /* {
        "name": "Rázcestník - vertikálny",
        "link": "/komponenty/razcestnik-vertikalny"
    }, */
    /* {
        "name": "Rázcestník - textový",
        "link": "/komponenty/razcestnik-textovy"
    },*/
    {
        "name": "Rozbaľovacie pole",
        "link": "/komponenty/rozbalovacie-pole"
    },
    {
        "name": "Textové pole",
        "link": "/komponenty/textove-pole"
    },
    {
        "name": "Viacriadkové textové pole",
        "link": "/komponenty/textove-pole-viacriadkove"
    },
    {
        "name": "Tlačidlo",
        "link": "/komponenty/tlacidlo"
    },
    /*{
        "name": "Tlačidlo - sekundárne",
        "link": "/komponenty/tlacidlo-sekundarne"
    },*/
    /*{
        "name": "Tlačidlo - textové",
        "link": "/komponenty/tlacidlo-textove"
    },*/
    {
        "name": "Začiarkavacie pole",
        "link": "/komponenty/zaciarkavacie-pole"
    }
];

export const basicRoutes = [
    {
        "name": "Základy a princípy",
        "link": "/zaklady-principy"
    },
    {
        "name": "Typografia",
        "link": "/zaklady-principy/typografia"
    },
    {
        "name": "Farebná paleta",
        "link": "/zaklady-principy/farebna-paleta"
    },
    // {
    //     "name": "Ikony",
    //     "link": "/zaklady-principy/ikony"
    // },
    {
        "name": "Tiene",
        "link": "/zaklady-principy/tiene"
    },
    {
        "name": "Medzery",
        "link": "/zaklady-principy/medzery"
    },
    {
        "name": "Rozloženie stránky",
        "link": "/zaklady-principy/rozlozenie-stranky"
    },
    {
        "name": "Zameraný stav (Focus)",
        "link": "/zaklady-principy/zamerany-stav"
    },
    // {
    //     "name": "Použitie obrázkov",
    //     "link": "/zaklady-principy/obrazky"
    // },
];


export const idskRoutes = [
    {
        "name": "Čo je IDSK",
        "link": "/co-je"
    },
    // {
    //     "name": "Github",
    //     "link": "/co-je/github"
    // },
    {
        "name": "Úvod",
        "link": "/co-je/uvod"
    },
    {
        "name": "Princípy",
        "link": "/co-je/principy"
    },
    {
        "name": "Metodika",
        "link": "/co-je/metodika"
    },
    {
        "name": "Návod pre dizajnérov",
        "link": "/co-je/navod-pre-dizajnerov"
    },
    {
        "name": "Návod pre vývojárov",
        "link": "/co-je/navod-pre-vyvojarov"
    },
    {
        "name": "Spracovanie cookies",
        "link": "/co-je/cookies-policy"
    },
];

export const allRoutes = [
  ...idskRoutes,
  ...basicRoutes,
  ...pageRoutes,
];