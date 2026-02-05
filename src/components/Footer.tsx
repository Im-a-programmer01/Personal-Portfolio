import { Linkedin, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-teal py-12 px-6">
      <div className="container-width mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mid-green to-accent-pink flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-white">Shauntalle Orlando</span>
          </div>

          <p className="text-light-cream/80 text-center text-lg font-light italic">
            Let's Automate the Future — Together
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/ellatnuahs.odnalro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-pink hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shauntalle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-pink hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:orlando.autom8@gmail.com"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-pink hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; 2026 Shauntalle Orlando. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
