import React from 'react';
import { 
  FileText, 
  FileSpreadsheet, 
  Image as ImageIcon, 
  MoveVertical, 
  Trash2, 
  PlusCircle, 
  Smartphone, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: <FileText className="w-5 h-5 text-red-500" />,
      title: 'Full PDF Support',
      desc: 'Upload multi-page PDFs. Every page is merged consecutively into the final output without degrading text quality or vector graphics.',
      badge: 'PDF',
      badgeColor: 'bg-red-50 text-red-600',
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: 'Word Documents (.doc, .docx)',
      desc: 'Combine Word resumes, essays, reports, and memos directly alongside your PDF files.',
      badge: 'Word',
      badgeColor: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
      title: 'Excel Spreadsheets (.xls, .xlsx)',
      desc: 'Easily include data sheets, invoices, and accounting tables within your unified PDF documentation.',
      badge: 'Excel',
      badgeColor: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-amber-500" />,
      title: 'Image Conversion (JPG, JPEG, PNG)',
      desc: 'Attach scanned ID cards, photos, signatures, and receipts. Images are converted cleanly into individual PDF pages.',
      badge: 'Images',
      badgeColor: 'bg-amber-50 text-amber-600',
    },
    {
      icon: <MoveVertical className="w-5 h-5 text-[#6046EC]" />,
      title: 'Intuitive Drag and Drop Reordering',
      desc: 'Adjust document sequence with smooth drag handles. Immediate visual feedback ensures the final document order is correct.',
      badge: 'Reorder',
      badgeColor: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Trash2 className="w-5 h-5 text-rose-500" />,
      title: 'One-Click File Removal',
      desc: 'Remove accidental uploads with a smooth fade animation. Remaining rows reposition seamlessly.',
      badge: 'Control',
      badgeColor: 'bg-rose-50 text-rose-600',
    },
    {
      icon: <PlusCircle className="w-5 h-5 text-[#6046EC]" />,
      title: 'Add More Files Anytime',
      desc: 'Forgot a page? Tap "Add more files" at any time to append extra documents before finalizing the merge.',
      badge: 'Flexible',
      badgeColor: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-slate-700" />,
      title: 'Mobile-Friendly Responsive UI',
      desc: 'Thoughtfully optimized for touch screens on iOS and Android. No awkward horizontal scrolling or cramped buttons.',
      badge: 'Mobile Ready',
      badgeColor: 'bg-slate-100 text-slate-700',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      title: 'Clean, Ad-Free Interface',
      desc: 'No confusing popups, deceptive download banners, or annoying sign-up prompts. Just simple, fast file merging.',
      badge: 'Zero Ads',
      badgeColor: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Powerful, Simple Features
        </h1>
        <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-3"></div>
        <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Built to make combining different file types painless, fast, and secure.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-purple-100/70 shadow-[0_2px_12px_rgba(79,70,229,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {f.icon}
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${f.badgeColor}`}>
                  {f.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA bottom */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-purple-100/80 shadow-[0_8px_30px_rgba(79,70,229,0.04)] text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6046EC] flex items-center justify-center mx-auto mb-3">
          <Layers className="w-6 h-6 stroke-[2.2]" />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">Ready to combine your files?</h3>
        <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
          Start organizing your documents right now. No setup required.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#6046EC] hover:bg-[#523BD8] active:scale-97 transition-all shadow-md shadow-purple-500/20"
        >
          Merge Files Now
        </Link>
      </div>
    </div>
  );
};
