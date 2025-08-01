import { skyMapApps } from '@/widgets/sky-map/lib/data';
import SkyMapGrid from '@/widgets/sky-map/ui';

const page = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-semibold mb-2">{`Astronomik oq'uv ilovalar`}</h1>
      <SkyMapGrid data={skyMapApps} />
    </div>
  );
};

export default page;
