'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuItem } from '../lib/data';
import * as Icons from 'lucide-react';
import { useState } from 'react';

const SidebarBtn = ({ item }: { item: SidebarMenuItem }) => {
  const pathname = usePathname();

  const isActive = item.link === pathname.replace(/^\/(uz|ru|ki)/, '');
  const hasActiveChild =
    item.children?.some(
      (child) => child.link === pathname.replace(/^\/(uz|ru|ki)/, ''),
    ) ?? false;

  const [showMenu, setSowMenu] = useState<boolean>(hasActiveChild);

  function getLucideIcon(name: string) {
    const IconComponent = Icons[name as keyof typeof Icons] as
      | Icons.LucideIcon
      | undefined;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  }

  return (
    <div data-access-size className="flex flex-col gap-1">
      {item.link ? (
        <Link
          href={item.link}
          className={`px-4 ${
            item.icon ? 'py-3' : 'py-2'
          } flex items-center gap-1 min-w-full hover:bg-gray-100 duration-75 active:bg-gray-200 rounded 
          ${isActive ? 'bg-gray-100 text-black' : ''}`}
        >
          {item.icon && getLucideIcon(item.icon)}
          <span>{item.label}</span>
        </Link>
      ) : (
        <div
          onClick={() => setSowMenu((prev) => !prev)}
          className={`px-4 ${
            item.icon ? 'py-3' : 'py-2'
          } flex items-center justify-between gap-1 min-w-full cursor-pointer hover:bg-gray-100 duration-75 active:bg-gray-200 rounded 
          ${hasActiveChild ? 'bg-gray-100 text-black' : ''}`}
        >
          <div className="flex justify-start items-center gap-1">
            {item.icon && getLucideIcon(item.icon)}
            <span>{item.label}</span>
          </div>
          <div
            className={`${
              showMenu ? 'rotate-180' : 'rotate-0'
            } text-neutral-600 duration-300`}
          >
            <Icons.ChevronDown size={'20px'} />
          </div>
        </div>
      )}

      {item.children && (
        <div
          className={`overflow-hidden transition-[max-height] duration-500 flex flex-col cursor-pointer ml-7 border-l border-dashed border-gray-400`}
          style={{
            maxHeight: showMenu ? '999px' : '0px',
          }}
        >
          {item.children.map((child, index) => (
            <SidebarBtn key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarBtn;
