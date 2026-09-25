import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Loader2, CheckCircle2, RotateCcw, Lock, ArrowDown } from 'lucide-react';
import { MergeResponse } from '../services/mergeService';

interface MergeButtonProps {
  onMerge: () => void;
  onReset: () => void;
  isMerging: boolean;
  statusText: string;
  mergeResult: MergeResponse | null;
  fileCount: number;
}

export const MergeButton: React.FC<MergeButtonProps> = ({
  onMerge,
  onReset,
  isMerging,
  statusText,
  mergeResult,
  fileCount,
}) => {
  return (
    <div className="w-full mt-6 flex flex-col items-center">
      <AnimatePresence mode="wait">
        {!mergeResult ? (
          <motion.div
            key="merge-action"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="w-full flex flex-col items-center"
          >
            {/* Merge Files Button */}
            <motion.button
              type="button"
              whileHover={{ scale: isMerging || fileCount === 0 ? 1 : 1.02 }}
              whileTap={{ scale: isMerging || fileCount === 0 ? 1 : 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={onMerge}
              disabled={isMerging || fileCount === 0}
              className={`w-full max-w-sm sm:max-w-md py-3.5 px-6 rounded-2xl font-bold text-base text-white flex items-center justify-center gap-2.5 shadow-lg shadow-purple-500/25 transition-all duration-200 ${
                fileCount === 0
                  ? 'bg-slate-300 cursor-not-allowed shadow-none'
                  : isMerging
                  ? 'bg-[#6046EC] opacity-90 cursor-wait'
                  : 'bg-gradient-to-r from-[#5B43EE] via-[#6B46F2] to-[#7B42F6] hover:brightness-105 active:shadow-md cursor-pointer'
              }`}
            >
              {isMerging ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>{statusText || 'Preparing...'}</span>
                </>
              ) : (
                <>
                  {/* Stylized stack icon matching reference */}
                  <Layers className="w-5 h-5 stroke-[2.2]" />
                  <span>Merge Files</span>
                </>
              )}
            </motion.button>

            {/* Privacy note below button */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center font-normal">
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Files stay on your device while you're working with them.</span>
            </div>
          </motion.div>
        ) : (
          /* Success State */
          <motion.div
            key="success-action"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md bg-purple-50/70 border border-purple-200/80 rounded-2xl p-5 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
            </div>

            <h4 className="text-lg font-bold text-slate-900 tracking-tight">
              {mergeResult.message}
            </h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Combined {mergeResult.totalFiles} files into <span className="font-semibold text-slate-700">{mergeResult.fileName}</span> ({mergeResult.totalSizeFormatted})
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
              {/* Simulated download button */}
              <button
                type="button"
                onClick={() => {
                  // Simulated download notification
                  const element = document.createElement('a');
                  const dummyData = new Blob(['Simulated merged PDF output from PDF Merge frontend tool.'], { type: 'application/pdf' });
                  element.href = URL.createObjectURL(dummyData);
                  element.download = mergeResult.fileName;
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
                className="w-full flex-1 py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-[#6046EC] hover:bg-[#523BD8] active:scale-97 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <ArrowDown className="w-4 h-4 stroke-[2.2]" />
                Download PDF
              </button>

              {/* Start Over button */}
              <button
                type="button"
                onClick={onReset}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 active:scale-97 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                Start Over
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-3 italic">
              Frontend simulation completed. Backend conversion API will be attached in future releases.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
