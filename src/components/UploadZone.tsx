import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { FileIconBadge } from './FileIconBadge';
import { ACCEPTED_FILE_EXTENSIONS, createFileItemFromNativeFile, FileItemData } from '../utils/fileUtils';

interface UploadZoneProps {
  onFilesAdded: (newFiles: FileItemData[]) => void;
}

export const UploadZone: React.FC<UploadZoneProps> = ({ onFilesAdded }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFiles(e.target.files);
      // Reset input value so re-selecting the same file fires onChange again
      e.target.value = '';
    }
  };

  const processSelectedFiles = (fileList: FileList) => {
    const newItems: FileItemData[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      newItems.push(createFileItemFromNativeFile(file));
    }
    if (newItems.length > 0) {
      onFilesAdded(newItems);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative w-full rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-8 sm:p-10 text-center select-none ${
        isDragOver
          ? 'border-[#7C3AED] bg-purple-50/70 scale-[1.008] shadow-inner'
          : 'border-purple-200/90 bg-[#FBFBFE]/80 hover:bg-[#F6F5FD] hover:border-purple-300'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={ACCEPTED_FILE_EXTENSIONS}
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Cloud Upload Icon Badge */}
      <motion.div
        animate={{ y: isDragOver ? -4 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-14 h-14 rounded-full bg-[#EFEBFF] flex items-center justify-center mb-3 shadow-xs"
      >
        <div className="w-8 h-8 rounded-full bg-[#DDD6FE]/60 flex items-center justify-center">
          <ArrowUp className="w-5 h-5 text-[#6046EC] stroke-[2.6]" />
        </div>
      </motion.div>

      {/* Main Title & Action */}
      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
        Drop your files here
      </h3>
      <p className="text-sm font-normal text-slate-500 mt-1 mb-5">
        or <span className="text-[#6046EC] font-medium hover:underline">click to browse</span>
      </p>

      {/* Supported File Format Badges */}
      <div className="flex items-center justify-center gap-3.5 mb-5">
        <FileIconBadge type="PDF" size="md" />
        <FileIconBadge type="Word" size="md" />
        <FileIconBadge type="Excel" size="md" />
        <FileIconBadge type="Image" size="md" />
      </div>

      {/* Bottom helper text */}
      <p className="text-xs sm:text-xs text-slate-400 font-normal max-w-md leading-relaxed">
        Supported formats: PDF, Word (.docx), Excel (.xlsx), JPG, PNG. The final file will always be a PDF.
      </p>
    </div>
  );
};
