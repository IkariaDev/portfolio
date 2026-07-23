import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillsLeft = [
  {
    title: 'Teamwork',
    text: 'Ich kann gut im Team arbeiten, was ich bei zahlreichen Gruppenprojekten gelernt habe. Zwei Freunde und ich haben außerdem für ein UNESCO-Projekt das Stift Melk im Maßstab 1:1 in Minecraft nachgebaut und vor allem in diesem umfangreichen Projekt konnten wir unseren Teamgeist beweisen.'
  },
  {
    title: 'Content Creation',
    text: 'Ich habe über mehrere Jahre hinweg eigenständig meinen YouTube-Kanal „IkariaGames“ mit über 930 Abonnenten und mehr als 158.000 Aufrufen aufgebaut und betreut. Außerdem produziere ich regelmäßig Inhalte und manage zwei TikTok-Kanäle mit insgesamt rund 90.000 Aufrufen. Durch diese Arbeit verfüge ich über Erfahrungen in Videoschnitt (OBS Studio, CapCut, Wondershare Filmora, DaVinci Resolve), Story-Telling, Social Media Analytics, Community-Management sowie Design mit Canva und ähnlichem.'
  },
  {
    title: 'Betriebssysteme & Office',
    text: 'Ich arbeite sicher mit allen gängigen Systemen – darunter Windows, MacOS, Linux, RaspberryOS, Android und iOS. Ebenso beherrsche ich verschiedene Office-Anwendungen, wie Microsoft Word, Excel, PowerPoint, Teams sowie Google Docs, Sheets und Slides. Für Design- und Grafikarbeiten nutze ich regelmäßig Canva und GIMP. Außerdem fällt es mir leicht, mich auf neue Plattformen einzustellen und produktiv mit unterschiedlichen Tools zu arbeiten.'
  }
];

const skillsRight = [
  {
    title: 'Kreativität',
    text: 'Meine Erfahrung als Content Creator auf YouTube und bei der Entwicklung neuer App-Ideen hat meine kreative Problemlösungsfähigkeit gestärkt. Bei Video-Skripten oder dem Design von Apps und Thumbnails kann ich regelmäßig eigene Ideen einbringen und umsetzen.'
  },
  {
    title: 'Selbstständigkeit und Selbstaneignung',
    text: 'Ich plane und organisiere meine Projekte eigenverantwortlich. Seit jeher teile ich mir meine Hausübung und ähnliches selbst ein. Außerdem habe ich mir viele Skills wie das Designen, Einrichten von PCs, das Erstellen von Websites und und Games etc. selbst beigebracht.'
  },
  {
    title: 'Web-/App-/Gamedevelopment',
    text: 'Ich habe bereits erste Erfahrungen in Python und JavaScript gesammelt. Auch wenn ich hier noch am Anfang stehe, bin ich hochmotiviert, mein Wissen zu erweitern. Für meine App-Prototypen benötige ich noch Tutorials und setze Websites bevorzugt mit WebsiteBuildern wie Framer um. Besonders stolz bin ich darauf, ein funktionierendes Spiel in Unreal Engine 5 (Fortnite Creative) entwickelt zu haben. Ich bin offen für Neues und lerne am besten durch praktische Anwendungen („Learning by Doing“).'
  },
  {
    title: 'Hardwareerfahrung',
    text: 'Im Bereich Hardware bringe ich überdurchschnittliche Kenntnisse mit: Bereits im Sommer 2024 habe ich meinen eigenen PC selbstständig geplant, zusammengestellt und gebaut. Zusätzlich beschäftige ich mich intensiv mit aktuellen Entwicklungen rund um Grafikkarten, Prozessoren, Mainboards, Speicherlösungen und Netzteile, sowohl im Desktop- als auch im Mobile- und Serverbereich. Mein technisches Wissen und meine praktische Erfahrung sind überdurchschnittlich ausgeprägt und werden auch von meinen Mitschülern oft nachgefragt. Auch habe ich 2026 einen Homeserver aus einem alten Office-PC gebaut, auf welchen meine Web-Apps und Websites laufen.'
  }
];

const stats = [
  { value: '480K+', label: 'Generierte Views' },
  { value: '10+', label: 'Websites erstellt' },
  { value: '3K+', label: 'Abonnenten' }
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
    <section className="skills-section">
      <SectionHeader title="SKILLS" />

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
          gap: 40px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          margin-top: 64px;
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
            gap: 32px;
          }

          .stats-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
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
