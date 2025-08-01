'use client';
import React from 'react';
import { ExternalResource } from '../lib/data';

type Props = {
  data: ExternalResource[];
};

const GalleryTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-2 font-medium w-12">№</th>
            <th className="border px-4 py-2 font-medium text-left">
              Manba nomi
            </th>
            <th className="border px-4 py-2 font-medium text-left">Izoh</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 1 ? 'bg-gray-50' : ''} cursor-pointer hover:bg-gray-200`}
              onClick={() => window.open(item.url, '_blank')}
            >
              <td className="border px-2 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-indigo-700 font-medium underline">
                {item.title}
              </td>
              <td className="border px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryTable;
