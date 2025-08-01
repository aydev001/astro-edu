'use client';

import { skyMapSites } from '../lib/data';
import SkyMapSiteCard from './SkyMapSiteCard';

export default function SkyMapPage() {
  return (
    <div className="mx-auto p-2 space-y-2">
      <h1 className="text-md font-medium mb-2">Osmon xaritasi saytlar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {skyMapSites.map((site) => (
          <SkyMapSiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}
