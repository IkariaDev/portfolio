import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 'hosting',
    category: 'Hosting & Infrastruktur',
    title: 'Hosting.ikaria.dev',
    description: 'Eigene Hosting-Plattform auf Basis von Linux-VMs und Docker-Containern, betrieben auf einem selbst aufgebauten Homeserver. Die Dienste sind über Cloudflare-Tunnel weltweit sicher erreichbar und dienen als verlässliche Basis für eigene Webprojekte.',
    tags: ['Linux', 'Docker', 'Cloudflare Tunnel', 'Homeserver'],
    image: '/assets/hosting.png',
    link: 'https://hosting.ikaria.dev',
    buttonText: 'Hosting ansehen',
    alt: 'Hosting.ikaria.dev – Dashboard und Serverinfrastruktur der Hosting-Plattform von Ilias Kapusta'
  },
  {
    id: 'ikaria_games',
    category: 'Content Creation & Video',
    title: 'Ikaria Games',
    description: 'Eigenständig aufgebauter YouTube-Kanal mit über 930 Abonnenten und mehr als 158.000 Gesamtaufrufen. Das Projekt umfasst Konzeption, Videoschnitt mit DaVinci Resolve und OBS Studio, Thumbnail-Gestaltung sowie Social-Media-Analysen.',
    tags: ['YouTube', 'DaVinci Resolve', 'OBS Studio', 'Canva'],
    image: '/assets/ikaria_games.png',
    link: 'https://www.youtube.com/@ikariagames',
    buttonText: 'Kanal ansehen',
    alt: 'Ikaria Games – YouTube-Kanal und Medienprojekte von Ilias Kapusta'
  },
  {
    id: 'cookary',
    category: 'Web App & KI',
    title: 'Cookary',
    description: 'Umfassende Rezept- und Kochplattform mit KI-gestützten Rezeptvorschlägen, intelligenter Wochenplanung und automatischen Einkaufslisten. Entwickelt, um Rezepte aus sozialen Medien strukturiert zu organisieren und den Kochalltag spürbar zu erleichtern.',
    tags: ['React', 'KI-Integration', 'Web App', 'UI/UX Design'],
    image: '/assets/cookary.png',
    link: 'https://cookary.ikaria.dev',
    buttonText: 'Web-App ansehen',
    alt: 'Cookary – KI-unterstützte Rezept- und Meal-Planning-Plattform von Ilias Kapusta'
  },
  {
    id: 'tmk',
    category: 'Musik & Regionales Engagement',
    title: 'TMK Kirchstetten',
    description: 'Aktives musikalisches Engagement bei der Trachtenmusikkapelle Kirchstetten in Niederösterreich nach bestandenem bronzenen Leistungsabzeichen mit Auszeichnung. Verbindet regionale Verbundenheit mit Teamgeist bei musikalischen Auftritten und Konzerten.',
    tags: ['Blasmusik', 'Niederösterreich', 'Verein', 'Leistungsabzeichen'],
    image: '/assets/tmk.png',
    link: 'https://tmk.kirchstetten.org/',
    buttonText: 'Website ansehen',
    imagePosition: 'center 15%',
    alt: 'TMK Kirchstetten – Trachtenmusikkapelle Kirchstetten in Niederösterreich mit Ilias Kapusta'
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-label="Portfolio und Projekte">
      <SectionHeader title="Portfolio & Projekte" />

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
                loading="lazy"
                style={project.imagePosition ? { objectPosition: project.imagePosition } : {}}
              />
              <div className="project-category-badge">{project.category}</div>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags" aria-label="Eingesetzte Technologien und Schwerpunkte">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  aria-label={`${project.title} öffnen (externer Link)`}
                >
                  <span>{project.buttonText}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        .projects-section {
          width: 100%;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .project-card {
          border-radius: 20px;
          overflow: hidden;
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .project-card:hover {
          border-color: rgba(224, 241, 31, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(224, 241, 31, 0.08);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background-color: #0c0c0c;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.04);
        }

        .project-category-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--accent-yellow);
          font-family: var(--font-ui);
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.02em;
        }

        .project-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 14px;
          text-align: left;
        }

        .project-title {
          font-family: var(--font-body);
          font-size: clamp(22px, 2vw, 26px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .project-description {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .project-tag {
          font-size: 12px;
          font-family: var(--font-ui);
          color: #d0d0d0;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .project-footer {
          margin-top: 8px;
          display: flex;
          align-items: center;
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #1f1f1f;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 14px;
          padding: 9px 18px;
          border-radius: 9999px;
          transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .project-btn:hover {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          color: #121212;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .project-body {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
