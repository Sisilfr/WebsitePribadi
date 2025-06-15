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
    title: 'Project Four',
    description: 'Coming soon – Exciting new project'
  }
]

const Work = () => {
  return (
    <section className="work" id="work">
      <motion.h2
        className="work-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        MY WORK
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              backgroundColor: 'rgba(255,255,255,0.95)',
              transition: { duration: 0.3, ease: 'easeInOut' }
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
