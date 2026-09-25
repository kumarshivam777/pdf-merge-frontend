import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-purple-50/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Custom Stylized PDF Merge Icon */}
          <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-200/60 shadow-xs group-hover:scale-105 transition-transform duration-200">
            <svg 
              className="w-5 h-5 text-[#6046EC]" 
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
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-[#0F172A]">PDF</span>{' '}
            <span className="text-[#6046EC]">Merge</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#0F172A] font-semibold'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6046EC] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-[#E9D5FF] text-[#581C87] shadow-xs'
                  : 'bg-[#F2EAFF] hover:bg-[#E9DBFF] text-[#6941C6]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-purple-100 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-md"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-purple-50 text-[#6046EC] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center text-sm font-semibold px-4 py-2.5 rounded-full bg-[#F2EAFF] text-[#6941C6] hover:bg-[#E9DBFF] transition-colors"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
