import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-pic">
            <span className="wave-emoji">👋</span>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-description">
            I am a Data Scientist student from Cakrawala University. Currently, I am learning about
            web development, data, and programming. I am actively learning to deeply understand
            data and web programming. Let's keep progressing and keep growing 🌱
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
