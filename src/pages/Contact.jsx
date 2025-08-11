import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center gap-3">
            <span className="text-cyan-400">✉</span>
            Let's Connect
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:rastyn@example.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
            >
              <span>✉</span>
              Send Email
            </a>
            <a
              href="https://github.com/rastyn"
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <span>⎇</span>
              View GitHub
            </a>
            <a
              href="https://linkedin.com/in/rastyn"
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center justify-center gap-2"
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