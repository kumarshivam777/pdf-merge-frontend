import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Merge } from './pages/Merge';
import { HowItWorks } from './pages/HowItWorks';
import { Features } from './pages/Features';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}

// Page transition container with subtle fade & upward movement (150-250ms)
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="w-full flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Container with side vignette background */}
      <div className="min-h-screen bg-vignette flex flex-col relative selection:bg-purple-100 selection:text-[#6046EC]">
        {/* Subtle background ambient glow accents on sides */}
        <div 
          className="pointer-events-none fixed top-0 left-0 w-80 h-[100vh] bg-gradient-to-r from-purple-200/25 to-transparent blur-3xl -z-10" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none fixed top-0 right-0 w-80 h-[100vh] bg-gradient-to-l from-purple-200/25 to-transparent blur-3xl -z-10" 
          aria-hidden="true" 
        />

        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-start w-full">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
