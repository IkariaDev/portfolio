import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Languages() {
  return (
    <section className="languages-section" id="languages" aria-label="Sprachkenntnisse">
      <SectionHeader title="Sprachkenntnisse" />

      <motion.div
        className="languages-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="languages-left">
          <h3 className="languages-title">Deutsch, Englisch & Spanisch</h3>
          <p className="languages-subtitle">Sprachen für internationale Projekte & Kommunikation</p>
        </div>

        <div className="languages-right">
          <div className="language-badge-row">
            <span className="language-name">Deutsch</span>
            <span className="language-level">C2 (Muttersprache)</span>
          </div>
          <div className="language-badge-row">
            <span className="language-name">Englisch</span>
            <span className="language-level">B2 (Fließend in Wort & Schrift)</span>
          </div>
          <div className="language-badge-row">
            <span className="language-name">Spanisch</span>
            <span className="language-level">A1 (Grundkenntnisse)</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        .languages-section {
          width: 100%;
        }

        .languages-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .languages-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-main);
        }

        .languages-subtitle {
          font-size: 15px;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .languages-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .language-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 14px;
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
        }

        .language-name {
          font-weight: 600;
          color: var(--text-main);
          font-size: 15px;
        }

        .language-level {
          font-size: 14px;
          color: var(--accent-yellow);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .languages-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
