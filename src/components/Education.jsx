import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const eduLeft = [
  {
    school: 'Volksschule',
    subtitle: 'VS Kirchstetten (Niederösterreich)',
    years: '2017 – 2021'
  },
  {
    school: 'BG/BRG St. Pölten (Josefstraße)',
    subtitle: 'NAWI-Zweig Oberstufe',
    years: '2025 – Jetzt'
  }
];

const eduRight = [
  {
    school: 'BG/BRG St. Pölten (Josefstraße)',
    subtitle: 'NAWI-Zweig Unterstufe mit MINT-Schwerpunkt',
    years: '2021 – 2025'
  }
];

export default function Education() {
  return (
    <section className="education-section" id="education" aria-label="Schulischer Bildungsweg">
      <SectionHeader title="Ausbildung" />

      <div className="education-grid">
        <div className="education-column">
          {eduLeft.map((item, idx) => (
            <motion.div
              key={idx}
              className="education-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="school-title">{item.school}</h3>
              <p className="school-subtitle">{item.subtitle}</p>
              <p className="school-years">{item.years}</p>
            </motion.div>
          ))}
        </div>

        <div className="education-column">
          {eduRight.map((item, idx) => (
            <motion.div
              key={idx}
              className="education-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="school-title">{item.school}</h3>
              <p className="school-subtitle">{item.subtitle}</p>
              <p className="school-years">{item.years}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          width: 100%;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .education-column {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .education-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .school-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-main);
        }

        .school-subtitle {
          font-size: 16px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .school-years {
          font-size: 16px;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
