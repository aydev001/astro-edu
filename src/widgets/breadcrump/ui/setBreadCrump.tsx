'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { House } from 'lucide-react';
import { useBreadcrumbStore } from '@/shared/store/breadCrump';
import { breadcrumbMap } from '../lib/data';

const LocaleAwareBreadcrumbSetter = () => {
  const pathname = usePathname();
  const setCrumbs = useBreadcrumbStore((s) => s.setCrumbs);

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean); // remove empty items
    const isLocale = ['uz', 'ru', 'en'].includes(segments[0]);

    const cleanedSegments = isLocale ? segments.slice(1) : segments;

    // agar oxirgi segment id bo‘lsa (raqam yoki UUID bo‘lishi mumkin)
    const maybeId = cleanedSegments[cleanedSegments.length - 1];
    const isDetail = /^\d+$/.test(maybeId); // raqam bo‘lsa
    const basePathSegments = isDetail
      ? cleanedSegments.slice(0, -1)
      : cleanedSegments;

    const basePath = '/' + basePathSegments.join('/');

    const defaultCrumb = {
      label: 'Bosh sahifa',
      icon: <House size={16} />,
      href: '/',
    };
    const pageCrumbs = breadcrumbMap[basePath] || [];

    const finalCrumbs = [
      defaultCrumb,
      ...pageCrumbs.filter((c) => c.href !== '/'),
    ];

    setCrumbs(finalCrumbs);
  }, [pathname]);

  return null;
};

export default LocaleAwareBreadcrumbSetter;
