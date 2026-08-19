import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@ikaria.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Betreff: formData.subject || 'Kontaktanfrage Portfolio',
          Nachricht: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Kontakt und Standort">
      <SectionHeader title="Kontakt & Standort" />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-intro">
          <h3 className="get-in-touch-title">Kontakt aufnehmen</h3>
          <p className="contact-subtitle">
            Haben Sie ein Projekt, eine Kooperationsanfrage oder Fragen zu meinen Arbeiten? Schreiben Sie mir direkt eine Nachricht – ich melde mich so rasch wie möglich zurück.
          </p>

          <div className="contact-info-list">
            <div className="info-item">
              <div className="info-label">
                <Mail size={16} className="info-icon" aria-hidden="true" />
                <span>E-Mail</span>
              </div>
              <a href="mailto:contact@ikaria.dev" className="info-value email-link">
                contact@ikaria.dev
              </a>
            </div>

            <div className="info-item">
              <div className="info-label">
                <MapPin size={16} className="info-icon" aria-hidden="true" />
                <span>Standort</span>
              </div>
              <p className="info-value">Niederösterreich, Österreich</p>
            </div>
          </div>

          <div className="downloads-wrapper">
            <a
              href="https://framerusercontent.com/assets/EA5B9kTywLoxfecNKbniphA5uqM.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <Download size={16} className="btn-icon" aria-hidden="true" />
              <span>Zeugnis ansehen</span>
            </a>

            <a
              href="https://framerusercontent.com/assets/lWFZUzeTRbe6tHce56eFm3g6xU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <Download size={16} className="btn-icon" aria-hidden="true" />
              <span>Lebenslauf (PDF)</span>
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card">
          {status === 'success' ? (
            <div className="success-state">
              <CheckCircle2 size={48} className="success-icon" />
              <h4>Vielen Dank!</h4>
              <p>Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich in Kürze bei Ihnen!</p>
              <button
                type="button"
                className="reset-btn"
                onClick={() => setStatus('idle')}
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre.adresse@beispiel.at"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Thema oder Projektidee"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an mich..."
                  required
                />
              </div>

              {status === 'error' && (
                <p className="error-message">
                  Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an contact@ikaria.dev.
                </p>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span>Wird gesendet...</span>
                ) : (
                  <>
                    <span>Nachricht senden</span>
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>

      <style>{`
        .contact-section {
          width: 100%;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 48px;
          align-items: start;
        }

        .contact-intro {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .get-in-touch-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.1;
        }

        .contact-subtitle {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 8px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-icon {
          color: var(--accent-color);
        }

        .info-value {
          font-size: 17px;
          color: var(--text-main);
          margin: 0;
          font-weight: 500;
        }

        .email-link {
          transition: color 0.25s ease;
        }

        .email-link:hover {
          color: var(--accent-color);
        }

        .downloads-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #1a1a1a;
          border: 1px solid var(--card-border);
          color: #ffffff;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 500;
          padding: 10px 18px;
          border-radius: 30px;
          transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.2s ease;
        }

        .download-btn:hover {
          background-color: #222222;
          border-color: var(--accent-color);
          transform: translateY(-2px);
          color: var(--accent-color);
        }

        .btn-icon {
          color: var(--accent-color);
        }

        /* Contact Card & Form */
        .contact-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row.two-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background-color: #101010;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 12px 16px;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 12px rgba(224, 241, 31, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .error-message {
          font-size: 14px;
          color: #ff5555;
          margin: 0;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background-color: var(--accent-color);
          color: #121212;
          font-family: var(--font-ui);
          font-weight: 700;
          font-size: 15px;
          padding: 14px 24px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }

        .submit-btn:hover:not(:disabled) {
          background-color: #efff38;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(224, 241, 31, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success state */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 12px;
          gap: 16px;
        }

        .success-icon {
          color: var(--accent-color);
        }

        .success-state h4 {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .success-state p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .reset-btn {
          margin-top: 12px;
          background: transparent;
          border: 1px solid var(--card-border);
          color: var(--text-main);
          font-size: 14px;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .reset-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        @media (max-width: 809px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .form-row.two-cols {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
