import React from 'react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  description: string;
  cardBgClass?: string;
  borderColorClass?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconBgClass,
  iconColorClass,
  title,
  description,
  cardBgClass = 'bg-white',
  borderColorClass = 'border-slate-100',
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className={`rounded-2xl p-6 border ${borderColorClass} ${cardBgClass} shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col items-start transition-shadow hover:shadow-md`}
    >
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${iconBgClass} ${iconColorClass}`}>
        {icon}
      </div>

      <h4 className="text-base font-bold text-[#0F172A] tracking-tight mb-1.5">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
