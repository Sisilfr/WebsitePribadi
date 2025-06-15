import React from 'react'

const Hero = () => {
  const scrollToWork = (e) => {
    e.preventDefault()
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="decorative-flower flower-1">❀</div>
      <div className="decorative-flower flower-2">❀</div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>Suci Fransisca Sisilia</h1>
          <h2>Data Science<br />Enthusiast</h2>
          <p>Passionate about creating innovative digital experiences</p>
          <a href="#work" className="cta-button" onClick={scrollToWork}>
            View my work
          </a>
        </div>
      </div>
    </section>
  )
}


export default Hero