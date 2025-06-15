import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID = 'SERVICE-ID'
const TEMPLATE_ID = 'TEMPLATE_ID'
const PUBLIC_KEY = 'PUBLIC_KEY'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSending, setIsSending] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) return alert('All fields are required.')

    setIsSending(true)

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Thank you! Your message was sent successfully.')
        setFormData({ name: '', email: '', message: '' })
        setIsSending(false)
      })
      .catch((error) => {
        console.error('Email send error:', error)
        alert('Oops, something went wrong. Please try again later.')
        setIsSending(false)
      })
  }

  return (
    <motion.section
      className="contact py-20 px-6 bg-gray-100"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="decorative-flower contact-flower absolute right-10 top-10 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✰
      </motion.div>

      <div className="contact-container max-w-xl mx-auto text-center">
        <motion.h2 className="contact-title visible text-4xl font-bold mb-4">
          CONTACT ME
        </motion.h2>

        <motion.p className="contact-subtitle visible text-lg text-gray-600 mb-8">
          Get in touch
        </motion.p>

        <motion.form
          className="contact-form visible space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`submit-button ${isSending ? 'loading' : ''}`}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact