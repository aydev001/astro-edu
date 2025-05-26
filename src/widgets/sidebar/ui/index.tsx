'use client';

import { PRODUCT_INFO } from '@/shared/constants/data';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { sidebarMenuData } from '../lib/data';
import SidebarBtn from './SidebarBtn';
import useSidebarStore from '@/shared/store/sidebarSore';

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebarStore();

  return (
    <div
      className={`${isOpen ? 'fixed md:relative left-0' : 'fixed left-[-290px]'} z-50 duration-300 bg-[#fbfcff] min-w-[280px] max-w-[280px] shadow-lg border min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-neutral-300`}
    >
      <div className="px-[15px] py-[10px] flex justify-between items-center gap-1 border-b">
        <img
          className="max-h-[32px]"
          src={PRODUCT_INFO.logoAside}
          alt={PRODUCT_INFO.name}
        />
        <button
          onClick={closeSidebar}
          className="w-[35px] h-[35px] active:bg-indigo-100 duration-100 flex justify-center items-center cursor-pointer rounded-sm hover:bg-indigo-50 text-indigo-500"
        >
          <ArrowLeft size={'20px'} />
        </button>
      </div>
      <div className="flex flex-col py-2">
        {sidebarMenuData.map((item, index) => (
          <SidebarBtn key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
