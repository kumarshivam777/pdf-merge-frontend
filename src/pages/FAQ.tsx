import React from 'react';
import { FAQItem } from '../components/FAQItem';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqList = [
    {
      q: "Will my Word document formatting be changed?",
      a: "Standard formatting like headings, bold, italics, paragraphs, and standard fonts are preserved. Highly intricate multi-column layouts or specialized proprietary macros might require review before publishing.",
      defaultOpen: true,
    },
    {
      q: "Can I merge Excel files?",
      a: "Yes. Worksheets (.xls and .xlsx) are converted page by page so your tabular rows and columns fit neatly onto standard portrait or landscape PDF sheets.",
    },
    {
      q: "What file types can I select?",
      a: "The tool accepts PDF (.pdf), Word documents (.doc, .docx), Excel spreadsheets (.xls, .xlsx), and standard image formats (.jpg, .jpeg, .png).",
    },
    {
      q: "Are my files uploaded anywhere?",
      a: "No. In this version, all file actions occur in your web browser. Nothing is uploaded to external storage or remote servers.",
    },
    {
      q: "Can I change the file order?",
      a: "Yes. Simply click or tap the drag handle on the left of any file row and move it to where you want it in the sequence.",
    },
    {
      q: "How many files can I select?",
      a: "There are no arbitrary limits on file quantities. You can select 2 or 50 documents according to your workflow needs.",
    },
    {
      q: "Can I use the tool on mobile?",
      a: "Yes. The interface is optimized for iOS and Android web browsers, giving you full access to file selection, reordering, and merging on mobile devices.",
    },
    {
      q: "Is there any watermark on the output PDF?",
      a: "No. The output PDF remains 100% clean, professional, and free of any watermarks or third-party branding.",
    },
    {
      q: "Do I have to register or create an account?",
      a: "No account or registration is required. You can merge your files right away without providing an email address.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Frequently asked questions
        </h1>
        <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-3"></div>
        <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Common questions about file formats, browser security, and how to get the best results.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqList.map((item, index) => (
          <FAQItem
            key={index}
            question={item.q}
            answer={item.a}
            defaultOpen={item.defaultOpen}
          />
        ))}
      </div>

      {/* Need more help */}
      <div className="mt-14 text-center bg-white rounded-2xl p-6 border border-purple-100/80 shadow-xs">
        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6046EC] flex items-center justify-center mx-auto mb-2">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-[#0F172A] text-base mb-1">Still have questions?</h3>
        <p className="text-xs text-slate-500 mb-4">
          Can't find the answer you're looking for? Reach out to our team.
        </p>
        <Link
          to="/contact"
          className="inline-block text-xs font-semibold px-4 py-2 rounded-full bg-[#F2EAFF] hover:bg-[#E9DBFF] text-[#6941C6] transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};
