import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills & Certifications', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-teal shadow-lg' : 'bg-dark-teal/95'
      }`}
    >
      <nav className="container-width mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-light-cream font-bold text-lg md:text-xl tracking-tight hover:text-white transition-colors"
          >
            Shauntalle Orlando
          </a>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-light-cream/90 hover:text-white px-3 lg:px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/shauntalleorlando_resume_site.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-nav-btn group relative inline-flex items-center gap-2 px-4 py-2 ml-2 overflow-hidden rounded-lg transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-pink/80 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <FileText className="relative w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="relative text-white font-medium text-sm">Resume</span>
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-cream p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-light-cream/90 hover:text-white hover:bg-white/10 px-4 py-3 text-sm font-medium transition-colors rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/shauntalleorlando_resume_site.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-white bg-gradient-to-r from-accent-pink to-accent-pink/80 hover:from-accent-pink/90 hover:to-accent-pink/70 px-4 py-3 text-sm font-medium transition-all rounded-md mt-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
