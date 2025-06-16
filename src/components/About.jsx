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
            I am a Data Scientist student from Cakrawala University. Currently, I am learning about web development, data, and programming. I am actively learning to deeply understand data and web programming. Let's keep progressing and keep growing 🌱
          </p>

          <div className="about-grid">
            <div className="about-journey">
              <h3>My Journey</h3>
              <p>
                With a strong foundation in mathematics and statistics, I’ve dedicated my learningg and education to exploring the fascinating world of data science. My journey began with a curiosity about patterns in data and has evolved into a comprehensive skill set spanning machine learning, statistical analysis, and data visualization.
              </p>
              <p>
                I specialize in developing predictive models, creating interactive dashboards, and conducting thorough statistical analyses that drive business decisions. My approach combines technical expertise with creative problem-solving to deliver meaningful results.
              </p>
              <p>
                Besides analyzing data, you can find me exploring new machine learning frameworks, contributing to open-source projects, or sharing knowledge through technical writing and presentations.
              </p>
            </div>

            <div className="about-skills">
              <h3>Education & Skills</h3>
              <div className="skills-section">
                <p className="skills-title">Programming Languages</p>
                <div className="skills-tags">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>JavaScript</span>
                  <span>C++</span>
                </div>

                <p className="skills-title">Tools & Frameworks</p>
                <div className="skills-tags">
                  <span>Vite</span>
                  <span>Numpy</span>
                  <span>Pandas</span>
                  <span>Tableau</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
