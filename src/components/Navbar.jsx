import React, { useState, useEffect } from 'react';
import { Send, Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Left: Brand Monogram & Name */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tighter flex items-baseline leading-none">
            <span>A</span>
            <span className="text-amber-400 text-4xl sm:text-5xl leading-none inline-block">.</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Anubha
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-bold">
              CODE • BUILD • LEARN • GROW
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation with Yellow Active Indicator */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0F172A] hover:bg-slate-800 text-white shadow-md transition-all group"
          >
            <Send className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? 'text-amber-500 font-bold border-l-2 border-amber-400 pl-2'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              download
              className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 text-center font-bold text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white text-center font-bold text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
