import React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';

interface FileIconBadgeProps {
  type: 'PDF' | 'Word' | 'Excel' | 'Image';
  size?: 'sm' | 'md' | 'lg' | 'floating';
  className?: string;
}

export const FileIconBadge: React.FC<FileIconBadgeProps> = ({
  type,
  size = 'md',
  className = '',
}) => {
  if (type === 'PDF') {
    if (size === 'floating') {
      return (
        <div className={`w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg shadow-red-500/20 border border-white/40 ${className}`}>
          <FileText className="w-5 h-5 text-white/90 stroke-[2.2]" />
          <span className="text-[10px] font-extrabold tracking-wider leading-none mt-0.5">PDF</span>
        </div>
      );
    }
    if (size === 'lg') {
      return (
        <div className={`w-10 h-10 bg-red-500 rounded-xl flex flex-col items-center justify-center text-white shadow-sm font-bold text-xs ${className}`}>
          <span className="text-[9px] font-black uppercase tracking-tight">PDF</span>
        </div>
      );
    }
    return (
      <div className={`w-7 h-7 bg-red-500 rounded-lg flex flex-col items-center justify-center text-white font-extrabold shadow-sm ${className}`}>
        <span className="text-[8px] font-black uppercase tracking-tighter">PDF</span>
      </div>
    );
  }

  if (type === 'Word') {
    if (size === 'floating') {
      return (
        <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border border-white/40 ${className}`}>
          <span className="text-xl font-black">W</span>
        </div>
      );
    }
    if (size === 'lg') {
      return (
        <div className={`w-10 h-10 bg-[#1D63ED] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm ${className}`}>
          W
        </div>
      );
    }
    return (
      <div className={`w-7 h-7 bg-[#1D63ED] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm ${className}`}>
        W
      </div>
    );
  }

  if (type === 'Excel') {
    if (size === 'floating') {
      return (
        <div className={`w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 border border-white/40 ${className}`}>
          <span className="text-xl font-black">X</span>
        </div>
      );
    }
    if (size === 'lg') {
      return (
        <div className={`w-10 h-10 bg-[#107C41] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm ${className}`}>
          X
        </div>
      );
    }
    return (
      <div className={`w-7 h-7 bg-[#107C41] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm ${className}`}>
        X
      </div>
    );
  }

  // Image
  if (size === 'floating') {
    return (
      <div className={`w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 border border-white/40 ${className}`}>
        <ImageIcon className="w-6 h-6 stroke-[2.2]" />
      </div>
    );
  }
  if (size === 'lg') {
    return (
      <div className={`w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-sm ${className}`}>
        <ImageIcon className="w-5 h-5 stroke-[2.2]" />
      </div>
    );
  }
  return (
    <div className={`w-7 h-7 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-sm ${className}`}>
      <ImageIcon className="w-4 h-4 stroke-[2.2]" />
    </div>
  );
};
