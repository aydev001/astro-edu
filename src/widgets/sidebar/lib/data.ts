export type SidebarMenuItem = {
  label: string;
  icon?: string;
  link?: string;
  children?: SidebarMenuItem[];
};

export const sidebarMenuData: SidebarMenuItem[] = [
  {
    label: 'Bosh sahifa',
    icon: 'House',
    link: '/',
  },
  {
    label: 'Fan meyyoriy hujjatlari',
    icon: 'NotebookPen',
    children: [
      { label: 'Fan dasturi', link: '/fan-hujjatlar/fan-dasturi' },
      { label: 'Fan sillabusi', link: '/fan-hujjatlar/fan-sillabusi' },
      { label: 'Glossariy', link: '/fan-hujjatlar/glossary' },
    ],
  },
  {
    label: "Fan ma'lumotlari",
    icon: 'BookMarked',
    children: [
      { label: "Ma'ruzalar", link: '/fan-malumotlari/maruza' },
      { label: "Amaliy mashg'ulotlar", link: '/fan-malumotlari/amaliy' },
      { label: 'Labaratorya', link: '/fan-malumotlari/labaratorya' },
      { label: 'Mustaqil ish', link: '/fan-malumotlari/mustaqil' },
    ],
  },
  {
    label: 'Darsliklar va adabiyotlar',
    icon: 'BookOpenText',
    link: '/darslik-adabiyot',
  },
  {
    label: 'Video darslar',
    icon: 'Clapperboard',
    link: '/videodarslar',
  },
  {
    label: 'Fotogalereya va animatsiyalar',
    icon: 'ImageDown',
    link: '/fotogalereya',
  },
  {
    label: 'Osmon xaritasi',
    icon: 'Telescope',
    link: '/osmon-xaritasi',
  },
  {
    label: "Astronomik o'quv ilovalari",
    icon: 'Layers',
    link: '/astronomik-ilovalar',
  },
  {
    label: 'Virtual labaratoryalar',
    icon: 'Microscope',
    link: '/virtual-labaratorya',
  },
  {
    label: 'Ilimiy tadqiqot ilovalari',
    icon: 'Album',
    link: '/ilimiy-ilovalar',
  },
  {
    label: 'Onlayn kuzatuvlar',
    icon: 'Cctv',
    link: '/onlayn-kuzatuvlar',
  },
  {
    label: 'Testlar',
    icon: 'NotebookText',
    link: '/testlar',
  },
  {
    label: 'Metodik yordam',
    icon: 'PencilRuler',
    link: '/metodik-yordam',
  },
];
