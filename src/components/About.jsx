import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="Über Ilias Kapusta">
      <SectionHeader title="Über Ilias Kapusta" />
      
      <motion.div 
        className="about-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-left">
          <h3 className="interests-title">Schwerpunkte & Interessen</h3>
          <p className="interests-text">
            Web- und App-Development, Linux- & Server-Hosting, Cloudflare-Infrastruktur, Fotografie & UI-Design, Content Creation, MINT-Bereich, Bouldern und Blasmusik.
          </p>
        </div>

        <div className="about-right">
          <p className="bio-text">
            Ich lebe in Niederösterreich und beschäftige mich seit vielen Jahren intensiv mit moderner Softwareentwicklung, IT-Infrastruktur und digitaler Mediengestaltung. Nach der Volksschule Kirchstetten besuchte ich das BG/BRG St. Pölten (Josefstraße) mit MINT-Schwerpunkt, wo ich die Unterstufe mit ausgezeichnetem Erfolg und voller Punktzahl bei der Mathematik-IKM-Testung abgeschlossen habe und nun den NAWI-Zweig der Oberstufe besuche. Neben der praktischen Umsetzung eigener Web- und Serverprojekte bin ich aktiver Content Creator und engagiere mich im regionalen Vereinsleben.
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
