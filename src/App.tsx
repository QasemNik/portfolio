import React, { useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  FileCode,
  Layout,
  Code2,
  Terminal,
  Palette,
  Globe,
  Database,
  Cloud,
  Github as Git,
  Server,
  Monitor,
  Cpu,
  Layers,
  Package,
  Moon,
  Sun,
  Download,
} from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  const skills = [
    { name: 'React', level: 90, icon: <FileCode size={24} /> },
    { name: 'JavaScript', level: 85, icon: <Code2 size={24} /> },
    { name: 'TypeScript', level: 80, icon: <Terminal size={24} /> },
    { name: 'HTML5', level: 95, icon: <Layout size={24} /> },
    { name: 'CSS3', level: 85, icon: <Palette size={24} /> },
    { name: 'TailwindCSS', level: 90, icon: <Globe size={24} /> },
    { name: 'Node.js', level: 75, icon: <Server size={24} /> },
    { name: 'Git', level: 85, icon: <Git size={24} /> },
  ]

  const technologies = [
    { icon: <FileCode size={40} />, name: 'React' },
    { icon: <Code2 size={40} />, name: 'JavaScript' },
    { icon: <Terminal size={40} />, name: 'TypeScript' },
    { icon: <Layout size={40} />, name: 'HTML5' },
    { icon: <Palette size={40} />, name: 'CSS3' },
    { icon: <Globe size={40} />, name: 'TailwindCSS' },
    { icon: <Database size={40} />, name: 'SQL' },
    { icon: <Cloud size={40} />, name: 'AWS' },
    { icon: <Git size={40} />, name: 'Git' },
    { icon: <Server size={40} />, name: 'Node.js' },
    { icon: <Monitor size={40} />, name: 'Responsive Design' },
    { icon: <Cpu size={40} />, name: 'REST APIs' },
    { icon: <Layers size={40} />, name: 'Redux' },
    { icon: <Package size={40} />, name: 'Webpack' },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${
        darkMode ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'hover:bg-gray-800' 
                    : 'hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#"
                className={`px-4 py-2 rounded-full ${
                  darkMode
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } flex items-center gap-2 transition-colors`}
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 relative">
            <div className={`absolute inset-0 rounded-full ${
              darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
            } blur-3xl transform -translate-y-4`}></div>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover relative z-10 ring-4 ring-white dark:ring-gray-900"
            />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'
              : 'text-gray-900'
          }`}>
            Frontend Developer
          </h1>
          <p className={`text-xl md:text-2xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } mb-8`}>
            Crafting beautiful, responsive, and user-friendly web experiences
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              className={`hover:text-blue-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className={`hover:text-blue-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className={`hover:text-blue-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className={`${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } p-8 rounded-lg shadow-xl`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>My Journey</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Passionate frontend developer with 5+ years of experience in creating modern web applications.
                    Specialized in React, TypeScript, and modern CSS frameworks.
                  </p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    When I'm not coding, you can find me contributing to open-source projects,
                    writing technical blog posts, or exploring new web technologies.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Based in San Francisco, CA
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Available for freelance work
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Open to remote opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Chart */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } p-6 rounded-lg shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="relative pt-1">
                  <div className={`flex mb-2 items-center justify-between`}>
                    <div>
                      <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                        darkMode 
                          ? 'text-blue-400 bg-blue-900/30'
                          : 'text-blue-600 bg-blue-200'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <div
                      style={{ width: `${skill.level}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        darkMode
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                          : 'bg-blue-600'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg hover:transform hover:scale-105 transition-all ${
                  darkMode
                    ? 'bg-gray-900 hover:bg-gray-900/80'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{tech.icon}</div>
                <h3 className="font-medium text-center text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              title="Senior Frontend Developer"
              company="Tech Solutions Inc."
              period="2021 - Present"
              description="Led the frontend development team in creating enterprise-level React applications. Implemented modern CI/CD practices and improved performance by 40%."
              skills={['React', 'TypeScript', 'Next.js', 'TailwindCSS']}
              darkMode={darkMode}
            />
            <ExperienceCard
              title="Frontend Developer"
              company="Digital Innovations"
              period="2019 - 2021"
              description="Developed and maintained multiple client-facing applications. Introduced responsive design practices and modern state management solutions."
              skills={['Vue.js', 'JavaScript', 'SCSS', 'Vuex']}
              darkMode={darkMode}
            />
            <ExperienceCard
              title="Junior Web Developer"
              company="StartUp Hub"
              period="2018 - 2019"
              description="Collaborated in an agile team to deliver web applications. Focused on UI/UX improvements and cross-browser compatibility."
              skills={['HTML5', 'CSS3', 'JavaScript', 'jQuery']}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store built with React and TailwindCSS"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Dashboard Analytics"
              description="Real-time analytics dashboard with interactive charts"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              darkMode={darkMode}
            />
            <ProjectCard
              title="Social Media App"
              description="Modern social platform with real-time features"
              image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div className={`${
            darkMode ? 'bg-gray-900' : 'bg-white'
          } p-8 rounded-lg shadow-xl`}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                    darkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                    darkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                    darkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-6 rounded-lg font-medium transition-opacity ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                    : 'bg-gray-900 text-white'
                } hover:opacity-90`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <p>© 2024 Frontend Developer. All rights reserved.</p>
      </footer>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
  darkMode,
}: {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  darkMode: boolean
}) {
  return (
    <div className={`${
      darkMode ? 'bg-gray-900' : 'bg-white'
    } p-8 rounded-lg shadow-xl hover:transform hover:scale-[1.01] transition-transform`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className={`text-xl font-bold ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>{title}</h3>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>{company}</p>
        </div>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{period}</p>
      </div>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              darkMode
                ? 'bg-gray-800 text-blue-400'
                : 'bg-gray-100 text-blue-600'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  darkMode,
}: {
  title: string
  description: string
  image: string
  darkMode: boolean
}) {
  return (
    <div className={`${
      darkMode ? 'bg-gray-900' : 'bg-white'
    } rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
      </div>
    </div>
  )
}

export default App