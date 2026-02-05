import { Linkedin, AtSign, Phone, Facebook, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-cream via-mid-green/30 to-light-cream dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dark-teal/10 dark:bg-accent-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/10 dark:bg-dark-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width mx-auto px-6 md:px-8 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-teal dark:text-light-cream mb-4 md:mb-6 tracking-tight transition-colors duration-300">
            Hi, I'm Shauntalle
          </h1>

          <p className="animate-fade-in-delay-1 text-xl sm:text-2xl md:text-3xl font-semibold text-deep-plum dark:text-accent-pink mb-6 md:mb-8 transition-colors duration-300">
            AI Automation Specialist & No-Code Expert
          </p>

          <p className="animate-fade-in-delay-2 text-base sm:text-lg md:text-xl text-dark-teal/80 dark:text-slate-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed transition-colors duration-300">
            Helping businesses eliminate manual work and scale efficiently with reliable Zapier, Make.com, n8n, GoHighLevel & AI-powered workflows — saving clients 10–30+ hours per week.
          </p>

          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-5 mb-8 md:mb-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-pink text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-teal text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          <div className="animate-fade-in-delay-4 flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/ellatnuahs.odnalro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-teal dark:text-slate-300 hover:text-accent-pink transition-colors group"
              aria-label="Facebook Profile"
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/shauntalle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-teal dark:text-slate-300 hover:text-accent-pink transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:orlando.autom8@gmail.com"
              className="flex items-center gap-2 text-dark-teal dark:text-slate-300 hover:text-accent-pink transition-colors group"
              aria-label="Email"
            >
              <AtSign size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+639394389353"
              className="flex items-center gap-2 text-dark-teal dark:text-slate-300 hover:text-accent-pink transition-colors group"
              aria-label="Phone"
            >
              <Phone size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="animate-bounce flex justify-center">
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown size={28} className="text-dark-teal/60 dark:text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
