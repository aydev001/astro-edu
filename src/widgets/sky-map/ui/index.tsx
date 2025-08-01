import React from 'react';
import SkyMapCard from './SkyMapCard';
import { SkyMapApp } from '../lib/data';

type Props = {
  data: SkyMapApp[];
};

const SkyMapGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270,1fr))] gap-2">
      {data.map((app) => (
        <SkyMapCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default SkyMapGrid;
