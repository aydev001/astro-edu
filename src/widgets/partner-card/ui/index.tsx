import React from 'react';

interface PartnerCardProps {
  logoUrl: string;
  title: string;
  description: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  logoUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center lg:border-t flex-1 sm:w-64 py-[10px]">
      <img
        src={logoUrl}
        alt="logo"
        className="w-30 h-24 object-contain border p-[5px] rounded-xs"
      />
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default PartnerCard;
