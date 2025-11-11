import React from 'react'
import Profilepic from '../assets/images/rk.jpg'
import DarkModeIcon from "../components/DarkModeIcon";
import FadeInOnView from '../components/FadeInOnView'
import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import FacebookIcon from '../assets/icons/facebook.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import TwitterXIcon from '../assets/icons/twitter-x.svg'



const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <FadeInOnView>

        </FadeInOnView>

        <FadeInOnView>
          <div className="flex justify-center items-center flex-wrap gap-6 max-w-5xl mx-auto">
            {/* Personal Info */}
            <div className="p-4 w-auto h-auto sm:w-145 sm:h-100">
              <div className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--text-color)] flex flex-col items-start justify-start gap-3">
                <span className="flex items-center gap-3">About <mark className='bg-transparent text-[var(--primary-color)]' >Me</mark></span>
                <span className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-light)]"></span>
              </div>
              <div className="space-y-4 text-[var(--text-gray)] text-xs md:text-sm">
                {/* <p>
                  I'm a 4th year Information Technology student at Bulacan State University - Bustos Campus,
                  specializing in Web and Mobile App Development. With a comprehensive skill set spanning frontend,
                  backend, mobile, and game development, I'm passionate about creating innovative digital solutions.
                </p>
                <p>
                  My journey in technology has equipped me with expertise in modern frameworks like Next.js, React.js
                  and React Native, along with strong foundations in multiple programming languages and development tools.
                </p> */}
                <p>Full-Stack Web Developer, Shopify Web Developer and 4th Year Information Technology student at Bulacan State University – Bustos Campus, specializing in Web and Mobile Application Development. Skilled in creating modern, scalable, and user-centered digital solutions with hands-on experience in Next.js, React.js, React Native, Tailwind CSS, PostgreSQL, and Shopify. Passionate about transforming ideas into functional applications, with a strong foundation in both frontend and backend development. Known for problem-solving, adaptability, and collaborative teamwork in building responsive web platforms, mobile apps, and interactive game-based systems.</p>

                {/* Social Media Links */}
                <div className="pt-2 border-t border-[var(--border-color)] mt-2">
                  <h4 className="text-lg font-medium text-[var(--text-color)] mb-2">Connect with me</h4>
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
            </div>

            {/* Profile Picture */}
            <div>
              <div className="w-full h-auto sm:w-100 sm:h-100 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={Profilepic}
                  alt="Rastyn Khen Ong Acasio"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </FadeInOnView>
      </div>
    </section>
  )
}

export default About