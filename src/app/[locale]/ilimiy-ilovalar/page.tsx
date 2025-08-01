import { researchPlatforms } from '@/widgets/sky-map-site/lib/data';
import SkyMapSiteCard from '@/widgets/sky-map-site/ui/SkyMapSiteCard';
import React from 'react';

const page = () => {
  return (
    <div className="mx-auto p-2 space-y-2">
      <h1 className="text-md font-medium mb-2">Ilmiy onlayn ilovalar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {researchPlatforms.map((site) => (
          <SkyMapSiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
};

export default page;
