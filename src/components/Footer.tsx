import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24 border-t border-purple-100/60 bg-white/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          {/* Brand Left */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-200/50">
              <svg 
                className="w-4 h-4 text-[#6046EC]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="12" y2="17" />
              </svg>
            </div>
            <span className="font-extrabold text-base tracking-tight">
              <span className="text-[#0F172A]">PDF</span>{' '}
              <span className="text-[#6046EC]">Merge</span>
            </span>
          </div>

          {/* Center Text */}
          <div className="text-center text-slate-500 text-xs sm:text-sm max-w-md">
            Built to keep file merging simple. Free, private, and with no file limits.
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
            <Link 
              to="/privacy" 
              className="text-slate-600 hover:text-[#6046EC] transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-600 hover:text-[#6046EC] transition-colors"
            >
              Contact
            </Link>
            <span className="text-slate-400">© 2026 PDF Merge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
