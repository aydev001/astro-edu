'use client';
import { PRODUCT_INFO } from '@/shared/constants/data';
import { cn } from '@/shared/lib/utils';
import useSidebarStore from '@/shared/store/sidebarSore';
import { Bell, Menu, Search, User, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <header className="fixed z-[99] w-full h-[60px] font-normal left-0 top-0 bg-[linear-gradient(45deg,#4d77ff_0%,#0186f2_100%)]">
      <div className="flex justify-between items-center gap-[10px]">
        <div className="flex justify-start items-center gap-1">
          <button
            onClick={() => toggleSidebar()}
            className="text-white hover:bg-white/15 w-[60px] h-[60px] bg-white/10 flex justify-center items-center cursor-pointer active:bg-white/20 duration-100 relative"
          >
            <Menu
              className={cn(
                isOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0 pointer-events-none',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-300 ease-in-out transform',
              )}
              size={24}
            />
            <X
              className={cn(
                isOpen
                  ? 'opacity-0 scale-0 pointer-events-none'
                  : 'opacity-100 scale-100',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-300 ease-in-out transform',
              )}
              size={24}
            />
          </button>

          <div className="px-[10px]">
            <Image
              className="max-h-[42px] w-[] block md:hidden"
              src={PRODUCT_INFO.logoMobile}
              alt={PRODUCT_INFO.name}
              width={42}
              height={50}
            />
            <Image
              className="max-h-[42px] hidden md:block"
              src={PRODUCT_INFO.logoWhite}
              alt={PRODUCT_INFO.name}
              width={150}
              height={50}
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button className="h-[60px] border-l-[1px] border-white/20 hover:bg-white/20 text-white w-[50px] active:bg-white/10 duration-200 flex justify-center items-center cursor-pointer">
            <Search size={'20px'} />
          </button>
          <button className="h-[60px] border-l-[1px] border-white/20 hover:bg-white/20 text-white w-[50px] active:bg-white/10 duration-200 flex justify-center items-center cursor-pointer">
            <Bell size={'20px'} className="fill-amber-50" />
          </button>
          <button className="h-[60px] border-l-[1px] border-white/20 hover:bg-white/20 text-white w-[50px] active:bg-white/10 duration-200 flex justify-center items-center cursor-pointer">
            <User size={'20px'} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
