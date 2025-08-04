import { galleryResources } from '@/widgets/galery-table/lib/data';
import GalleryTable from '@/widgets/galery-table/ui';

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-normal mb-4">
        Fotogalereya va Animatsiyalar
      </h1>
      <GalleryTable data={galleryResources} />
    </div>
  );
};

export default Page;
