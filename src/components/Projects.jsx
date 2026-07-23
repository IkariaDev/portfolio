import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 'hosting',
    title: 'Hosting.ikaria.dev',
    description: 'Eigene Hosting-Plattform auf Basis von VMs und Docker, betrieben über selbst-gehostetem Server + Cloudflare Tunnel.',
    image: '/assets/hosting.png',
    link: 'https://hosting.ikaria.dev',
    buttonText: 'Check it out',
    alt: 'Hosting ikaria dev platform screenshot'
  },
  {
    id: 'ikaria_games',
    title: 'Ikaria Games',
    description: 'YouTube-Kanal mit Gaming-Content, eigenem Branding und wachsender Community.',
    image: '/assets/ikaria_games.png',
    link: 'https://www.youtube.com/@ikariagames',
    buttonText: 'Check it out',
    alt: 'Ikaria Games YouTube channel'
  },
  {
    id: 'cookary',
    title: 'Cookary',
    description: 'Eine vollständige Rezept-Plattform mit KI-Vorschlägen, Meal-Planning und Einkaufslisten. Gebaut, weil ich beim Kochen von Insta-Rezepte ordnung brauchte und keine App gefunden habe, die wirklich hilft.',
    image: '/assets/cookary.png',
    link: 'https://cookary.ikaria.dev',
    buttonText: 'Check it out',
    alt: 'Cookary recipe application'
  },
  {
    id: 'tmk',
    title: 'TMK Kirchstetten',
    description: 'Ich bin 2025 der TMK Kirchstetten beigetreten, nachdem ich mein Bronzenes Leistungsabzeichnung mit Auszeichnung abgeschlossen habe.',
    image: '/assets/tmk.png',
    link: 'https://tmk.kirchstetten.org/',
    buttonText: 'Check it out',
    imagePosition: 'center 15%',
    alt: 'TMK Kirchstetten photo'
  }
];

export default function Projects() {
  const [activeTouchId, setActiveTouchId] = useState(null);

  const handleTouch = (id) => {
    setActiveTouchId(activeTouchId === id ? null : id);
  };

  return (
    <section className="projects-section">
      <SectionHeader title="PROJECTS" />

      <div className="projects-grid">
        {projects.map((project, idx) => {
          const isActive = activeTouchId === project.id;
          
          return (
            <motion.div
              key={project.id}
              className={`project-card ${isActive ? 'touch-active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleTouch(project.id)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                  style={project.imagePosition ? { objectPosition: project.imagePosition } : {}}
                />
                
                <div className="project-overlay">
                  <div className="overlay-top">
                    <h3 className="overlay-title">{project.title}</h3>
                    <p className="overlay-description">{project.description}</p>
                  </div>

                  <div className="overlay-bottom">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="check-out-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{project.buttonText || 'Check it out'}</span>
                        <ArrowRight size={18} />
                      </a>
                    ) : (
                      <div className="check-out-btn icon-only">
                        <ArrowRight size={18} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .projects-section {
          width: 100%;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .project-card {
          border-radius: 24px;
          overflow: hidden;
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          position: relative;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .project-card:hover,
        .project-card.touch-active {
          border-color: rgba(224, 241, 31, 0.4);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(224, 241, 31, 0.1);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }

        /* Hover & Touch Overlay Effects */
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 2;
        }

        .project-card:hover .project-overlay,
        .project-card.touch-active .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image,
        .project-card.touch-active .project-image {
          transform: scale(1.05);
          filter: blur(2px) brightness(0.7);
        }

        .overlay-top {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .overlay-title {
          font-family: var(--font-body);
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .overlay-description {
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.45;
          font-weight: 400;
          margin: 0;
        }

        .overlay-bottom {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 16px;
        }

        .check-out-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          color: #000000;
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 15px;
          padding: 10px 22px;
          border-radius: 9999px;
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }

        .check-out-btn:hover {
          background-color: var(--accent-color);
          color: #121212;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(224, 241, 31, 0.3);
        }

        .check-out-btn.icon-only {
          padding: 10px 14px;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-overlay {
            padding: 20px;
          }

          .overlay-title {
            font-size: 24px;
          }

          .overlay-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
