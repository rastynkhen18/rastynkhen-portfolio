import React from 'react'
import DarkModeIcon from '../components/DarkModeIcon'

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
import ExpressIcon from '../assets/icons/expressjs.svg'
import CppIcon from '../assets/icons/cpp.svg'
import JavaIcon from '../assets/icons/java.svg'
import CsharpIcon from '../assets/icons/csharp.svg'
import PythonIcon from '../assets/icons/python.svg'

import MysqlIcon from '../assets/icons/mysql.svg'
import PostgresqlIcon from '../assets/icons/postgresql.svg'
import SupabaseIcon from '../assets/icons/supabase.svg'
import MongodbIcon from '../assets/icons/mongodb.svg'
import FirebaseIcon from '../assets/icons/firebase.svg'

import ReactNativeIcon from '../assets/icons/react.svg'
import AndroidIcon from '../assets/icons/android.svg'
import FlutterIcon from '../assets/icons/flutter.svg'

import FigmaIcon from '../assets/icons/figma.svg'
import PhotoshopIcon from '../assets/icons/adobe-photoshop.svg'
import IllustratorIcon from '../assets/icons/adobe-illustrator.svg'

import UnityIcon from '../assets/icons/unity.svg'

import GitIcon from '../assets/icons/git.svg'
import GithubIcon from '../assets/icons/github.svg'
import VercelIcon from '../assets/icons/vercel.svg'
import LaravelIcon from '../assets/icons/laravel.svg'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'React.js', icon: ReactIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Bootstrap', icon: BootstrapIcon }
  ]

  const backendSkills = [
    { name: 'PHP', icon: PhpIcon },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'C++', icon: CppIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'C#', icon: CsharpIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Laravel', icon: LaravelIcon }
  ]

  const databaseSkills = [
    { name: 'MySQL', icon: MysqlIcon },
    { name: 'PostgreSQL', icon: PostgresqlIcon },
    { name: 'Supabase', icon: SupabaseIcon },
    { name: 'MongoDB', icon: MongodbIcon },
    { name: 'Firebase', icon: FirebaseIcon }
  ]

  const mobileSkills = [
    { name: 'React Native', icon: ReactNativeIcon },
    { name: 'Android', icon: AndroidIcon },
    { name: 'Flutter', icon: FlutterIcon }
  ]

  const designSkills = [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe Photoshop', icon: PhotoshopIcon },
    { name: 'Adobe Illustrator', icon: IllustratorIcon }
  ]

  const gameDevSkills = [
    { name: 'Unity', icon: UnityIcon },
    { name: 'C#', icon: CsharpIcon }
  ]

  const toolsSkills = [
    { name: 'Git', icon: GitIcon },
    { name: 'GitHub', icon: GithubIcon },
    { name: 'Vercel', icon: VercelIcon }
  ]

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: frontendSkills,
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      gradient: 'from-cyan-500 to-blue-500',
      icon: ReactIcon
    },
    {
      title: 'Backend Development',
      skills: backendSkills,
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      gradient: 'from-green-500 to-emerald-500',
      icon: PhpIcon
    },
    {
      title: 'Database',
      skills: databaseSkills,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      gradient: 'from-purple-500 to-indigo-500',
      icon: PostgresqlIcon
    },
    {
      title: 'Mobile Development',
      skills: mobileSkills,
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      gradient: 'from-orange-500 to-amber-500',
      icon: AndroidIcon
    },
    {
      title: 'Game Development',
      skills: gameDevSkills,
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      gradient: 'from-red-500 to-rose-500',
      icon: UnityIcon
    },
    {
      title: 'Design & Media',
      skills: designSkills,
      color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      gradient: 'from-pink-500 to-rose-500',
      icon: FigmaIcon
    },
    {
      title: 'Tools & Deployment',
      skills: toolsSkills,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      gradient: 'from-blue-500 to-sky-500',
      icon: GitIcon
    }
  ]


  return (
    <div>
      <section id="skills" className="py-20 bg-[var(--gray-color)] min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--text-color)] flex flex-col items-center justify-center gap-3">
            <span className="flex items-center gap-3">Technical <mark className='bg-transparent text-[var(--primary-color)]'>Skills</mark></span>
            <span className="w-24 h-1 bg-[var(--primary-color)]"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} 
                className="bg-[var(--container-color)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-[var(--background-color)] border border-[var(--border-color)] group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                      <DarkModeIcon src={category.icon} alt={category.title} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-color)]">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`flex items-center gap-2 p-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[var(--background-color)] hover:translate-x-1 ${category.color} border`}
                      >
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                          <DarkModeIcon src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        </div>
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills