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
            <p className="text-lg text-dark-teal/80 dark:text-slate-300 leading-relaxed mb-8 transition-colors duration-300">
              AI Automation Specialist & No-Code Expert helping businesses eliminate manual work and scale efficiently. Certified in Zapier, Make.com, n8n, GoHighLevel, WordPress, and Prompt Engineering. I build reliable end-to-end workflows that connect apps, automate CRM pipelines, capture leads, and integrate AI—saving clients 10-30+ hours/week. Detail-oriented, fast learner, and collaborative—ready to deliver practical, documented solutions for remote teams.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-light-cream/50 dark:bg-slate-800/50 hover:bg-light-cream dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-dark-teal/10 dark:bg-accent-pink/10 flex items-center justify-center">
                    <item.icon size={20} className="text-dark-teal dark:text-accent-pink" />
                  </div>
                  <p className="text-dark-teal/80 dark:text-slate-300 font-medium pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
