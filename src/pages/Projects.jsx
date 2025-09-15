import React from 'react'
import DarkModeIcon from '../components/DarkModeIcon'
import FadeInOnView from '../components/FadeInOnView'

// Import all icons
import HtmlIcon from '../assets/icons/html.svg'
import CssIcon from '../assets/icons/css.svg'
import JavaScriptIcon from '../assets/icons/javascript.svg'
import TypeScriptIcon from '../assets/icons/typescript.svg'
import ReactIcon from '../assets/icons/react.svg'
import NextjsIcon from '../assets/icons/nextjs.svg'
import TailwindIcon from '../assets/icons/tailwindcss.svg'
import BootstrapIcon from '../assets/icons/bootstrap.svg'

import PhpIcon from '../assets/icons/php.svg'
import LaravelIcon from '../assets/icons/laravel.svg'
import NodejsIcon from '../assets/icons/nodejs.svg'
import ExpressIcon from '../assets/icons/expressjs.svg'
import CppIcon from '../assets/icons/cpp.svg'
import JavaIcon from '../assets/icons/java.svg'
import CsharpIcon from '../assets/icons/csharp.svg'
import PythonIcon from '../assets/icons/python.svg'

import MysqlIcon from '../assets/icons/mysql.svg'
import SupabaseIcon from '../assets/icons/supabase.svg'
import MongodbIcon from '../assets/icons/mongodb.svg'
import FirebaseIcon from '../assets/icons/firebase.svg'

import ReactNativeIcon from '../assets/icons/react.svg'
import AndroidIcon from '../assets/icons/androidstudio.png'
import FlutterIcon from '../assets/icons/flutter.svg'

import FigmaIcon from '../assets/icons/figma.svg'
import PhotoshopIcon from '../assets/icons/adobe-photoshop.svg'
import IllustratorIcon from '../assets/icons/adobe-illustrator.svg'

import UnityIcon from '../assets/icons/unity.svg'

import GitIcon from '../assets/icons/git.svg'
import GithubIcon from '../assets/icons/github.svg'
import VercelIcon from '../assets/icons/vercel.svg'

//Import Projects
import DigoTraders from '../assets/projects/digo-traders.png'
import ButFirstCoffee from '../assets/projects/butfirstcoffee.png'
import AndroidStudioCalculator from '../assets/projects/android-studioCalculator.jpg'
import AndroidStudioCruds from '../assets/projects/android-studioCruds.jpg'
import UnityFlappyAngryBlackBird from '../assets/projects/unity-flappyAngryBlackBird.jpg'
import UnityEndlessRunner from '../assets/projects/untiy-EndlessRunnerAot.jpg'


const projects = [
  {
    title: 'Digo Traders',
    description: 'A modern landing page for one of my clients. Built with React.js and Tailwind CSS.',
    technologies: ['React.js', 'Tailwind CSS', 'Git', 'Github', 'Vercel'],
    image: DigoTraders,
    liveUrl: 'https://digo-traders.vercel.app/',
    githubUrl: 'https://github.com/rastynkhen18/digo-traders',
  },
  {
    title: 'But First Coffee',
    description: 'A coffee shop website developed as my project for web development subject. Built using HTML, CSS, JS, PHP, and MySQL. Includes menu, contact form, and admin dashboard.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git', 'Github', 'Vercel'],
    image: ButFirstCoffee,
    liveUrl: 'https://butfirstcoffee.vercel.app/',
    githubUrl: 'https://github.com/rastynkhen18/butfirstcoffee',
  },
  {
    title: 'Android Studio Calculator',
    description: 'A simple calculator app built in Android Studio using Java. Supports basic arithmetic operations.',
    technologies: ['Android Studio', 'Java'],
    image: AndroidStudioCalculator,
    liveUrl: '#',
    githubUrl: 'https://github.com/rastynkhen18/android-calculator',
  },
  {
    title: 'Android Studio CRUDs',
    description: 'CRUD application for Android using Java. Allows users to create, read, update, and delete records.',
    technologies: ['Android Studio', 'Java'],
    image: AndroidStudioCruds,
    liveUrl: '#',
    githubUrl: 'https://github.com/rastynkhen18/android-cruds',
  },
  {
    title: 'Unity Flappy Angry Black Bird',
    description: 'A Flappy Bird clone made in Unity. Features custom graphics and challenging gameplay.',
    technologies: ['Unity', 'C#'],
    image: UnityFlappyAngryBlackBird,
    liveUrl: '#',
    githubUrl: 'https://github.com/rastynkhen18/unity-flappy-angry-black-bird',
  },
  {
    title: 'Unity Endless Runner Attack on Titan',
    description: 'An endless runner game built in Unity. Includes multiple obstacles and scoring system.',
    technologies: ['Unity', 'C#'],
    image: UnityEndlessRunner,
    liveUrl: '#',
    githubUrl: 'https://github.com/rastynkhen18/unity-endless-runner',
  },
];

// Map technology names to icons
const techIcons = {
  'HTML': HtmlIcon,
  'CSS': CssIcon,
  'JavaScript': JavaScriptIcon,
  'TypeScript': TypeScriptIcon,
  'React.js': ReactIcon,
  'React Native': ReactNativeIcon,
  'Next.js': NextjsIcon,
  'Tailwind CSS': TailwindIcon,
  'Bootstrap': BootstrapIcon,
  'PHP': PhpIcon,
  'Laravel': LaravelIcon,
  'Node.js': NodejsIcon,
  'Express.js': ExpressIcon,
  'C++': CppIcon,
  'Java': JavaIcon,
  'C#': CsharpIcon,
  'Python': PythonIcon,
  'MySQL': MysqlIcon,
  'Supabase': SupabaseIcon,
  'MongoDB': MongodbIcon,
  'Firebase': FirebaseIcon,
  'Android Studio': AndroidIcon,
  'Flutter': FlutterIcon,
  'Figma': FigmaIcon,
  'Adobe Photoshop': PhotoshopIcon,
  'Adobe Illustrator': IllustratorIcon,
  'Unity': UnityIcon,
  'Git': GitIcon,
  'Github': GithubIcon,
  'Vercel': VercelIcon,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[var(--background-color)]">
      <div className="container mx-auto px-4">
        <FadeInOnView>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text-color)] flex flex-col items-center justify-center gap-3">
              <span className="flex items-center gap-3">Featured <mark className='bg-transparent text-[var(--primary-color)]'>Projects</mark></span>
              <span className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-light)]"></span>
            </h2>
          </div>
        </FadeInOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <FadeInOnView>
              <div key={index} className="bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-lg hover:shadow-[var(--primary-color)]/20 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">

                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--white-color)] mb-2">{project.title}</h3>
                  <p className="text-[var(--text-gray)] mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium"
                      >
                        {techIcons[tech] && (
                          tech === 'Github' || tech === 'Vercel' || tech === 'Unity' ?
                            <DarkModeIcon src={techIcons[tech]} alt={tech} className="w-4 h-4" /> :
                            <img src={techIcons[tech]} alt={tech} className="w-4 h-4 border-none" />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white rounded-xl transition-all duration-200 text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>▶</span>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--white-color)] rounded-xl transition-all duration-200 text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                    >
                      <DarkModeIcon src={GithubIcon} alt="GitHub" className="w-5 h-5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </FadeInOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects