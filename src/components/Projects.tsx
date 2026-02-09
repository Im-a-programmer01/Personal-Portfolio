import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Search } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  screenshots: string[];
  loomLinks: string[];
}

const projects: Project[] = [
  {
    title: 'Zero Duplicate Lead Acquisition Pipeline',
    description: 'Capture leads effortlessly from ASANA with built-in smart matching & merging—no more messy data, duplicates, or lost opportunities.',
    image: 'https://drive.google.com/thumbnail?id=1sX6PqajBHhXKPdyNilVG9H7TIQz3FRbn&sz=w800',
    tags: ['Asana', 'Filter', 'GoogleSheets', 'Paths', 'Gmail'],
    category: ['Zapier'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1sX6PqajBHhXKPdyNilVG9H7TIQz3FRbn&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Priority-Based Lead Enrichment Workflow',
    description: 'Instantly transform basic leads into high-priority opportunities with enriched, actionable intel—focus your team on the hottest prospects and close deals faster.',
    image:  'https://drive.google.com/thumbnail?id=1asCueEZxkSiWNqf7upuLuAiCIvHX49GG&sz=w800',
    tags: ['Webhook', 'Formatter', 'Paths', 'Googlesheets', 'Slack', 'AI by Zapier', 'Gmail'],
    category: ['Zapier'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1asCueEZxkSiWNqf7upuLuAiCIvHX49GG&sz=w800',
      'https://drive.google.com/thumbnail?id=1G_XSnRXNHfzO-dKv7D8bQtUFaaq2waku&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Multi-Path Lead Nurture & Close Workflow',
    description: 'Intelligent status-based automation for sales/projects → Branches on Ready/No Response/Quoted/Approved/Paid to handle folder creation, timed email follow-ups, AI analysis for insights, personalized welcome messages, and final recommendations—streamline your entire client journey in one powerful Zap.',
    image: 'https://drive.google.com/thumbnail?id=1XPhO1Kp26zgNaMxqFUkB9eaJ7QZNegbx&sz=w800',
    tags: ['Asana', 'Paths', 'Google Drive', 'Gmail', 'Delay', 'Filter', 'AI by Zapier'],
    category: ['Zapier'],
    screenshots: [
       'https://drive.google.com/thumbnail?id=1XPhO1Kp26zgNaMxqFUkB9eaJ7QZNegbx&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Intelligent Multi-Channel Content Engine',
    description: 'Automate content repurposing at scale: New video → filtered MP4 → AI transcription → two custom AI-generated posts (FB + LI optimized) → looped paths → direct publishing. Keep your social channels active and professional with minimal input.',
    image: 'https://drive.google.com/thumbnail?id=1xkhMQwBDyexVdcL4L6djKL3puyXKmh7w&sz=w800',
    tags: ['Google Drive', 'Filter', 'AI by Zapier', 'Looping', 'Paths', 'Facebook', 'LinkedIn'],
    category: ['Zapier'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1xkhMQwBDyexVdcL4L6djKL3puyXKmh7w&sz=w800',
      'https://drive.google.com/thumbnail?id=1G_XSnRXNHfzO-dKv7D8bQtUFaaq2waku&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Smart Retail Price Analyzer with AI Insights',
    description: 'From scrape to strategy → Monitors product pages for changes, cleans & stores data intelligently, runs AI analysis to detect discounts/patterns across 10+ items, delivers polished email reports. Empower data-driven decisions for e-commerce, resellers, or procurement teams—hands-free price intelligence at scale.',
    image: 'https://drive.google.com/thumbnail?id=1xRwHVIG4qVb0tiUAMP3v1E60S5iSXBMl&sz=w800',
    tags: ['Browse AI', 'Looping', 'Webhooks', 'Filter', 'Sub-Zap', 'Digest', 'AI by Zapier', 'Gmail'],
    category: ['Zapier'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1xRwHVIG4qVb0tiUAMP3v1E60S5iSXBMl&sz=w800',
      'https://drive.google.com/thumbnail?id=1i8kmBydNG2s968sOZFmWZMHAL0DQRNVA&sz=w800'
    ],
    loomLinks: [
    ],
  },
  {
    title: 'Asana Completion to Xero Invoice',
    description: 'When a task completes in Asana, auto-create invoices in Xero via API, attach PDFs back to Asana tasks, log full details (task, invoice, amounts) in Google Sheets, and handle multi-item processing with routing & aggregation. Close projects faster, bill instantly, and keep perfect financial records—zero manual entry.',
    image: 'https://drive.google.com/thumbnail?id=1_PhIc_QOqda-OsLUBc79m1xwIWiE46-3&sz=w800',
    tags: ['Asana', 'Xero', 'Iterator', 'Sleep', 'Text Aggregator', 'Google Sheets' ],
    category: ['Make.com'],
    screenshots: [
       'https://drive.google.com/thumbnail?id=1_PhIc_QOqda-OsLUBc79m1xwIWiE46-3&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Multi-Channel Lead/Web Form Automation Hub',
    description: 'Instantly capture webhook data → log full details in Google Sheets → route notifications to Slack team channels → auto-create engaging posts on Facebook Pages → optionally call APIs via HTTP/JSON. Turn inquiries into action + social visibility with zero manual work—great for lead gen, support, or marketing teams.',
    image:     'https://drive.google.com/thumbnail?id=1GijI3tIJKYaHTHCXBZTbhncT3ZRUqgha&sz=w800',
    tags: ['Webhooks', 'Google Sheets', 'Slack', 'Facebook Pages', 'HTTP Request', 'Parse JSON'],
    category: ['Make.com'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1GijI3tIJKYaHTHCXBZTbhncT3ZRUqgha&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Automated Gmail Attachment Processing System',
    description: 'Automatically monitors incoming Gmail emails for attachments and processes them without manual effort. When a new email arrives, the attachment is extracted, analyzed, and renamed using AI for better organization. The file is then securely uploaded to Google Drive, relevant details are logged into Google Sheets, and a confirmation email is sent back to the user. This automation saves time, reduces errors, and ensures all email attachments are properly stored, tracked, and acknowledged in one seamless flow.',
    image:     'https://drive.google.com/thumbnail?id=1pcJC6w11Nm_WFD6wCim1pZM_17QIvd_1&sz=w800',
    tags: ['Webhooks', 'Google Sheets', 'Slack', 'Facebook Pages', 'HTTP Request', 'Parse JSON'],
    category: ['Make.com'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1pcJC6w11Nm_WFD6wCim1pZM_17QIvd_1&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'AI-Powered Daily Weather Quote Automation',
    description: 'This project features an automated system that creates and publishes daily weather-based content using real-time data and AI. The workflow runs on a scheduled trigger, retrieves current weather information from the OpenWeatherMap API, and generates relevant quotes through an AI agent. To maintain content quality and avoid duplication, the system verifies and stores quotes and background assets in Google Sheets. The content is then assembled using a dynamic HTML template, converted into an image, and automatically published to Facebook via the Graph API. This project highlights automation design, API integration, AI content generation, and end-to-end social media publishing.',
    image:     'https://drive.google.com/thumbnail?id=11RPVycrN11BGJKrmS8-G-t8PZROSkw9z&sz=w800',
    tags: ['AI Agent', 'OpenRouter', 'Google Sheets', 'OpenWeatherMap', 'HTTP Request', 'HTML', 'HTML/CSS to Image', 'Facebook Graph API'],
    category: ['n8n'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=11RPVycrN11BGJKrmS8-G-t8PZROSkw9z&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'Smart Knowledge Base Chatbot for Facebook Pages',
    description: 'An automated chatbot that instantly answers Facebook page messages using a custom knowledge base. When a user sends a question, the system securely receives the message, filters valid requests, pulls the correct information from stored documents, and uses AI to generate a clear and helpful reply. The response is then sent back automatically through an API, ensuring fast, accurate, and consistent customer support without manual effort.',
    image:     'https://drive.google.com/thumbnail?id=1AvQqkMWK6suq4BWe_fp6z-TrAgZ9r5bL&sz=w800',
    tags: ['Webhook', 'Filter', 'If', 'Respond to Webhook', 'Google Docs', 'AI Agent', 'OpenRouter', 'HTTP Request'],
    category: ['n8n'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1AvQqkMWK6suq4BWe_fp6z-TrAgZ9r5bL&sz=w800'
    ],
    loomLinks: [],
  },
  {
    title: 'AI Appointment Setter & Smart Booking Automation',
    description: 'AI-powered appointment system that automatically checks calendar availability, shows open time slots, and books appointments in real time. The workflow handles booking, rescheduling, and cancellations, updates Google Calendar instantly, and logs all data securely in Airtable. It also manages time zone conversion, validation, and friendly error handling to ensure a smooth booking experience without human intervention.',
    image:     'https://drive.google.com/thumbnail?id=1MN01rtihdfZiivF8Tc0BfFSUwABsD5MP&sz=w800',
    tags: ['Webhook', 'Edit Fields', 'Google Calendar', 'If', 'Respond to Webhook', 'Sort', 'Aggregate', 'Code', 'Filter', 'Airtable', 'vapi.ai'],
    category: ['n8n'],
    screenshots: [
      'https://drive.google.com/thumbnail?id=1MN01rtihdfZiivF8Tc0BfFSUwABsD5MP&sz=w800',
      'https://drive.google.com/thumbnail?id=1xLEJfhgGqNWV4aTv6koYZNOA8TKmwRdm&sz=w800'
    ],
    loomLinks: [],
  },
];

const categories = ['All', 'Zapier', 'Make.com', 'n8n', 'WordPress', 'GoHighLevel'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category.includes(activeCategory);
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container-width mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-light-cream mb-4 transition-colors duration-300">
            Projects & Workflows
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
            Sample automation projects showcasing end-to-end workflow solutions
          </p>
        </div>

        <div className="mb-8 px-4">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-light-cream dark:placeholder-slate-400 focus:border-green-500 dark:focus:border-accent-pink focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-green-600 dark:bg-accent-pink text-white shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 border-2 border-green-200 dark:border-slate-600 hover:border-green-400 dark:hover:border-accent-pink/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl dark:shadow-slate-900/50 transition-all duration-300 transform hover:scale-105 animate-fadeIn relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 dark:from-accent-pink/0 dark:via-accent-pink/20 dark:to-accent-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 shine-effect"></div>

              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-light-cream mb-3 leading-tight group-hover:text-green-700 dark:group-hover:text-accent-pink transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-green-50 dark:bg-slate-600 text-green-700 dark:text-mid-green rounded-full border border-green-200 dark:border-slate-500 group-hover:bg-green-100 dark:group-hover:bg-slate-500 group-hover:border-green-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-2 text-sm group/btn relative overflow-visible px-4 py-2 rounded-lg"
                  >
                    <span className="ink-text-effect relative">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-slate-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        <div className="mt-16 text-center px-4">
          <div className="inline-block bg-white dark:bg-slate-700 rounded-2xl shadow-lg dark:shadow-slate-900/50 p-8 max-w-2xl transition-colors duration-300">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-light-cream mb-6 transition-colors duration-300">
              Want a custom workflow like this?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 dark:from-accent-pink dark:to-deep-plum text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 dark:hover:from-accent-pink/90 dark:hover:to-deep-plum/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Me
              <Heart size={20} />
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 md:p-6 flex justify-between items-start z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-light-cream mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300">{selectedProject.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
              >
                <X size={24} className="text-gray-600 dark:text-slate-300" />
              </button>
            </div>

            <div className="relative bg-gray-900">
              <img
                src={selectedProject.screenshots[currentSlide]}
                alt={`Screenshot ${currentSlide + 1}`}
                className="w-full h-auto max-h-[60vh] object-contain"
              />

              {selectedProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
                  >
                    <ChevronLeft size={24} className="text-gray-900" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
                  >
                    <ChevronRight size={24} className="text-gray-900" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-8 bg-white dark:bg-slate-800">
              {selectedProject.loomLinks.length > 0 && (
                <div className="mb-6 space-y-4">
                  {selectedProject.loomLinks.map((link, idx) => (
                    <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600">
                      <iframe
                        src={link}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 text-sm font-medium bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentSlide
                        ? 'border-green-500 dark:border-accent-pink ring-2 ring-green-200 dark:ring-accent-pink/30'
                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shineSlide {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          );
        }

        .group:hover .shine-effect {
          animation: shineSlide 1.2s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ink-text-effect {
          font-weight: 400;
          color: #ec4899;
          background: linear-gradient(
            to right,
            #be185d 0%,
            #be185d 50%,
            #ec4899 50%,
            #ec4899 100%
          );
          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-position 1s ease-out,
                      font-weight 0.6s ease-out,
                      filter 1s ease-out;
          filter: drop-shadow(0 0 0px rgba(236, 72, 153, 0));
        }

        .group\/btn:hover .ink-text-effect {
          background-position: 0% 0;
          font-weight: 700;
          filter: drop-shadow(0 0 1px rgba(190, 24, 93, 0.3));
        }
      `}</style>
    </section>
  );
}
