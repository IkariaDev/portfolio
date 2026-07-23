import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="about-section">
      <SectionHeader title="ABOUT" />
      
      <motion.div 
        className="about-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-left">
          <h3 className="interests-title">Interessen</h3>
          <p className="interests-text">
            Web/App-Development, IT, Technik, Fotografie und Design, Content Creation, Wirtschaft, Gamedevelopment, Bouldern und die Blasmusik
          </p>
        </div>

        <div className="about-right">
          <p className="bio-text">
            Ich wurde in Wien geboren und zog mit meinen Eltern, Michaela Kapusta (Lektorin, Bibliothekarin) und Rene Kapusta (Programmierer, App-Developer), nach Kirchstetten (Niederösterreich). Ich besuchte vier Jahre lang die Volksschule Kirchstetten (2017–2021) und nachdem ich jedes Jahr mit ausgezeichnetem Erfolg abgeschlossen hatte, wechselte ich nach St. Pölten in das BRG Josefstraße (2022-2024) mit Schwerpunkt auf MINT, wo ich dieses Jahr die Unterstufe mit einem weiteren ausgezeichneten Erfolg abgeschlossen habe. Besonders möchte ich meine volle Punktzahl in der Mathematik-IKM-Testung hervorheben.
          </p>
        </div>
      </motion.div>

      <style>{`
        .about-section {
          width: 100%;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }

        .interests-title {
          font-family: var(--font-body);
          font-size: 22px;
          font-weight: 600;
          color: var(--accent-yellow);
          margin-bottom: 12px;
        }

        .interests-text {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .bio-text {
          font-size: 17px;
          color: var(--text-main);
          line-height: 1.7;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .interests-title {
            font-size: 20px;
          }
          .bio-text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
