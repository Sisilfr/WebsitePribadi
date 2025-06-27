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
        {/* Waving Emoji */}
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

        {/* Content Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            I’m a Data Science student at Cakrawala University, transitioning from a background in customer service and administration. With several years of experience in client handling and operational support, I’ve developed strong communication, problem-solving, and adaptability skills.
            <br /><br />
            Driven by curiosity and a passion for data, I’m now building my foundation in programming, statistics, and web development — learning tools like Python, SQL, and data visualization. I’m especially interested in how data can be processed, interpreted, and used to generate meaningful insights across various fields.
            <br /><br />
            Though I’m still in the early stages, I’m committed to continuous learning and excited to grow as a future data professional. Let’s keep progressing and keep growing 🌱
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
