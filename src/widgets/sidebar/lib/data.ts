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
    label: 'Fan maʼlumotlari',
    icon: 'BookMarked',
    children: [
      { label: 'Maʼruzalar', link: '/fan-malumotlari/maruza' },
      { label: 'Amaliy mashgʻulotlar', link: '/fan-malumotlari/amaliy' },
      { label: 'Laboratoriya', link: '/fan-malumotlari/labaratorya' },
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
    label: 'Astronomik oʻquv ilovalari',
    icon: 'Layers',
    link: '/astronomik-ilovalar',
  },
  {
    label: 'Virtual laboratoriyalar',
    icon: 'Microscope',
    link: '/virtual-labaratorya',
  },
  {
    label: 'Ilmiy tadqiqot ilovalari',
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
