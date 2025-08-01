'use client';
import { useBreadcrumbStore } from '@/shared/store/breadCrump';
import React from 'react';

const Breadcrump = () => {
  const { crumbs } = useBreadcrumbStore();

  return (
    <div className="flex items-center gap-2 border-b pb-[6px]">
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center gap-1">
          {index !== 0 && <span className="text-gray-400">/</span>}
          <button
            className="text-sm flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => {
              if (crumb.href) {
                window.location.href = crumb.href;
              }
            }}
          >
            {crumb.icon}
            <span>{crumb.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Breadcrump;
