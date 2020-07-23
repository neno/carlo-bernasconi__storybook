export const navItems = (active) => [
  {
    title: 'Kompetenzen',
    url: '#',
    active: active && active === 'Kompetenzen',
  },
  { title: 'Produkte', url: '#', active: active && active === 'Produkte' },
  { title: 'Referenzen', url: '#', active: active && active === 'Referenzen' },
  { title: 'Dokumente', url: '#', active: active && active === 'Dokumente' },
  { title: 'Ratgeber', url: '#', active: active && active === 'Ratgeber' },
  { title: 'Über uns', url: '#', active: active && active === 'Über uns' },
  { title: 'Kontakt', url: '#', active: active && active === 'Kontakt' },
];
