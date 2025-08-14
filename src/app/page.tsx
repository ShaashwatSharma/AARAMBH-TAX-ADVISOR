'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import { Loader2 } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // 1) Start at top; end loading
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // 2) Compute header height and set a CSS variable for safe top padding
  useEffect(() => {
    const setHeaderSpace = () => {
      const header = document.querySelector('header');
      const h = header ? header.getBoundingClientRect().height : 72; // fallback
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setHeaderSpace();
    window.addEventListener('resize', setHeaderSpace);
    return () => window.removeEventListener('resize', setHeaderSpace);
  }, [isLoading]);

  if (isLoading) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        {/* Lucide Loader Icon */}
        <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-6" />

        <h2 className="text-2xl font-playfair font-bold text-gray-800">
          Aarambh Tax Advisor
        </h2>
        <p className="text-gray-600 mt-2">
          Loading your professional tax solutions
        </p>
      </div>
    </div>
  );

  }

  return (
    <div className="bg-white">
      {/* If your Header is sticky, this pattern prevents overlap */}
      <Header />

      {/* Main content: top padding equals header height; consistent gaps between sections */}
      <main
        id="page-main"
        className="relative isolate pt-[var(--header-h,72px)] space-y-24 lg:space-y-32"
      >
        {/* Tip: ensure each component's root has `relative z-0` and no negative margins */}
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer outside space-y stack (add margin-top if you want extra separation) */}
      <Footer />
    </div>
  );
}
