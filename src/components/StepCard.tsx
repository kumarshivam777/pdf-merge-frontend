import React from 'react';

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[240px] relative">
      {/* Icon with numbered badge */}
      <div className="relative mb-4">
        {/* Step number badge */}
        <div className="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#6046EC] text-white text-xs font-bold flex items-center justify-center shadow-xs z-10">
          {number}
        </div>

        {/* Circular icon container */}
        <div className="w-16 h-16 rounded-2xl bg-[#F0ECFF] flex items-center justify-center text-[#6046EC] shadow-2xs">
          {icon}
        </div>
      </div>

      {/* Step title */}
      <h4 className="text-base font-bold text-[#0F172A] tracking-tight mb-1.5">
        {title}
      </h4>

      {/* Step description */}
      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
        {description}
      </p>
    </div>
  );
};
