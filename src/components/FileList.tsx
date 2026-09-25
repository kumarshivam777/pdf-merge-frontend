import React, { useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { FileItem } from './FileItem';
import { ACCEPTED_FILE_EXTENSIONS, createFileItemFromNativeFile, FileItemData } from '../utils/fileUtils';

interface FileListProps {
  files: FileItemData[];
  onFilesChange: (files: FileItemData[]) => void;
  onRemoveFile: (id: string) => void;
}

export const FileList: React.FC<FileListProps> = ({
  files,
  onFilesChange,
  onRemoveFile,
}) => {
  const addFilesInputRef = useRef<HTMLInputElement>(null);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const [isDraggingIndex, setIsDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (_e: React.DragEvent, position: number) => {
    dragItem.current = position;
    setIsDraggingIndex(position);
  };

  const handleDragEnter = (_e: React.DragEvent, position: number) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const copyListItems = [...files];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      onFilesChange(copyListItems);
    }
    dragItem.current = null;
    dragOverItem.current = null;
    setIsDraggingIndex(null);
  };

  const handleAddMoreFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const added: FileItemData[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        added.push(createFileItemFromNativeFile(e.target.files[i]));
      }
      onFilesChange([...files, ...added]);
      e.target.value = '';
    }
  };

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-6 space-y-2">
      <ul className="space-y-2">
        <AnimatePresence mode="popLayout">
          {files.map((file, index) => (
            <FileItem
              key={file.id}
              file={file}
              index={index}
              onRemove={onRemoveFile}
              onDragStart={handleDragStart}
              onDragEnter={handleDragEnter}
              onDragEnd={handleDragEnd}
              isDragging={isDraggingIndex === index}
            />
          ))}
        </AnimatePresence>
      </ul>

      {/* Add more files row */}
      <div className="pt-2 flex items-center justify-between px-1">
        <input
          ref={addFilesInputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_EXTENSIONS}
          onChange={handleAddMoreFiles}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => addFilesInputRef.current?.click()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6046EC] hover:text-[#4F36DC] transition-colors py-1 px-2.5 rounded-lg hover:bg-purple-50 active:scale-95"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          Add more files
        </button>

        <span className="text-xs text-slate-400">
          {files.length} {files.length === 1 ? 'file' : 'files'} selected
        </span>
      </div>
    </div>
  );
};
