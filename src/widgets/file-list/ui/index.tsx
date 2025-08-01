'use client';
import React from 'react';
import { LectureFile } from '../lib/data';
import { useRouter } from 'next/navigation';

type Props = {
  data: LectureFile[];
  basePath: string; // yangi qo‘shildi
};

const LectureTable: React.FC<Props> = ({ data, basePath }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`${basePath}/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-2 font-medium w-12">№</th>
            <th className="border px-4 py-2 font-medium text-left">
              Mavzu nomi
            </th>
            <th className="border px-2 py-2 font-medium w-16">Soat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr
              key={file.id}
              className={`${index % 2 === 1 ? 'bg-gray-50' : ''} cursor-pointer hover:bg-gray-200`}
              onClick={() => handleClick(file.id)}
            >
              <td className="border px-2 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-indigo-900">{file.title}</td>
              <td className="border px-2 py-2 text-center">{file.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LectureTable;
