'use client';
import { cn } from '@/shared/lib/utils';
import { useAccessibilityStore } from '@/shared/store/accessibilityStore';
import Breadcrump from '@/widgets/breadcrump/ui';
import LocaleAwareBreadcrumbSetter from '@/widgets/breadcrump/ui/setBreadCrump';
import { FontSizeEffect } from '@/widgets/font-size-effect/ui';
import Navbar from '@/widgets/navbar/ui';
import Sidebar from '@/widgets/sidebar/ui';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useAccessibilityStore();
  return (
    <div
      className={cn(
        theme === 'sepia'
          ? 'sepia-10 grayscale-100'
          : cn(
              theme === 'default'
                ? 'sepia-0 invert-0 grayscale-0'
                : 'sepia-10 invert-100 grayscale-100',
            ),
        'fixed inset-0',
      )}
    >
      <FontSizeEffect />
      <Navbar />
      <div className="mt-[60px] flex justify-between items-start">
        <Sidebar />
        <div className="flex-1 p-[20px] min-h-[calc(100vh-60px)] max-w-[1600px] bg-white mx-auto max-h-[calc(100vh-60px)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-neutral-400">
          <LocaleAwareBreadcrumbSetter />
          <Breadcrump />
          <div className="py-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
