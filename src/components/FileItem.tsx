import React from 'react';
import { motion } from 'motion/react';
import { GripVertical, X } from 'lucide-react';
import { FileItemData } from '../utils/fileUtils';
import { FileIconBadge } from './FileIconBadge';

interface FileItemProps {
  file: FileItemData;
  index: number;
  onRemove: (id: string) => void;
  onDragStart?: (e: React.DragEvent, index: number) => void;
  onDragEnter?: (e: React.DragEvent, index: number) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
}

export const FileItem: React.FC<FileItemProps> = ({
  file,
  index,
  onRemove,
  onDragStart,
  onDragEnter,
  onDragEnd,
  isDragging,
}) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: isDragging ? 0.4 : 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, x: 20 }}
      transition={{ duration: 0.2 }}
      draggable
      onDragStart={(e) => onDragStart && onDragStart(e as unknown as React.DragEvent, index)}
      onDragEnter={(e) => onDragEnter && onDragEnter(e as unknown as React.DragEvent, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      className={`group flex items-center justify-between py-3.5 px-4 rounded-xl bg-white border transition-all duration-150 select-none ${
        isDragging
          ? 'border-[#6046EC] shadow-md bg-purple-50/40'
          : 'border-slate-100 hover:border-purple-200 hover:shadow-xs'
      }`}
    >
      {/* Left section: drag handle, icon, filename */}
      <div className="flex items-center gap-3.5 min-w-0">
        <button
          type="button"
          className="text-slate-300 group-hover:text-slate-500 cursor-grab active:cursor-grabbing p-0.5 rounded transition-colors"
          title="Drag to reorder"
          aria-label="Drag to reorder"
        >
          <GripVertical className="w-4 h-4" />
        </button>

        <FileIconBadge type={file.typeCategory} size="sm" />

        <div className="truncate">
          <p className="text-sm font-semibold text-[#0F172A] truncate tracking-tight max-w-[180px] sm:max-w-xs md:max-w-sm">
            {file.name}
          </p>
          <p className="text-[11px] text-slate-400 font-normal md:hidden">
            {file.typeCategory} · {file.sizeFormatted}
          </p>
        </div>
      </div>

      {/* Right section: file size and remove button */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-xs sm:text-sm font-medium text-slate-400 hidden md:inline-block">
          {file.sizeFormatted}
        </span>

        <button
          type="button"
          onClick={() => onRemove(file.id)}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-150 active:scale-95"
          title="Remove file"
          aria-label={`Remove ${file.name}`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.li>
  );
};
