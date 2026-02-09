import { useState, useEffect } from 'react';
import {
  Zap,
  Cog,
  Server,
  Users,
  Globe,
  MessageSquare,
  Database,
  Link,
  Award,
} from 'lucide-react';

const skills = [
  {
    name: 'Zapier',
    description: 'Triggers, formatter, delay, filter, paths, looping, sub-zaps, webhooks, AI by Zapier.',
    icon: Zap,
    gradient: 'from-[#35524A] to-[#5D2A42]',
    certificate: './certificates/zapier_certificate.png',
  },
  {
    name: 'Make.com',
    description: 'Scenarios, triggers, actions, filters, connecting apps, HTTP modules, error handling.',
    icon: Cog,
    gradient: 'from-[#DA627D] to-[#5D2A42]',
    certificate: '/certificates/make.com_certificate.png',
  },
  {
    name: 'n8n',
    description: 'Setup n8n server, AI agents, conditions, branching, looping, merging workflows, connecting to APIs.',
    icon: Server,
    gradient: 'from-[#5D2A42] to-[#35524A]',
    certificate: '/certificates/n8n_certificate.png',
  },
  {
    name: 'GoHighLevel',
    description: 'AI agents, CRM, surveys, forms, pipelines, funnels & website builder, contact management, bookings, courses & products, workflow automtions with API integration',
    icon: Users,
    gradient: 'from-[#35524A] to-[#B3C0A4]',
    certificate: '/certificates/gohighlevel_certificate.png',
  },
  {
    name: 'WordPress + Elementor',
    description: 'Hosting, themes, page building, customization',
    icon: Globe,
    gradient: 'from-[#DA627D] to-[#35524A]',
    certificate: '/certificates/wordpress_certificate.png',
  },
  {
    name: 'Prompt Engineering',
    description: 'Fundamentals, practical prompt techniques, real world scenarios prompt, tools, templates, building prompt workflow.',
    icon: MessageSquare,
    gradient: 'from-[#5D2A42] to-[#DA627D]',
    certificate: '/certificates/prompt_engineering_certificate.png',
  },
  {
    name: 'Salesforce CRM',
    description: 'Admin basics, data management, reports, dashboards.',
    icon: Database,
    gradient: 'from-[#35524A] to-[#DA627D]',
    certificate: '/certificates/accenture_certificate.jpg',
  },
  // {
  //   name: 'API & Webhooks',
  //   description: 'Connect AI models to workflows, integrations, automation architecture, data flow.',
  //   icon: Link,
  //   gradient: 'from-[#B3C0A4] to-[#35524A]',
  //   certificate: null,
  // },
];

const cardPositions = [
  { x: -65, y: -15, z: -200, rotateY: 25, rotateX: 5, scale: 0.85, opacity: 0.3 },
  { x: -40, y: 10, z: -100, rotateY: 18, rotateX: -3, scale: 0.9, opacity: 0.5 },
  { x: 0, y: 0, z: 0, rotateY: 0, rotateX: 0, scale: 1, opacity: 1 },
  { x: 40, y: 5, z: -100, rotateY: -18, rotateX: 3, scale: 0.9, opacity: 0.5 },
  { x: 65, y: -10, z: -200, rotateY: -25, rotateX: -5, scale: 0.85, opacity: 0.3 },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !isHovering) {
        setActiveIndex((prev) => (prev + 1) % skills.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating, isHovering]);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + skills.length) % skills.length;
      visible.push({ ...skills[index], position: cardPositions[i + 2], originalIndex: index });
    }
    return visible;
  };

  const handleCardClick = (originalIndex: number) => {
    if (originalIndex !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(originalIndex);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#F8FAFC] dark:bg-slate-800 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(53,82,74,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(218,98,125,0.1),transparent_70%)]"></div>

      <div className="container-width mx-auto relative z-10 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-teal dark:text-light-cream mb-4 transition-colors duration-300">
            Skills & Certifications
          </h2>
          <p className="text-lg md:text-xl text-dark-teal/70 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
            Certified and proficient in leading automation platforms
          </p>
        </div>

        <div className="floating-cards-container">
          <div className="cards-perspective">
            {visibleCards.map((card, idx) => {
              const pos = card.position;
              const isCenterCard = idx === 2;

              return (
                <div
                  key={`${card.originalIndex}-${idx}`}
                  className={`floating-card ${isCenterCard ? 'center-card' : 'side-card'}`}
                  onClick={() => handleCardClick(card.originalIndex)}
                  onMouseEnter={() => isCenterCard && setIsHovering(true)}
                  onMouseLeave={() => isCenterCard && setIsHovering(false)}
                  style={{
                    transform: `
                      translateX(${pos.x}%)
                      translateY(${pos.y}%)
                      translateZ(${pos.z}px)
                      rotateY(${pos.rotateY}deg)
                      rotateX(${pos.rotateX}deg)
                      scale(${pos.scale})
                    `,
                    opacity: pos.opacity,
                    zIndex: 5 - Math.abs(idx - 2),
                    filter: isCenterCard ? 'none' : 'blur(2px)',
                  }}
                >
                  <div className="flip-card-wrapper">
                    <div className="flip-card-inner">
                      <div className={`flip-card-front card-content bg-gradient-to-br ${card.gradient}`}>
                        <div className="card-overlay"></div>

                        <div className="card-inner">
                          <div className="card-icon-wrapper">
                            <card.icon size={40} className="text-white" strokeWidth={1.5} />
                          </div>

                          <div className="card-text">
                            <div className="card-label">
                              <span>{card.name}</span>
                            </div>
                            {isCenterCard && (
                              <p className="card-description">{card.description}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flip-card-back">
                        <div className="certificate-container">
                          {card.certificate ? (
                            <img
                              src={card.certificate}
                              alt={`${card.name} Certificate`}
                              className="certificate-image"
                            />
                          ) : (
                            <div className="certificate-placeholder">
                              <Award size={48} className="text-dark-teal/30 dark:text-slate-400/30" strokeWidth={1.5} />
                              <span className="placeholder-text">Certificate Coming Soon</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="navigation-dots">
            {skills.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                aria-label={`Go to skill ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .floating-cards-container {
          position: relative;
          height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cards-perspective {
          position: relative;
          width: 100%;
          height: 500px;
          perspective: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-card {
          position: absolute;
          width: 260px;
          height: 340px;
          cursor: pointer;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }

        .flip-card-wrapper {
          width: 100%;
          height: 100%;
          perspective: 1200px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .center-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 24px;
          overflow: hidden;
        }

        .flip-card-front {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          transform: rotateY(0deg);
        }

        .flip-card-back {
          top: 50%;
          left: 50%;
          width: 580px;
          height: 420px;
          transform: translate(-50%, -50%) rotateY(180deg);
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 30px 60px -12px rgba(53, 82, 74, 0.35),
            0 0 0 1px rgba(53, 82, 74, 0.1),
            inset 0 0 60px rgba(53, 82, 74, 0.05);
        }

        .dark .flip-card-back {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          box-shadow:
            0 30px 60px -12px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 0 60px rgba(218, 98, 125, 0.05);
        }

        .certificate-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
          box-shadow:
            0 10px 30px -5px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(218, 98, 125, 0.15);
          transition: all 0.3s ease;
        }

        .center-card:hover .certificate-image {
          box-shadow:
            0 15px 40px -5px rgba(0, 0, 0, 0.25),
            0 0 30px rgba(218, 98, 125, 0.25);
        }

        .certificate-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          height: 100%;
          border: 2px dashed rgba(53, 82, 74, 0.2);
          border-radius: 12px;
          background: rgba(53, 82, 74, 0.02);
        }

        .dark .certificate-placeholder {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.02);
        }

        .placeholder-text {
          font-size: 12px;
          font-weight: 500;
          color: rgba(53, 82, 74, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark .placeholder-text {
          color: rgba(255, 255, 255, 0.3);
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 25px 50px -12px rgba(53, 82, 74, 0.3),
            0 0 0 1px rgba(53, 82, 74, 0.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.5) 100%
          );
        }

        .card-inner {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
        }

        .card-icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .card-label {
          display: inline-flex;
        }

        .card-label span {
          background: #EAEFD3;
          color: #35524A;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .card-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          line-height: 1.5;
          max-width: 220px;
          text-align: justify;
        }

        .center-card {
          z-index: 10 !important;
        }

        .center-card .flip-card-front.card-content {
          box-shadow:
            0 35px 60px -15px rgba(53, 82, 74, 0.4),
            0 0 0 1px rgba(53, 82, 74, 0.15),
            0 0 80px rgba(53, 82, 74, 0.1);
        }

        .center-card:hover .flip-card-back {
          box-shadow:
            0 40px 80px -15px rgba(53, 82, 74, 0.45),
            0 0 0 1px rgba(53, 82, 74, 0.15),
            0 0 100px rgba(218, 98, 125, 0.2);
        }

        .dark .center-card:hover .flip-card-back {
          box-shadow:
            0 40px 80px -15px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.15),
            0 0 100px rgba(218, 98, 125, 0.25);
        }

        .side-card:hover {
          opacity: 0.7 !important;
        }

        .navigation-dots {
          display: flex;
          gap: 10px;
          margin-top: 40px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(53, 82, 74, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(53, 82, 74, 0.4);
        }

        .dot.active {
          background: #DA627D;
          transform: scale(1.2);
        }

        @media (max-width: 1024px) {
          .flip-card-back {
            width: 480px;
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .floating-cards-container {
            height: 500px;
          }

          .cards-perspective {
            height: 400px;
          }

          .floating-card {
            width: 200px;
            height: 280px;
          }

          .flip-card-back {
            width: 90vw;
            max-width: 420px;
            height: 300px;
          }

          .card-icon-wrapper {
            width: 48px;
            height: 48px;
          }

          .card-icon-wrapper svg {
            width: 28px;
            height: 28px;
          }

          .card-label span {
            padding: 8px 16px;
            font-size: 12px;
          }

          .card-description {
            font-size: 11px;
          }

          .certificate-container {
            padding: 16px;
          }

          .placeholder-text {
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .floating-card {
            width: 170px;
            height: 240px;
          }

          .flip-card-back {
            width: 90vw;
            max-width: 360px;
            height: 260px;
          }

          .card-inner {
            padding: 16px;
          }

          .certificate-container {
            padding: 12px;
          }

          .card-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .card-icon-wrapper svg {
            width: 24px;
            height: 24px;
          }

          .card-label span {
            padding: 6px 12px;
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
