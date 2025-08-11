import React from 'react'

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

const Projects = () => {
  return (
    <div>
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
    </div>
  )
}

export default Projects