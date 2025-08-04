// components/FontSizeEffect.tsx
'use client';

import { useEffect } from 'react';
import { useAccessibilityStore } from '@/shared/store/accessibilityStore';

export const FontSizeEffect = () => {
  const { fontSize } = useAccessibilityStore();

  useEffect(() => {
    const elements = document.querySelectorAll('[data-access-size]');

    elements.forEach((el) => {
      const element = el as HTMLElement;
      const defaultSize = parseFloat(
        element.getAttribute('data-default-font') ||
          window.getComputedStyle(element).fontSize,
      );

      // saqlanmagan bo‘lsa, saqlab qo‘yamiz
      element.setAttribute('data-default-font', defaultSize.toString());

      let newSize = defaultSize;

      if (fontSize === 'large') newSize = defaultSize * 1.1;
      if (fontSize === 'small') newSize = defaultSize * 0.95;

      element.style.fontSize = `${newSize}px`;
    });
  }, [fontSize]);

  return null;
};
