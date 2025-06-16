import React from 'react'
import { motion } from 'framer-motion'
import './Work.css'

const projects = [
  {
    id: 1,
    image: '/Project1.jpg',
    title: 'Workoutaja Landing Page',
    description: 'Clean and responsive landing page for a digital workout service.'
  },
  {
    id: 2,
    image: '/Project2.jpg',
    title: 'Developer Portfolio',
    description: 'Modern personal portfolio for a Java Developer with a professional look.'
  },
  {
    id: 3,
    image: '/Project3.jpg',
    title: 'Pokedex UI Clone',
    description: 'Frontend app inspired by Pokedex with grid view and dark mode.'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Next Project?',
    description: 'Coming soon – Exciting new project'
  }
]

const Work = () => {
  return (
    <section className="work" id="work">
      <motion.h2
        className="work-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        MY WORK
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              ease: 'backOut'
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
              boxShadow: '0 20px 50px rgba(163, 131, 255, 0.6)',
              transition: { duration: 0.4, ease: 'easeInOut' }
            }}
          >
            <div className={`project-image ${project.image ? '' : 'fallback'}`}>
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <span>{project.icon}</span>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Work
