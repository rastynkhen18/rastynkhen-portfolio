import React, { useState, useEffect } from 'react'
import Profilepic from '../assets/images/rk.jpg'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Tech stack data for animated slideshow
  const techStackData = [
    { icon: '<>', label: 'HTML/CSS', color: 'text-orange-400' },
    { icon: 'JS', label: 'JavaScript', color: 'text-yellow-400' },
    { icon: 'TS', label: 'TypeScript', color: 'text-blue-400' },
    { icon: '⚛', label: 'React.js', color: 'text-cyan-400' },
    { icon: '▲', label: 'Next.js', color: 'text-white' },
    { icon: '~', label: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: '<?', label: 'PHP', color: 'text-purple-400' },
    { icon: '◉', label: 'Node.js', color: 'text-green-400' },
    { icon: '🐍', label: 'Python', color: 'text-yellow-400' },
    { icon: 'C++', label: 'C++', color: 'text-blue-400' },
    { icon: 'C#', label: 'C#', color: 'text-purple-400' },
    { icon: '☕', label: 'Java', color: 'text-red-400' },
    { icon: '🗄', label: 'MySQL', color: 'text-blue-400' },
    { icon: '🐘', label: 'PostgreSQL', color: 'text-blue-400' },
    { icon: '⚡', label: 'Supabase', color: 'text-green-400' },
    { icon: '📱', label: 'React Native', color: 'text-cyan-400' },
    { icon: '🤖', label: 'Android Studio', color: 'text-green-400' },
    { icon: '▣', label: 'Unity', color: 'text-gray-300' },
    { icon: '◆', label: 'Figma', color: 'text-purple-400' },
    { icon: '🎨', label: 'Photoshop', color: 'text-blue-400' },
    { icon: '🎬', label: 'Premiere', color: 'text-purple-400' },
    { icon: '⎇', label: 'Git/GitHub', color: 'text-orange-400' },
    { icon: '▲', label: 'Vercel', color: 'text-white' }
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const frontendSkills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'
  ]
  
  const backendSkills = [
    'PHP', 'Node.js', 'C++', 'Java', 'C#', 'Python'
  ]
  
  const databaseSkills = [
    'MySQL', 'PostgreSQL', 'Supabase'
  ]
  
  const mobileSkills = [
    'React Native', 'Android Studio'
  ]
  
  const designSkills = [
    'Figma', 'Adobe Photoshop', 'Adobe Premiere'
  ]
  
  const gameDevSkills = [
    'Unity', 'C#'
  ]
  
  const toolsSkills = [
    'Git', 'GitHub', 'Vercel'
  ]

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: frontendSkills,
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      icon: '</>'
    },
    {
      title: 'Backend Development',
      skills: backendSkills,
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      icon: '⚙'
    },
    {
      title: 'Database',
      skills: databaseSkills,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      icon: '▣'
    },
    {
      title: 'Mobile Development',
      skills: mobileSkills,
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      icon: '📱'
    },
    {
      title: 'Game Development',
      skills: gameDevSkills,
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      icon: '▶'
    },
    {
      title: 'Design & Media',
      skills: designSkills,
      color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      icon: '◆'
    },
    {
      title: 'Tools & Deployment',
      skills: toolsSkills,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      icon: '⚡'
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with React.js, Next.js, and Supabase. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Cross-platform mobile application developed with React Native. Includes task creation, categorization, deadline tracking, and team collaboration features.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '✓'
    },
    {
      title: 'University Portal System',
      description: 'Web-based student information system built with PHP and MySQL. Features student enrollment, grade management, and administrative dashboard.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '⚡'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, and group chat functionality. Built with React.js and Socket.io.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '💬'
    },
    {
      title: '2D Platformer Game',
      description: 'Indie 2D platformer game developed in Unity with C#. Features multiple levels, character progression, and engaging gameplay mechanics.',
      technologies: ['Unity', 'C#', 'Game Design', '2D Graphics'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '▶'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS with smooth animations and modern design.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      image: '/placeholder.svg?height=300&width=500',
      liveUrl: '#',
      githubUrl: '#',
      icon: '◆'
    }
  ]

  // Custom Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full border-2 border-gray-900"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        RK
      </span>
    </div>
  )
 

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-300 hover:text-cyan-400">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current rounded"></div>
                <div className="w-full h-0.5 bg-current rounded"></div>
                <div className="w-full h-0.5 bg-current rounded"></div>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <div className="flex justify-center items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
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

              <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="text-sm">▶</span>
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  <span className="text-sm">✉</span>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
      </section>

      {/* Tech Stack Slideshow Section */}

      {/* About Section with Education Content */}
      <section id="about" className="py-20 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
              <span className="text-cyan-400">◉</span>
              About Me
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Passionate IT Student & Developer
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg border border-gray-600">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <span className="text-sm text-cyan-400">◉</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Status</p>
                      <p className="text-gray-400 text-xs">4th Year Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg border border-gray-600">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <span className="text-sm text-green-400">▣</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Focus</p>
                      <p className="text-gray-400 text-xs">Web & Mobile Dev</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Info */}
              <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
                  <img
                    src={Profilepic}
                    alt="Rastyn Khen Ong Acasio"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm">
                  <span className="text-2xl font-bold text-cyan-400">{ }</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                  <span className="text-xl text-blue-400">◆</span>
                </div>
              </div>
            </div>
              {/* <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
                      <p className="text-cyan-100 text-sm">Web and Mobile App Development Specialization</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-white">Bulacan State University - Bustos Campus</h4>
                      <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                        Current
                      </span>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h5 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm">
                          <span className="text-cyan-400">▶</span>
                          Core Focus Areas:
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Web Development
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Mobile App Development
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Software Engineering
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            Database Management
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm">
                          <span className="text-blue-400">⚡</span>
                          Key Competencies:
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Full-Stack Development
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Cross-Platform Solutions
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            UI/UX Design
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Project Management
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
            <span className="text-cyan-400">⚡</span>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl text-cyan-400">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`px-3 py-1 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
            <span className="text-cyan-400">▣</span>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gray-900/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-lg text-cyan-400">{project.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <span>▶</span>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 text-center text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <span>⎇</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Logo />
              <span className="text-gray-400">Rastyn Khen Ong Acasio</span>
            </div>
            <p className="text-gray-400 text-center md:text-right flex items-center gap-2">
              <span className="text-cyan-400">{ }</span>
              © 2024 Built with React.js, Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
