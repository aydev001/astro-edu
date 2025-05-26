import React from 'react';
import { CountUpMotion } from '../../count-up/ui';

type StatCardProps = {
  title: string;
  subtitle: string;
  value: number;
  progress: number; // foiz
  progressLabel: string;
  gradientFrom: string;
  gradientTo: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  subtitle,
  value,
  progress,
  progressLabel,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`rounded-sm text-white p-4 w-full shadow-md`}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="font-semibold text-md">{title}</div>
        <div className="text-xl font-semibold">
          <CountUpMotion to={value} />
        </div>
      </div>
      <div className="text-xs text-white/80 mb-3">{subtitle}</div>

      <div className="w-full h-1 rounded-full bg-white/30 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-1 rounded-full bg-white"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center mt-1 text-xs text-white/90">
        <span>{progressLabel}</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default StatCard;
