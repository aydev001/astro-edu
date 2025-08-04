'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LectureFile } from '../lib/data';

type Props = {
  data: LectureFile[];
  basePath: string;
  type?: 'table' | 'single';
};

const LectureDetail: React.FC<Props> = ({ data, basePath, type = 'table' }) => {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);

  const file =
    data.find((f) => f.id === id) || (type === 'single' ? data[0] : undefined);

  if (!file) return <div className="p-4">Fayl topilmadi</div>;

  const handleNavigate = (fileId: number) => {
    router.push(`${basePath}/${fileId}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full p-4">
      <div className={`w-full ${type === 'table' ? 'lg:w-3/4' : ''}`}>
        <h2 className="text-xl font-[400] mb-2">{file.title}</h2>
        <iframe
          src={file.src}
          className="w-full h-[80vh] border"
          title={file.title}
        />
      </div>

      {type === 'table' && (
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-[400] mb-2">Boshqa fayllar</h3>
          <div className="flex flex-col border divide-y">
            {data.map((f) => (
              <button
                key={f.id}
                onClick={() => handleNavigate(f.id)}
                className={`text-left text-[14px] text-indigo-900 px-3 py-2 hover:bg-gray-100 ${
                  f.id === file.id ? 'bg-gray-200 font-normal' : ''
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureDetail;
