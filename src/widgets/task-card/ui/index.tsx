import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface TaskCardProps {
  title: string;
  subtitle: string;
  description: string;
  hours: number;
  imageUrl: string;
  link: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  description,
  hours,
  imageUrl,
  link,
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(link);
  };

  return (
    <div className="bg-white border-t py-4 flex flex-col sm:flex-row items-start gap-4 w-full">
      <Image
        src={imageUrl}
        alt="task"
        className="w-35 h-35 max-sm:w-full object-cover rounded-sm border"
        width={500}
        height={500}
      />
      <div className="flex-1 flex flex-col items-start h-full justify-between gap-2">
        <div className="flex justify-between items-center max-sm:w-full">
          <h3 data-access-size className="text-lg font-medium text-gray-800">
            {title}
          </h3>
          <div
            data-access-size
            className="text-violet-800 text-xl font-bold sm:hidden"
          >
            {hours}
          </div>
        </div>
        <p
          data-access-size
          className="text-xs text-gray-600 uppercase font-medium "
        >
          {subtitle}
        </p>
        <p data-access-size className="text-xs text-gray-700">
          {description}
        </p>
        <button
          onClick={handleNavigate}
          className="text-[14px] px-[15px] active:bg-yellow-500 py-[3px] rounded-full border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 duration-500 cursor-pointer"
        >
          Batafsil
        </button>
      </div>
      <div
        data-access-size
        className="text-violet-800 text-xl font-bold max-sm:hidden"
      >
        {hours}
      </div>
    </div>
  );
};

export default TaskCard;
