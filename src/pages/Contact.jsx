import React, { useState } from 'react'
import FadeInOnView from '../components/FadeInOnView'
import DarkModeIcon from '../components/DarkModeIcon'

// Import social icons
import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import FacebookIcon from '../assets/icons/facebook.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import TwitterXIcon from '../assets/icons/twitter-x.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-[var(--background-color)] min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--primary-color)]/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--primary-color)]/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInOnView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)] flex flex-col items-center justify-center gap-3">
              <span className="flex items-center gap-3">Let's <mark className='bg-transparent text-[var(--primary-color)]'>Connect</mark></span>
              <span className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-light)] rounded-full"></span>
            </h2>
          </div>
        </FadeInOnView>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <FadeInOnView delay={0.1}>
            <div className="bg-[var(--container-color)] p-8 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">Send Me a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] text-[var(--text-color)]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] text-[var(--text-color)]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-color)] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] text-[var(--text-color)]"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)] mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] text-[var(--text-color)] resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 
                      ${isSubmitting ? 'bg-[var(--primary-color)]/70 cursor-not-allowed' : 'bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 shadow-lg'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>✉</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeInOnView>

          {/* Contact Information */}
          <FadeInOnView delay={0.2}>
            <div className="bg-[var(--container-color)] p-8 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
              <div>
                <p className="text-xl text-[var(--text-gray)] max-w-2xl mx-auto mb-10">
                  I'm always interested in new opportunities and collaborations.
                  Feel free to reach out if you'd like to work together!
                </p>
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-[var(--text-color)]">Email</h4>
                      <a href="mailto:rastynkhenacasio18@gmail.com" className="text-[var(--text-gray)] hover:text-[var(--primary-color)] transition-colors">
                        rastynkhenacasio18@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-[var(--text-color)]">Location</h4>
                      <p className="text-[var(--text-gray)]">Santa.Maria Bulacan, Philippines</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-[var(--text-color)]">Phone</h4>
                      <a href="tel:+639770944181" className="text-[var(--text-gray)] hover:text-[var(--primary-color)] transition-colors">+63 977 094 4181</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links integrated into contact info */}
              <div className="mt-8">
                <h4 className="text-2xl font-bold text-[var(--text-color)] mb-4">Social Media</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/rastynkhen18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <DarkModeIcon src={GithubIcon} alt="GitHub" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rastyn-khen-acasio-1a6a45375/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <DarkModeIcon src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/rastynkhen.acasio.18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <DarkModeIcon src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/khennnn_18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <DarkModeIcon src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/rastynkhen_18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <DarkModeIcon src={TwitterXIcon} alt="Twitter/X" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeInOnView>
        </div>
      </div>
    </section>
  )
}

export default Contact