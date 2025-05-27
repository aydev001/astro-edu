'use client';
import { House } from 'lucide-react';
import React from 'react';

const Breadcrump = () => {
  return (
    <div className="flex justify-start items-center gap-2 border-b pb-[6px]">
      <div className="text-[20px]">Bosh sahifa</div>
      <div className="flex justify-start items-center gap-1">
        <button className="border-l px-1 text-[14px] cursor-pointer hover:bg-gray-100 py-1 flex justify-center items-start gap-1">
          <House size={'18px'} />
          <span>Bosh sahifa</span>
        </button>
      </div>
    </div>
  );
};

export default Breadcrump;
