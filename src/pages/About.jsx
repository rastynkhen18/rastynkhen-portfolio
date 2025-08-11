import React from 'react'
import Profilepic from '../assets/images/rk.jpg'

const About = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-[var(--gray-color)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text-color)] flex items-center justify-center gap-3">
              About <mark className='bg-transparent text-[var(--primary-color)]'>Me</mark>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="bg-[var(--container-color)] border border-[var(--border-color)] rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  4th Year IT Student & Full Stack Developer
                </h3>
                <div className="space-y-4 text-[var(--text-gray)] leading-relaxed">
                  <p>
                    I'm a dedicated 4th year Information Technology student at Bulacan State University - Bustos Campus,
                    specializing in Web and Mobile App Development. With a comprehensive skill set spanning frontend,
                    backend, mobile, and game development, I'm passionate about creating innovative digital solutions.
                  </p>
                  <p>
                    My journey in technology has equipped me with expertise in modern frameworks like React.js, Next.js,
                    and React Native, along with strong foundations in multiple programming languages and development tools.
                  </p>
                </div>
              </div>

              {/* Education Info */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
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