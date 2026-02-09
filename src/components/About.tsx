import { Workflow, Users, Brain, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Workflow,
    text: 'End-to-end automation workflows (Zapier / Make / n8n)',
  },
  {
    icon: Users,
    text: 'CRM & pipeline automation (GoHighLevel, Salesforce exposure)',
  },
  {
    icon: Brain,
    text: 'AI prompt engineering & integration',
  },
  {
    icon: Globe,
    text: 'WordPress sites with Elementor',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-width mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-teal dark:text-light-cream text-center mb-12 md:mb-16 transition-colors duration-300">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink via-deep-plum to-dark-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-light-cream dark:ring-slate-700 group-hover:ring-accent-pink/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Shauntalle Orlando"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent-pink/30 rounded-full -z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-dark-teal/20 dark:bg-accent-pink/20 rounded-full -z-10 transition-transform duration-300 group-hover:scale-125" />
            </div>
          </div>

          <div>
            <p className="text-lg text-dark-teal/80 dark:text-slate-300 leading-relaxed mb-8 transition-colors duration-300 text-justify">
              AI Automation Specialist & No-Code Expert helping businesses eliminate manual work and scale efficiently. Certified in Zapier, Make.com, n8n, GoHighLevel, WordPress, and Prompt Engineering. I build reliable end-to-end workflows that connect apps, automate CRM pipelines, capture leads, and integrate AI—saving clients 10-30+ hours/week. Detail-oriented, fast learner, and collaborative—ready to deliver practical, documented solutions for remote teams.
            </p>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Gradient background glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-dark-teal via-accent-pink to-deep-plum rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500" />

                  {/* Main card */}
                  <div className="relative flex items-start gap-5 p-5 rounded-2xl bg-gradient-to-br from-light-cream to-light-cream/80 dark:from-slate-800 dark:to-slate-800/80 border border-dark-teal/10 dark:border-accent-pink/10 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:translate-x-1 overflow-hidden">

                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-dark-teal/5 to-accent-pink/5 dark:from-transparent dark:via-accent-pink/5 dark:to-dark-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-dark-teal to-deep-plum dark:from-accent-pink dark:to-deep-plum flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>

                    {/* Icon container with enhanced effects */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-teal to-accent-pink rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 scale-150" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-dark-teal/15 via-accent-pink/10 to-deep-plum/15 dark:from-accent-pink/15 dark:via-dark-teal/10 dark:to-accent-pink/15 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-dark-teal/20 dark:border-accent-pink/20">
                        <item.icon size={24} className="text-dark-teal dark:text-accent-pink transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Text content with enhanced typography */}
                    <div className="relative flex-1 pt-1">
                      <p className="text-base font-semibold text-dark-teal dark:text-slate-200 leading-relaxed group-hover:text-deep-plum dark:group-hover:text-accent-pink transition-colors duration-300">
                        {item.text}
                      </p>

                      {/* Decorative underline */}
                      <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-dark-teal via-accent-pink to-deep-plum group-hover:w-full transition-all duration-500 rounded-full" />
                    </div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent-pink/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
