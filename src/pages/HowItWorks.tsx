import React from 'react';
import { UploadCloud, ListOrdered, FileCheck, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          How it works
        </h1>
        <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-3"></div>
        <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Combining your documents takes three easy steps. No registration, no watermarks, and no software installation.
        </p>
      </div>

      {/* Step by step deep dive cards */}
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_4px_20px_rgba(79,70,229,0.04)] flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EFEBFF] text-[#6046EC] flex items-center justify-center shrink-0">
            <UploadCloud className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#6046EC] text-xs font-bold mb-2">
              Step 01
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Select or Drop Your Files
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Select PDF documents, Word files (.docx), Excel spreadsheets (.xlsx), and images (.png, .jpg) directly from your computer or mobile device. You can add files all at once or bring in more at any time.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">.pdf</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">.docx</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">.xlsx</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">.png</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">.jpg</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_4px_20px_rgba(79,70,229,0.04)] flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EFEBFF] text-[#6046EC] flex items-center justify-center shrink-0">
            <ListOrdered className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#6046EC] text-xs font-bold mb-2">
              Step 02
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Arrange the Precise Order
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Drag each row up or down until your documents appear in the exact sequence you want them merged. Remove any unwanted pages or files with a single click.
            </p>
            <p className="text-xs text-slate-400">
              Tip: The file at the top of your list becomes the first section of your unified PDF.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_4px_20px_rgba(79,70,229,0.04)] flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EFEBFF] text-[#6046EC] flex items-center justify-center shrink-0">
            <FileCheck className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#6046EC] text-xs font-bold mb-2">
              Step 03
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Click Merge and Download
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Hit "Merge Files". The system consolidates all pages cleanly into a single unified PDF file ready for immediate download, archiving, or sharing.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#6046EC] hover:bg-[#523BD8] transition-all shadow-xs"
            >
              Try Merging Now
            </Link>
          </div>
        </div>
      </div>

      {/* Key Principles Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 p-6 rounded-2xl border border-slate-100 text-center">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6046EC] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-[#0F172A] text-sm mb-1">Local Processing</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your files stay safe on your local device while you prepare them.
          </p>
        </div>

        <div className="bg-white/80 p-6 rounded-2xl border border-slate-100 text-center">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6046EC] flex items-center justify-center mx-auto mb-3">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-[#0F172A] text-sm mb-1">Rapid Preparation</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Fast drag-and-drop file organization with instant preview feedback.
          </p>
        </div>

        <div className="bg-white/80 p-6 rounded-2xl border border-slate-100 text-center">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6046EC] flex items-center justify-center mx-auto mb-3">
            <Laptop className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-[#0F172A] text-sm mb-1">Any Device</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Works smoothly on modern phones, tablets, Chromebooks, and desktops.
          </p>
        </div>
      </div>
    </div>
  );
};
