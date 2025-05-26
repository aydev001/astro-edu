import React from 'react';

interface TaskCardProps {
  title: string;
  subtitle: string;
  description: string;
  hours: number;
  imageUrl: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  description,
  hours,
  imageUrl,
}) => {
  return (
    <div className="bg-white border-t py-4 flex flex-col sm:flex-row items-start gap-4 w-full">
      <img
        src={imageUrl}
        alt="task"
        className="w-35 h-35 max-sm:w-full object-cover rounded-sm border"
      />
      <div className="flex-1 flex flex-col items-start h-full justify-between gap-2">
        <div className="flex justify-between items-center max-sm:w-full">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <div className="text-violet-800 text-xl font-bold sm:hidden">
            {hours}
          </div>
        </div>
        <p className="text-xs text-gray-600 uppercase font-medium ">
          {subtitle}
        </p>
        <p className="text-xs text-gray-700">{description}</p>
        <button className="text-[14px] px-[15px] active:bg-yellow-500 py-[3px] rounded-full border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 duration-500 cursor-pointer">
          Batafsil
        </button>
      </div>
      <div className="text-violet-800 text-xl font-bold max-sm:hidden">
        {hours}
      </div>
    </div>
  );
};

export default TaskCard;
