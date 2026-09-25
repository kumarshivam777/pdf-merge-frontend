import React, { useState } from 'react';
import { UploadZone } from '../components/UploadZone';
import { FileList } from '../components/FileList';
import { MergeButton } from '../components/MergeButton';
import { Toast } from '../components/Toast';
import { FileItemData, INITIAL_REFERENCE_FILES } from '../utils/fileUtils';
import { mergeFiles, MergeResponse } from '../services/mergeService';

export const Merge: React.FC = () => {
  const [files, setFiles] = useState<FileItemData[]>(INITIAL_REFERENCE_FILES);
  const [isMerging, setIsMerging] = useState(false);
  const [mergeStatus, setMergeStatus] = useState('');
  const [mergeResult, setMergeResult] = useState<MergeResponse | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleFilesAdded = (newFiles: FileItemData[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    showToast(`Added ${newFiles.length} ${newFiles.length === 1 ? 'file' : 'files'}`);
  };

  const handleFilesChange = (reorderedFiles: FileItemData[]) => {
    setFiles(reorderedFiles);
    showToast('File order updated');
  };

  const handleRemoveFile = (id: string) => {
    const file = files.find((f) => f.id === id);
    setFiles((prev) => prev.filter((f) => f.id !== id));
    if (file) showToast(`Removed ${file.name}`);
  };

  const handleMerge = async () => {
    if (files.length === 0) return;
    setIsMerging(true);
    setMergeStatus('Preparing...');

    try {
      const result = await mergeFiles(files, (_progress, stepText) => {
        setMergeStatus(stepText);
      });
      setMergeResult(result);
      showToast('Files merged successfully!');
    } catch (err: unknown) {
      const error = err as Error;
      showToast(error.message || 'Error merging files');
    } finally {
      setIsMerging(false);
    }
  };

  const handleReset = () => {
    setMergeResult(null);
    setMergeStatus('');
    setFiles(INITIAL_REFERENCE_FILES);
    showToast('Reset list');
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Toast message={toastMessage} />

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Merge your PDF files <span className="text-[#6046EC]">in seconds</span>
        </h1>
        <p className="mt-2 text-slate-500 text-sm sm:text-base">
          Drop your documents below, arrange the sequence, and generate your combined PDF.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_12px_40px_rgba(79,70,229,0.06),0_2px_10px_rgba(0,0,0,0.02)]">
        <UploadZone onFilesAdded={handleFilesAdded} />

        <FileList
          files={files}
          onFilesChange={handleFilesChange}
          onRemoveFile={handleRemoveFile}
        />

        <MergeButton
          onMerge={handleMerge}
          onReset={handleReset}
          isMerging={isMerging}
          statusText={mergeStatus}
          mergeResult={mergeResult}
          fileCount={files.length}
        />
      </div>
    </div>
  );
};
