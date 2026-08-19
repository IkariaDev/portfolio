import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillsLeft = [
  {
    title: 'Teamwork & Kollaboration',
    text: 'Ich arbeite strukturiert und zielorientiert im Team. Dies konnte ich bei zahlreichen schulischen Projekten sowie bei einem UNESCO-Projekt unter Beweis stellen, bei dem wir das Stift Melk im Maßstab 1:1 in Minecraft originalgetreu nachgebaut haben.'
  },
  {
    title: 'Content Creation & Medienproduktion',
    text: 'Langjährige Erfahrung im Aufbau und der Betreuung digitaler Kanäle mit Fokus auf Video-Schnitt (OBS Studio, DaVinci Resolve, CapCut), Storytelling, Thumbnails mit Canva/GIMP und datengestützte Reichweitenanalyse.'
  },
  {
    title: 'Betriebssysteme, Cloud & Office',
    text: 'Sicherer Umgang mit Linux (Debian/Ubuntu Server), Windows, MacOS, RaspberryOS sowie mobilen Plattformen. Routiniert im Einsatz von Microsoft 365, Google Workspace und modernen Collaboration-Tools.'
  }
];

const skillsRight = [
  {
    title: 'Kreativität & UI/UX-Gespür',
    text: 'Ausgeprägte Begeisterung für saubere Benutzeroberflächen, ansprechende Layouts und moderne Web-Ästhetik. Ich verbinde technische Funktionalität mit verständlichem, ansprechendem Design.'
  },
  {
    title: 'Eigenverantwortung & Selbstaneignung',
    text: 'Hohe Motivation, neue Technologien und Frameworks selbstständig durch praktische Anwendungen („Learning by Doing“) zu erlernen – von der Webentwicklung bis hin zur Serveradministration.'
  },
  {
    title: 'Web-, App- & Serverentwicklung',
    text: 'Erfahrungen in modernen Web-Technologien (HTML5, CSS3, JavaScript, React/Vite), Integration von APIs und KI-Diensten, Docker-Containerisierung sowie Game-Development-Grundlagen mit Unreal Engine.'
  },
  {
    title: 'Hardware & Homeserver-Infrastruktur',
    text: 'Umfassendes Fachwissen bei Planung, Zusammenbau und Wartung von PC-Hardware. Aufbau und kontinuierlicher Betrieb eines eigenen Linux-Homeservers für Web-Apps, Container und Testumgebungen.'
  }
];

const stats = [
  { value: '480K+', label: 'Generierte Video-Views' },
  { value: '10+', label: 'Erstellte Webprojekte' },
  { value: '3K+', label: 'Community-Reichweite' }
];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState(0);

  const targetNumber = parseInt(value, 10);
  const formatSuffix = value.replace(targetNumber.toString(), '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNumber, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {isInView ? displayValue : 0}{formatSuffix}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-label="Kompetenzen und Fähigkeiten">
      <SectionHeader title="Kompetenzen" />

      <div className="skills-grid">
        <div className="skills-column">
          {skillsLeft.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="skills-column">
          {skillsRight.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats counter strip with smooth animated numbers */}
      <motion.div
        className="stats-strip"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <div className="stat-divider" />}
            <div className="stat-item">
              <span className="stat-value">
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      <style>{`
        .skills-section {
          width: 100%;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .skills-column {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-description {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .stats-strip {
          margin-top: 56px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: transparent;
          padding: 24px 0;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          flex: 1;
          padding-left: 32px;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 48px);
          font-weight: 900;
          color: var(--accent-color);
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: var(--accent-yellow);
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 48px;
          background-color: var(--line-color);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .stats-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .stat-divider {
            display: none;
          }

          .stat-item {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
