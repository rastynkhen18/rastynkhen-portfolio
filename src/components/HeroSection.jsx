import React from 'react'
import TechStackSlideshow from '../components/TechStackSlideshow'

const HeroSection = () => {
    return (
        <section id="home" className="py-35 bg-[var(--black-color)]">
            <div className="flex justify-center items-center">
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                            Hi, I'm{' '}
                            <span className="text-[var(--primary-color)] text-center">
                                Rastyn Khen
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 text-center">
                            Full-Stack Developer & 4th Year IT Student at Bulacan State Univerity - Bustos Campus
                        </p>
                        <p className="flex justify-center items-center text-lg text-gray-400 max-w-4xl leading-relaxed text-center">
                            Passionate about creating modern web and mobile applications with React.js,
                            Next.js, and Tailwind CSS. Currently specializing in Web and Mobile App Development.
                        </p>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-[var(--primary-color)] text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                            <span className="text-sm">▶</span>
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span className="text-sm">✉</span>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
            <TechStackSlideshow />
        </section>

    )
}

export default HeroSection



