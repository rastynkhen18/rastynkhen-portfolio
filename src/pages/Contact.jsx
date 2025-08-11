import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 bg-[var(--background-color)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-color)] flex items-center justify-center gap-3">
            <span className="text-[var(--primary-color)]">✉</span>
            Let's Connect
          </h2>
          <p className="text-xl mb-12 text-[var(--text-gray)] max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="rastynkhenacasio18@gmail.com"
              className="px-8 py-4 bg-[var(--primary-color)] text-[var(--white-color)] rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
            >
              <span>✉</span>
              Send Email
            </a>
            <a
              href="https://github.com/rastyn"
              className="px-8 py-4 bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <span>⎇</span>
              View GitHub
            </a>
            <a
              href="https://linkedin.com/in/rastyn"
              className="px-8 py-4 bg-[var(--container-color)] border border-[var(--border-color)] text-[var(--white-color)] rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <span>◉</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact