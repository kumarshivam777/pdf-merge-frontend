import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, ListOrdered, FileCheck, UserCheck, Infinity as InfinityIcon, Layers, Heart } from 'lucide-react';
import { UploadZone } from '../components/UploadZone';
import { FileList } from '../components/FileList';
import { MergeButton } from '../components/MergeButton';
import { StepCard } from '../components/StepCard';
import { FeatureCard } from '../components/FeatureCard';
import { FAQItem } from '../components/FAQItem';
import { Toast } from '../components/Toast';
import { FileItemData, INITIAL_REFERENCE_FILES } from '../utils/fileUtils';
import { mergeFiles, MergeResponse } from '../services/mergeService';

export const Home: React.FC = () => {
  const [files, setFiles] = useState<FileItemData[]>(INITIAL_REFERENCE_FILES);
  const [isMerging, setIsMerging] = useState(false);
  const [mergeStatus, setMergeStatus] = useState('');
  const [mergeResult, setMergeResult] = useState<MergeResponse | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
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
    const fileToRemove = files.find((f) => f.id === id);
    setFiles((prev) => prev.filter((f) => f.id !== id));
    if (fileToRemove) {
      showToast(`Removed ${fileToRemove.name}`);
    }
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
    showToast('Reset to initial state');
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-14 pb-12 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Background Decorative Dotted Curves matching reference */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none -z-0">
          {/* Left curved dotted line */}
          <svg className="absolute left-6 top-8 w-72 h-64 text-purple-300/60" viewBox="0 0 280 240" fill="none">
            <path
              d="M 50 20 C 10 90, 20 160, 180 180"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeDasharray="5 5"
            />
          </svg>

          {/* Right curved dotted line */}
          <svg className="absolute right-6 top-8 w-72 h-64 text-purple-300/60" viewBox="0 0 280 240" fill="none">
            <path
              d="M 230 20 C 270 90, 260 160, 100 180"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeDasharray="5 5"
            />
          </svg>
        </div>

        {/* Decorative Floating File Cards */}
        {/* PDF Card Top-Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:flex absolute left-10 top-12 flex-col items-center z-10"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#FF4D4D] to-[#E60000] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl shadow-red-500/15 border border-white/80">
            <svg className="w-5 h-5 text-white/95" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4z" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-tight -mt-0.5">PDF</span>
          </div>
        </motion.div>

        {/* Word Card Bottom-Left */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hidden lg:flex absolute left-4 top-44 flex-col items-center z-10"
        >
          <div className="w-13 h-13 bg-gradient-to-br from-[#1D63ED] to-[#0D4CB5] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/15 border border-white/80">
            <span className="text-xl font-black">W</span>
          </div>
        </motion.div>

        {/* Green Image Card Top-Right */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="hidden lg:flex absolute right-16 top-10 flex-col items-center z-10"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#22C55E] to-[#15803D] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-500/15 border border-white/80">
            <svg className="w-7 h-7 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </motion.div>

        {/* Orange Image Card Bottom-Right */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="hidden lg:flex absolute right-6 top-36 flex-col items-center z-10"
        >
          <div className="w-13 h-13 bg-gradient-to-br from-[#FB923C] to-[#EA580C] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/15 border border-white/80">
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </motion.div>

        {/* Excel Card Floating near Left Middle (Added support format) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hidden xl:flex absolute left-28 top-80 flex-col items-center z-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-[#107C41] to-[#0A572D] rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-600/15 border border-white/80">
            <span className="text-sm font-black">X</span>
          </div>
        </motion.div>

        {/* Main Hero Header */}
        <div className="max-w-2xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Merge your PDF files <br />
            <span className="text-[#6046EC]">in seconds</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            Combine PDF, Word, Excel or image files into a single PDF. Fast, simple and free.
          </p>
        </div>

        {/* Main Central Upload & Merge Card */}
        <div className="mt-10 max-w-2xl mx-auto bg-white rounded-3xl p-5 sm:p-7 border border-purple-100/80 shadow-[0_12px_40px_rgba(79,70,229,0.06),0_2px_10px_rgba(0,0,0,0.02)] relative z-10">
          {/* Upload Zone */}
          <UploadZone onFilesAdded={handleFilesAdded} />

          {/* File List */}
          <FileList
            files={files}
            onFilesChange={handleFilesChange}
            onRemoveFile={handleRemoveFile}
          />

          {/* Merge Button (strictly below file list) */}
          <MergeButton
            onMerge={handleMerge}
            onReset={handleReset}
            isMerging={isMerging}
            statusText={mergeStatus}
            mergeResult={mergeResult}
            fileCount={files.length}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            How it works
          </h2>
          <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative">
          {/* Step 1 */}
          <StepCard
            number="1"
            icon={<UploadCloud className="w-8 h-8 stroke-[2.2]" />}
            title="Upload your files"
            description="Add PDF, Word, Excel or image files in any format."
          />

          {/* Arrow */}
          <div className="hidden md:flex text-slate-300 -mt-6">
            <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Step 2 */}
          <StepCard
            number="2"
            icon={<ListOrdered className="w-8 h-8 stroke-[2.2]" />}
            title="Set the order"
            description="Drag and arrange files in the sequence you want."
          />

          {/* Arrow */}
          <div className="hidden md:flex text-slate-300 -mt-6">
            <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Step 3 */}
          <StepCard
            number="3"
            icon={<FileCheck className="w-8 h-8 stroke-[2.2]" />}
            title="Click merge"
            description="Get your single PDF file and download it."
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why use this tool?
          </h2>
          <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard
            icon={<UserCheck className="w-5 h-5 stroke-[2.2]" />}
            iconBgClass="bg-purple-100/70"
            iconColorClass="text-[#6046EC]"
            title="No login required"
            description="Start using it right away without creating an account."
            cardBgClass="bg-white"
          />

          <FeatureCard
            icon={<InfinityIcon className="w-5 h-5 stroke-[2.2]" />}
            iconBgClass="bg-emerald-100/70"
            iconColorClass="text-emerald-600"
            title="No file limit, no ads"
            description="Merge as many files as you want, completely free."
            cardBgClass="bg-white"
          />

          <FeatureCard
            icon={<Layers className="w-5 h-5 stroke-[2.2]" />}
            iconBgClass="bg-amber-100/70"
            iconColorClass="text-amber-600"
            title="Supports PDF, Word and images"
            description="Keep different file types together in one place."
            cardBgClass="bg-white"
          />

          <FeatureCard
            icon={<Heart className="w-5 h-5 stroke-[2.2]" />}
            iconBgClass="bg-rose-100/70"
            iconColorClass="text-rose-500"
            title="100% free"
            description="Use the tool without a subscription or watermark."
            cardBgClass="bg-white"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently asked questions
          </h2>
          <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-2"></div>
        </div>

        <div className="space-y-3">
          <FAQItem
            question="Will my Word document formatting be changed?"
            answer="Basic text formatting (bold, headings, paragraphs) is preserved. Complex tables or custom desktop font styles may look slightly adjusted to fit standard PDF pages."
            defaultOpen={true}
          />
          <FAQItem
            question="Can I merge Excel files?"
            answer="Yes. Excel sheets (.xls, .xlsx) are parsed page by page so columns and rows fit cleanly within the merged PDF."
          />
          <FAQItem
            question="What file types can I select?"
            answer="You can combine PDF (.pdf), Microsoft Word (.doc, .docx), Microsoft Excel (.xls, .xlsx), and images (.jpg, .jpeg, .png)."
          />
          <FAQItem
            question="Are my files uploaded anywhere?"
            answer="No. Everything is processed directly within your browser and never uploaded to any external server."
          />
          <FAQItem
            question="Can I change the file order?"
            answer="Yes. Use the grip handle next to any document to drag and drop it into your preferred order before clicking merge."
          />
          <FAQItem
            question="How many files can I merge at once?"
            answer="As many as you want. There is no artificial restriction on file counts."
          />
          <FAQItem
            question="Can I use the tool on mobile?"
            answer="Yes, PDF Merge runs smoothly on Android, iOS, tablets, and desktop browsers."
          />
        </div>
      </section>
    </div>
  );
};
