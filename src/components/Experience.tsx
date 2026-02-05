import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Salesforce CRM, Administration and Development Trainee',
    type: 'Internship',
    company: 'Isabela State University',
    period: 'Mar 2025 – May 2025',
    icon: Briefcase,
    points: [
      'Used CRM systems for user management, data review, configuration',
      'Handled system issues and basic troubleshooting',
      'Documented processes and followed structured workflows',
      'Worked with reports, dashboards, customer data',
    ],
  },
  {
    title: 'Capstone and Research Project',
    type: 'Group Leader',
    company: 'Isabela State University',
    period: 'Feb 2024 – Dec 2024',
    icon: GraduationCap,
    points: [
      'Led team developing web-based information system',
      'Managed tasks, documentation, progress tracking',
      'Communicated updates and resolved concerns',
      'Delivered accurate, usable system aligned with real office needs',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-width mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-teal dark:text-light-cream text-center mb-12 md:mb-16 transition-colors duration-300">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-mid-green/50 dark:bg-slate-600" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-dark-teal to-deep-plum flex items-center justify-center shadow-lg">
                    <exp.icon size={24} className="text-white md:w-7 md:h-7" />
                  </div>

                  <div className="bg-light-cream/50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent-pink/10 text-accent-pink rounded-full">
                        {exp.type}
                      </span>
                      <span className="text-sm text-mid-green dark:text-mid-green font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-dark-teal dark:text-light-cream mb-1 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-deep-plum dark:text-accent-pink font-medium mb-4 transition-colors duration-300">{exp.company}</p>

                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-dark-teal/70 dark:text-slate-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-pink mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
