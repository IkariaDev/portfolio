import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <div className="section-divider">
        <motion.div
          className="section-divider-active"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
