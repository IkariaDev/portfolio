import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Languages() {
  return (
    <section className="languages-section">
      <SectionHeader title="LANGUAGES" />

      <motion.div
        className="languages-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="languages-left">
          <h3 className="languages-title">Deutsch, Englisch & Spanisch</h3>
        </div>

        <div className="languages-right">
          <p className="language-level">Deutsch C2</p>
          <p className="language-level">Englisch B2</p>
          <p className="language-level">Spanisch A1</p>
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

        .languages-right {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .language-level {
          font-size: 16px;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .languages-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
