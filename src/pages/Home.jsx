import React from 'react'
import TechStackSlideshow from '../components/TechStackSlideshow'
import { Code, SendHorizonal } from 'lucide-react'

const HeroSection = () => {
    const scrollToSection = (sectionId) => {
        const selector = `#${sectionId.replace('/', '')}`;
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with selector "${selector}" not found`);
        }
    }

    return (
        <section id="home" className="py-40 bg-[var(--black-color)] min-h-screen">
            <div className="flex justify-center items-center p-5">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-6xl font-bold text-[var(--white-color)] text-center">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent text-center">
                            Rastyn Khen
                        </span>
                    </h1>
                    <p className="max-w-3xl text-base text-[var(--text-gray)] text-justify md:text-center">
                        Full-Stack Developer and 4th Year IT Student at Bulacan State Univerity - Bustos Campus.
                        Passionate about creating modern web and mobile applications with React.js,
                        Next.js, Tailwind CSS and PostgreSQL. Currently specializing in Web and Mobile App Development.
                    </p>

                    <div className="flex flex-row justify-center items-center gap-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-sm px-4 py-2 md:px-8 md:py-4 md:text-base bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-1 shadow-lg cursor-pointer"
                        >
                            {/* <Code size={18} /> */}
                            Explore Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm px-4 py-2 md:px-8 md:py-4 md:text-base bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--white-color)] rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-1 cursor-pointer"
                        >
                            {/* <SendHorizonal size={18} /> */}
                            Let's Connect
                        </button>
                    </div>
                </div>
            </div>
            <TechStackSlideshow />
        </section>
    )
}

export default HeroSection