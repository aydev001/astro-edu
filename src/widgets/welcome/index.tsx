import { partners } from '@/widgets/partner-card/lib/data';
import PartnerCard from '@/widgets/partner-card/ui';
import { statCardData } from '@/widgets/stat-card/lib/data';
import StatCard from '@/widgets/stat-card/ui';
import { tasks } from '@/widgets/task-card/lib/data';
import TaskCard from '@/widgets/task-card/ui';
import React from 'react';

const Welcome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[10px]">
        {statCardData.map((data, idx) => (
          <StatCard key={idx} {...data} />
        ))}
      </div>
      <div className="flex max-lg:flex-col py-[15px] gap-[10px]">
        <section className="p-[15px] pb-0 border rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Fan topshiriqlari</h2>
          <div className="grid grid-cols-1">
            {tasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </section>

        <section className="p-[15px] pb-0 border rounded-md shadow-sm flex-1">
          <h2 className="text-xl font-semibold mb-2">Hamkor tashkilotlar</h2>
          <div className="flex lg:flex-col justify-center lg:items-center">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
