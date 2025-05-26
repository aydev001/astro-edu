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
    icon: 'BookUser',
    children: [
      { label: 'Kredit tizimi', link: '/' },
      { label: 'Fan dasturi', link: '/' },
      { label: "Ishchi o'quv dasturi", link: '/' },
      { label: 'Kalendar reja', link: '/' },
      { label: 'Adabiyotlar', link: '/' },
      { label: 'Glossariy', link: '/' },
      { label: 'Pedagogik texnologiyalar', link: '/' },
    ],
  },
  {
    label: "Fan ma'lumotlari",
    icon: 'CalendarCheck',
    children: [
      { label: "Ma'ruzalar", link: '/' },
      {
        label: "Amaliy mashg'ulotlar",
        children: [
          { label: "Ma'lumotlar", link: '/' },
          { label: 'Topshiriqlar', link: '/' },
        ],
      },
      {
        label: 'Mustaqil ish',
        children: [
          { label: "Ma'lumotlar", link: '/' },
          { label: 'Topshiriqlar', link: '/' },
        ],
      },
    ],
  },
  {
    label: 'Video darslar',
    icon: 'Clapperboard',
    link: '/',
  },
  {
    label: 'Integratsion yondoshuv',
    icon: 'FileVolume',
    link: '/',
  },
  {
    label: 'Nazoratlar',
    icon: 'FileChartPie',
    link: '/',
  },
  {
    label: 'Natijalar',
    icon: 'ChartColumnBig',
    link: '/',
  },
  {
    label: 'Baholash mezonlari',
    icon: 'ChartNoAxesCombined',
    link: '/',
  },
  {
    label: "Innovatsion ta'lim sxemasi",
    icon: 'TvMinimalPlay',
    link: '/',
  },
  {
    label: "Bog'lanish",
    icon: 'Mail',
    link: '/',
  },
  {
    label: 'Mobil ilova',
    icon: 'Smartphone',
    link: '/',
  },
];

// export const sidebarMenuData: SidebarMenuItem[] = [
//   {
//     label: "Bosh sahifa",
//     icon: "House",
//     link: "/bosh-sahifa"
//   },
//   {
//     label: "Fan meyyoriy hujjatlari",
//     icon: "BookUser",
//     children: [
//       { label: "Kredit tizimi", link: "/kredit-tizimi" },
//       { label: "Fan dasturi", link: "/fan-dasturi" },
//       { label: "Ishchi o'quv dasturi", link: "/ishchi-oquv-dasturi" },
//       { label: "Kalendar reja", link: "/kalendar-reja" },
//       { label: "Adabiyotlar", link: "/adabiyotlar" },
//       { label: "Glossariy", link: "/glossariy" },
//       { label: "Pedagogik texnologiyalar", link: "/pedagogik-texnologiyalar" }
//     ]
//   },
//   {
//     label: "Fan ma'lumotlari",
//     icon: "CalendarCheck",
//     children: [
//       { label: "Ma'ruzalar", link: "/maruzalar" },
//       {
//         label: "Amaliy mashg'ulotlar",
//         children: [
//           { label: "Ma'lumotlar", link: "/amaliy-mashgulotlar/malumotlar" },
//           { label: "Topshiriqlar", link: "/amaliy-mashgulotlar/topshiriqlar" }
//         ]
//       },
//       {
//         label: "Mustaqil ish",
//         children: [
//           { label: "Ma'lumotlar", link: "/mustaqil-ish/malumotlar" },
//           { label: "Topshiriqlar", link: "/mustaqil-ish/topshiriqlar" }
//         ]
//       }
//     ]
//   },
//   {
//     label: "Video darslar",
//     icon: "Clapperboard",
//     link: "/video-darslar"
//   },
//   {
//     label: "Integratsion yondoshuv",
//     icon: "FileVolume",
//     link: "/integratsion-yondoshuv"
//   },
//   {
//     label: "Nazoratlar",
//     icon: "FileChartPie",
//     link: "/nazoratlar"
//   },
//   {
//     label: "Natijalar",
//     icon: "ChartColumnBig",
//     link: "/natijalar"
//   },
//   {
//     label: "Baholash mezonlari",
//     icon: "ChartNoAxesCombined",
//     link: "/baholash-mezonlari"
//   },
//   {
//     label: "Innovatsion ta'lim sxemasi",
//     icon: "TvMinimalPlay",
//     link: "/innovatsion-talim-sxemasi"
//   },
//   {
//     label: "Bog'lanish",
//     icon: "Mail",
//     link: "/boglanish"
//   },
//   {
//     label: "Mobil ilova",
//     icon: "Smartphone",
//     link: "/mobil-ilova"
//   }
// ];
