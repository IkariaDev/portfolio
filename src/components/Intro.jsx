import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="hero-content">
        <motion.div
          className="hero-name-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="hero-title hero-first-name">Ilias</h1>

          <motion.div
            className="avatar-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/avatar.png" alt="Ilias Kapusta" className="avatar-img" />
          </motion.div>

          <h1 className="hero-title hero-last-name">Kapusta</h1>
        </motion.div>

        {/* 4-point Star Icon */}
        <motion.div
          className="star-container"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#e0f11f"/>
          </svg>
        </motion.div>

        {/* Intro Subtitle */}
        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Ich bin Ilias Kapusta — ich bin 14 Jahre alt und komme<br className="desktop-br" /> aus Niederösterreich.
        </motion.p>

        {/* Scroll Prompt */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="scroll-line-wrapper">
            <motion.div
              className="scroll-line"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
          <span className="scroll-text">SCROLL</span>
        </motion.div>
      </div>

      <style>{`
        .intro-section {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 30px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .hero-name-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 0.82;
          width: 100%;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(64px, 17vw, 240px);
          font-weight: 900;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0;
          user-select: none;
        }

        .avatar-wrapper {
          width: clamp(110px, 15vw, 190px);
          height: clamp(110px, 15vw, 190px);
          margin: -24px 0;
          z-index: 2;
          border: none;
          background: transparent;
          mix-blend-mode: lighten;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0) 88%);
          -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0) 88%);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .star-container {
          margin: 32px 0 24px 0;
        }

        .intro-subtitle {
          font-size: clamp(15px, 2vw, 20px);
          color: var(--text-main);
          max-width: 600px;
          line-height: 1.5;
          font-weight: 400;
          padding: 0 16px;
        }

        .scroll-indicator {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .scroll-line-wrapper {
          width: 2px;
          height: 32px;
          background: rgba(240, 240, 240, 0.15);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .scroll-line {
          width: 100%;
          height: 14px;
          background: var(--accent-color);
          border-radius: 2px;
        }

        .scroll-text {
          font-size: 11px;
          font-family: var(--font-ui);
          letter-spacing: 0.2em;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .intro-section {
            min-height: 70vh;
            padding-top: 20px;
          }
          .desktop-br {
            display: none;
          }
          .avatar-wrapper {
            margin: -14px 0;
          }
        }
      `}</style>
    </section>
  );
}
