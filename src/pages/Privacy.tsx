import React from 'react';
import { ShieldCheck, HardDrive, EyeOff, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Privacy Policy
        </h1>
        <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-3"></div>
        <p className="mt-4 text-base text-slate-500 max-w-lg mx-auto">
          Clear, straightforward information on how your data is handled.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100/80 shadow-[0_8px_30px_rgba(79,70,229,0.04)] space-y-8">
        {/* Core highlight */}
        <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/60 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#6046EC] text-white flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1">
              Your files stay on your device
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In this application version, files you select are handled strictly within your web browser's local memory. No files, documents, or data are transmitted or stored on any external server.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <HardDrive className="w-4 h-4 text-[#6046EC]" />
            <h3>Local Processing Only</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            When you select or drag and drop PDF, Word, Excel, or image files, the application uses local browser file APIs to read metadata (such as file names and sizes) and render the preview rows. No upload endpoint is contacted.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <EyeOff className="w-4 h-4 text-[#6046EC]" />
            <h3>No Tracking & No Ads</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            We do not sell personal data, inject marketing trackers, or display third-party advertisements. There are no tracking cookies or user profiling mechanisms in this app.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldCheck className="w-4 h-4 text-[#6046EC]" />
            <h3>Future Backend Integration</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            If a future backend processing service is enabled for high-load server conversions, strict encryption in transit (HTTPS/TLS) and automatic file deletion policies immediately post-merge will apply.
          </p>
        </div>

        {/* Back Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">Effective Date: 2026</span>
          <Link
            to="/"
            className="text-xs font-semibold text-[#6046EC] hover:underline"
          >
            ← Back to PDF Merge
          </Link>
        </div>
      </div>
    </div>
  );
};
