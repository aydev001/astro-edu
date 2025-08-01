import {
  House,
  NotebookPen,
  BookMarked,
  BookOpenText,
  Clapperboard,
  ImageDown,
  Telescope,
  Layers,
  Microscope,
  Album,
  Cctv,
  NotebookText,
  PencilRuler,
  Smartphone,
} from 'lucide-react';
import { JSX } from 'react';

export const breadcrumbMap: Record<
  string,
  { label: string; icon: JSX.Element; href?: string }[]
> = {
  '/': [{ label: 'Bosh sahifa', icon: <House size={16} />, href: '/' }],

  '/fan-hujjatlar/fan-dasturi': [
    {
      label: 'Fan meyyoriy hujjatlari',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Fan dasturi',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/fan-dasturi',
    },
  ],
  '/fan-hujjatlar/fan-sillabusi': [
    {
      label: 'Fan meyyoriy hujjatlari',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Fan sillabusi',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/fan-sillabusi',
    },
  ],
  '/fan-hujjatlar/glossary': [
    {
      label: 'Fan meyyoriy hujjatlari',
      icon: <NotebookPen size={16} />,
      href: '#',
    },
    {
      label: 'Glossariy',
      icon: <NotebookPen size={16} />,
      href: '/fan-hujjatlar/glossary',
    },
  ],

  '/fan-malumotlari/maruza': [
    { label: "Fan ma'lumotlari", icon: <BookMarked size={16} />, href: '#' },
    {
      label: "Ma'ruzalar",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/maruza',
    },
  ],
  '/fan-malumotlari/amaliy': [
    { label: "Fan ma'lumotlari", icon: <BookMarked size={16} />, href: '#' },
    {
      label: "Amaliy mashg'ulotlar",
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/amaliy',
    },
  ],
  '/fan-malumotlari/labaratorya': [
    { label: "Fan ma'lumotlari", icon: <BookMarked size={16} />, href: '#' },
    {
      label: 'Labaratorya',
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/labaratorya',
    },
  ],
  '/fan-malumotlari/mustaqil': [
    { label: "Fan ma'lumotlari", icon: <BookMarked size={16} />, href: '#' },
    {
      label: 'Mustaqil ish',
      icon: <BookMarked size={16} />,
      href: '/fan-malumotlari/mustaqil',
    },
  ],

  '/darslik-adabiyot': [
    {
      label: 'Darsliklar va adabiyotlar',
      icon: <BookOpenText size={16} />,
      href: '/darslik-adabiyot',
    },
  ],

  '/videodarslar': [
    {
      label: 'Video darslar',
      icon: <Clapperboard size={16} />,
      href: '/videodarslar',
    },
  ],
  '/fotogalereya': [
    {
      label: 'Fotogalereya va animatsiyalar',
      icon: <ImageDown size={16} />,
      href: '/fotogalereya',
    },
  ],
  '/osmon-xaritasi': [
    {
      label: 'Osmon xaritasi',
      icon: <Telescope size={16} />,
      href: '/osmon-xaritasi',
    },
  ],
  '/astronomik-ilovalar': [
    {
      label: "Astronomik o'quv ilovalari",
      icon: <Layers size={16} />,
      href: '/astronomik-ilovalar',
    },
  ],
  '/virtual-labaratorya': [
    {
      label: 'Virtual labaratoryalar',
      icon: <Microscope size={16} />,
      href: '/virtual-labaratorya',
    },
  ],
  '/ilimiy-ilovalar': [
    {
      label: 'Ilimiy tadqiqot ilovalari',
      icon: <Album size={16} />,
      href: '/ilimiy-ilovalar',
    },
  ],
  '/onlayn-kuzatuvlar': [
    {
      label: 'Onlayn kuzatuvlar',
      icon: <Cctv size={16} />,
      href: '/onlayn-kuzatuvlar',
    },
  ],
  '/testlar': [
    { label: 'Testlar', icon: <NotebookText size={16} />, href: '/testlar' },
  ],
  '/metodik-yordam': [
    {
      label: 'Metodik yordam',
      icon: <PencilRuler size={16} />,
      href: '/metodik-yordam',
    },
  ],
  '/mobil-ilova': [
    {
      label: 'Mobil ilova',
      icon: <Smartphone size={16} />,
      href: '/mobil-ilova',
    },
  ],
};
