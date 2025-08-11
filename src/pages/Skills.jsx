import React from 'react'


const Skills = () => {
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


  return (
    <div>
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
    </div>
  )
}

export default Skills