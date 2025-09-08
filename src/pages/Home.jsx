import React from 'react'
import TechStackSlideshow from '../components/TechStackSlideshow'
import GithubIcon from "../assets/icons/github.svg"
import DarkModeIcon from "../components/DarkModeIcon";
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
        <section id="home" className="py-20 bg-[var(--black-color)] mt-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center p-5">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-6xl font-bold text-[var(--white-color)] text-center">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent text-center">
                                Rastyn Khen
                            </span>
                        </h1>
                        <p className="max-w-3xl text-[var(--text-gray)] text-justify text-xs md:text-center md:text-base">
                            Full-Stack Developer and 4th Year IT Student at Bulacan State Univerity - Bustos Campus.
                            Passionate about creating modern web and mobile applications with Next.js,
                            React.js, React Native, Tailwind CSS and PostgreSQL. Currently specializing in Web and Mobile App Development.
                        </p>

                        <div className="flex flex-row justify-center items-center gap-3">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-sm md:text-base px-4 py-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-1 shadow-lg cursor-pointer"
                            >
                                {/* <Code size={18} /> */}
                                Get Started
                            </button>
                            {/* <button
                                onClick={() => scrollToSection('contact')}
                                className="text-xs md:text-base px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--white-color)] rounded-lg transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                            >
                                <SendHorizonal size={18} />
                                Let's Connect
                            </button> */}
                            <button><a
                                href="https://github.com/rastynkhen18"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-base px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--white-color)] rounded-lg transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                            >
                                <DarkModeIcon src={GithubIcon} alt="GitHub" className="w-4 h-4" />
                                GitHub
                            </a></button>
                        </div>
                    </div>
                </div>
                <TechStackSlideshow />
            </div>
        </section>
    )
}

export default HeroSection
