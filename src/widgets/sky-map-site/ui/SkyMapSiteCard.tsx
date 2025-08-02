import Link from 'next/link';
import { SkyMapSite } from '../lib/data';
import Image from 'next/image';

interface Props {
  site: SkyMapSite;
}

export default function SkyMapSiteCard({ site }: Props) {
  return (
    <div className="flex max-sm:flex-col gap-2 border rounded-sm overflow-hidden p-2 shadow-sm bg-white">
      <div className="w-64 h-auto max-sm:w-full">
        <Image
          width={300}
          height={300}
          src={site.image}
          alt={site.title}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-[20px] font-medium mb-2">{site.title}</h2>
          <p className="text-gray-700 text-[14px]">{site.description}</p>
        </div>
        <div className="mt-4">
          <Link href={site.url} target="_blank">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full">
              {`Saytga o'tish`}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
