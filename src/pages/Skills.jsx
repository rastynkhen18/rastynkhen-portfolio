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

import ReactNativeIcon from '../assets/icons/react.svg'
import AndroidIcon from '../assets/icons/androidstudio.png'
import FlutterIcon from '../assets/icons/flutter.svg'

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

import UnityIcon from '../assets/icons/unity.svg'

import FigmaIcon from '../assets/icons/figma.svg'
import CanvaIcon from '../assets/icons/canva.svg'
import PhotoshopIcon from '../assets/icons/adobe-photoshop.svg'
import IllustratorIcon from '../assets/icons/adobe-illustrator.svg'

import CiscoIcon from '../assets/icons/cisco.svg'
import BurpSuiteIcon from '../assets/icons/burpsuite.svg'

import GitIcon from '../assets/icons/git.svg'
import GithubIcon from '../assets/icons/github.svg'
import VercelIcon from '../assets/icons/vercel.svg'



const Skills = () => {
  const webdevSkills = [
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'React.js', icon: ReactIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Next.js', icon: NextjsIcon }
    // { name: 'Bootstrap', icon: BootstrapIcon }
  ]

  const backendSkills = [
    { name: 'PHP', icon: PhpIcon },
    { name: 'Laravel', icon: LaravelIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'Express.js', icon: ExpressIcon, useDarkMode: true },
    { name: 'C++', icon: CppIcon },
    { name: 'C#', icon: CsharpIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Python', icon: PythonIcon }
  ]

  const databaseSkills = [
    { name: 'MySQL', icon: MysqlIcon },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'Supabase', icon: SupabaseIcon },
    { name: 'MongoDB', icon: MongodbIcon }
  ]

  const mobileSkills = [
    { name: 'Android Studio', icon: AndroidIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'React Native', icon: ReactNativeIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon }
    // { name: 'Flutter', icon: FlutterIcon }
  ]

  const designSkills = [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Canva', icon: CanvaIcon },
    { name: 'Adobe Photoshop', icon: PhotoshopIcon },
    { name: 'Adobe Illustrator', icon: IllustratorIcon }
  ]

  const gameDevSkills = [
    { name: 'Unity', icon: UnityIcon, useDarkMode: true },
    { name: 'C#', icon: CsharpIcon }
  ]

  const toolsSkills = [
    { name: 'Git', icon: GitIcon },
    { name: 'GitHub', icon: GithubIcon, useDarkMode: true },
    { name: 'Vercel', icon: VercelIcon, useDarkMode: true }
  ]

  const securitySkills = [
    { name: 'Cisco Networking', icon: CiscoIcon, useDarkMode: true },
    { name: 'Burp Suite', icon: BurpSuiteIcon }
  ]


  const skillCategories = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive user interfaces with modern web technologies.',
      skills: webdevSkills,
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cross-platform and native mobile applications for iOS and Android.',
      skills: mobileSkills,
    },
    {
      title: 'API Integration & Backend Development',
      description: 'Creating robust server-side applications and APIs to power web applications.',
      skills: backendSkills,
    },
    {
      title: 'Database Managemnt',
      description: 'Designing and implementing efficient data storage and retrieval systems.',
      skills: databaseSkills,
    },
    {
      title: 'Game Development',
      description: 'Creating interactive gaming experiences with industry-standard tools and technologies.',
      skills: gameDevSkills,
    },
    {
      title: 'Design & Media',
      description: 'Crafting visually appealing and user-friendly interfaces with professional design tools.',
      skills: designSkills,
    },
    {
      title: 'Networking & Cybersecurity',
      description: 'Implementing secure network infrastructures and performing security assessments.',
      skills: securitySkills,
    },
    {
      title: 'Version Control & Deployment',
      description: 'Utilizing version control and deployment tools to streamline development workflows.',
      skills: toolsSkills,
    }
  ]


  return (
    <section id="skills" className="py-20 bg-[var(--gray-color)]">
      <div className="container mx-auto px-4">
        <FadeInOnView>
          <div className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--text-color)] flex flex-col items-center justify-center gap-3">
            <span className="flex items-center gap-3">Technical <mark className='bg-transparent text-[var(--primary-color)]'>Skills</mark></span>
            <span className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-light)]"></span>
          </div>
        </FadeInOnView>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <FadeInOnView
              delay={index * 0.1}
              key={index}
            >
              <div
                className="bg-[var(--card-color)] rounded-xl overflow-hidden border border-[var(--border-color)] transition-all duration-500 hover:-translate-y-2 group h-full"
              >
                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-start flex-col gap-4 mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-color)]">{category.title}</h3>
                    <p className="text-[var(--text-gray)] text-sm">{category.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {category.skills.map((skill) => (
                      <div
                        className={`flex items-center rounded-lg text-sm font-medium transition-all duration-300`}
                      >
                        <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                          {skill.useDarkMode ? (
                            <DarkModeIcon src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                          ) : (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    ))}
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

export default Skills