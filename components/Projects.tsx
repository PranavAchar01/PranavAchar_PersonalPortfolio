'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Anushma - Bio-Tech Distribution',
      description: 'Modern React business website template with Radix UI components, TailwindCSS styling, and EmailJS contact forms. Features responsive design, accessibility-focused components, and smooth animations for professional web presence.',
      longDescription: 'Designed and developed a sophisticated website for a biotech distribution company with intuitive navigation and responsive design. Implemented interactive features using modern web technologies to enhance user engagement while collaborating with stakeholders to align branding and marketing requirements.',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://www.anushma.site',
      githubUrl: 'https://github.com/PranavAchar01/anushma1',
      technologies: ['React', 'Radix UI', 'TailwindCSS', 'EmailJS', 'JavaScript'],
      category: 'Business',
      featured: true,
      year: '2025'
    },
    {
      id: 2,
      title: 'CS Club - Startup Template',
      description: 'Clean React startup website template built with Create React App. Includes TailwindCSS styling, React Router navigation, EmailJS integration, and AOS animations. Optimized for emerging companies and service-based businesses.',
      longDescription: 'Comprehensive startup website template featuring modern design principles, seamless navigation, and interactive elements. Built with performance optimization in mind and includes contact forms, service showcases, and responsive layouts perfect for tech startups.',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://cs-club-five.vercel.app/',
      githubUrl: 'https://github.com/PranavAchar01/cs-club',
      technologies: ['React', 'TailwindCSS', 'React Router', 'EmailJS', 'AOS'],
      category: 'Template',
      featured: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'WebDesign - Next.js Landing Page',
      description: 'TypeScript-powered Next.js 14 landing page template using App Router and Server Components. Built with Headless UI, TailwindCSS, and AOS animations. Ideal for SaaS products and professional services.',
      longDescription: 'State-of-the-art Next.js landing page template leveraging the latest web technologies including TypeScript, Server Components, and modern React patterns. Features optimized performance, SEO-friendly structure, and beautiful animations.',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://webdesign-gilt.vercel.app/',
      githubUrl: 'https://github.com/PranavAchar01/webdesign',
      technologies: ['Next.js 14', 'TypeScript', 'Headless UI', 'TailwindCSS', 'AOS'],
      category: 'Template',
      featured: true,
      year: '2024'
    }
  ]

  const filters = ['All', 'Business', 'Template', 'Featured']

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'All') return true
    if (selectedFilter === 'Featured') return project.featured
    return project.category === selectedFilter
  })

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-off-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-8">
            A showcase of my recent work - from business websites to modern web templates, 
            each project represents my commitment to quality, performance, and user experience.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-pure-white text-off-black'
                    : 'bg-dark-gray text-medium-gray hover:text-pure-white border border-light-gray'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-effect rounded-2xl overflow-hidden group transition-all duration-1000 delay-${index * 200} hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
              }`}>
                {/* Project Image/Preview */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-dark-gray rounded-lg overflow-hidden border border-light-gray group-hover:border-pure-white transition-colors">
                    {/* Placeholder for project screenshot */}
                    <div className="w-full h-full bg-gradient-to-br from-dark-gray to-pure-black flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Globe size={48} className="text-medium-gray mx-auto" />
                        <p className="text-medium-gray text-sm">Live Website Preview</p>
                      </div>
                    </div>
                    
                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-pure-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-pure-white text-off-black rounded-full hover:bg-light-gray transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-pure-white text-off-black rounded-full hover:bg-light-gray transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Project Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-dark-gray text-pure-white rounded-full text-sm font-medium border border-light-gray">
                        {project.category} • {project.year}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-pure-white text-off-black rounded-full text-sm font-bold">
                          ★ Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-pure-white group-hover:text-light-gray transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-medium-gray leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-pure-white uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm border border-light-gray"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 group/btn"
                    >
                      <ExternalLink size={18} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 border-2 border-pure-white text-pure-white rounded-lg font-semibold hover:bg-pure-white hover:text-off-black transition-all duration-300 group/btn"
                    >
                      <Github size={18} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-medium-gray mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <a
            href="https://github.com/PranavAchar01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-dark-gray text-pure-white rounded-lg font-semibold hover:bg-light-gray hover:text-off-black transition-all duration-300 border border-light-gray group"
          >
            <Github size={20} className="mr-3 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects