import React from 'react'
import Profilepic from '../assets/images/rk.jpg'
import FacebookIcon from '../assets/icons/facebook.svg'
import TwitterXIcon from '../assets/icons/twitter-x.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import DarkModeIcon from "../components/DarkModeIcon";


const About = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-[var(--gray-color)] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text-color)] flex flex-col items-center justify-center gap-3">
              <span className="flex items-center gap-3">About <mark className='bg-transparent text-[var(--primary-color)]' >Me</mark></span>
              <span className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-light)] rounded-full"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-2">
              {/* Personal Info */}
              <div className="bg-[var(--container-color)] border border-[var(--border-color)] rounded-2xl p-8 w-145 h-100">
                <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-6">
                  4th Year IT Student & Full Stack Developer
                </h3>
                <div className="space-y-4 text-[var(--text-gray)] leading-relaxed">
                  <p>
                    I'm a 4th year Information Technology student at Bulacan State University - Bustos Campus,
                    specializing in Web and Mobile App Development. With a comprehensive skill set spanning frontend,
                    backend, mobile, and game development, I'm passionate about creating innovative digital solutions.
                  </p>
                  <p>
                    My journey in technology has equipped me with expertise in modern frameworks like React.js, Next.js,
                    and React Native, along with strong foundations in multiple programming languages and development tools.
                  </p>

                  {/* Social Media Links */}
                  <div className="pt-2 border-t border-[var(--border-color)] mt-2">
                    <h4 className="text-lg font-medium text-[var(--text-color)] mb-2">Connect with me</h4>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className="social-icon-link" aria-label="Facebook">
                        <DarkModeIcon src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className="social-icon-link" aria-label="Twitter/X">
                        <DarkModeIcon src={TwitterXIcon} alt="Twitter/X" className="w-5 h-5" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className="social-icon-link" aria-label="Instagram">
                        <DarkModeIcon src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="social-icon-link" aria-label="LinkedIn">
                        <DarkModeIcon src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col justify-center items-center">
                <div className="relative mb-6">
                  <div className="w-100 h-100 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={Profilepic}
                      alt="Rastyn Khen Ong Acasio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About