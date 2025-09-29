'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Code, TrendingUp, Users, Zap } from 'lucide-react'

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
      title: 'Anushma - Bio-Tech Distribution Platform',
      description: 'Enterprise-grade web application for biotech distribution company featuring real-time inventory management and client portal.',
      longDescription: 'Developed a comprehensive business platform with React and Radix UI, implementing custom CMS integration for product management. Achieved 40% improvement in page load speed through code splitting and lazy loading. Integrated EmailJS for automated client communications with 99.9% delivery rate.',
      metrics: {
        performance: '95+ Lighthouse Score',
        users: 'B2B Platform',
        improvement: '40% Faster Load Time'
      },
      image: '/api/placeholder/600/400',
      liveUrl: 'https://www.anushma.site',
      githubUrl: 'https://github.com/PranavAchar01/anushma1',
      technologies: ['React', 'Radix UI', 'TailwindCSS', 'EmailJS', 'Performance Optimization'],
      category: 'Enterprise',
      featured: true,
      year: '2025'
    },
    {
      id: 2,
      title: 'CS Club - Multi-Purpose Business Template',
      description: 'Versatile React-based template system designed for rapid deployment of business websites with customizable components.',
      longDescription: 'Built a modular template architecture using React and TailwindCSS, enabling quick customization for different business needs. Implemented dynamic routing with React Router and animated transitions using AOS library. Template has been adapted for 5+ client projects with minimal modification time.',
      metrics: {
        performance: '90+ Lighthouse Score',
        reusability: '5+ Deployments',
        development: '70% Time Saved'
      },
      image: '/api/placeholder/600/400',
      liveUrl: 'https://cs-club-five.vercel.app/',
      githubUrl: 'https://github.com/PranavAchar01/cs-club',
      technologies: ['React', 'TailwindCSS', 'React Router', 'AOS', 'Component Architecture'],
      category: 'Template',
      featured: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'WebDesign - Next.js SaaS Landing Page',
      description: 'High-converting landing page template built with Next.js 14 and TypeScript, optimized for SaaS and tech startups.',
      longDescription: 'Engineered a modern landing page using Next.js 14 App Router and Server Components for optimal SEO and performance. Implemented TypeScript for type safety and maintainability. Features include dark mode support, responsive design, and conversion-optimized sections. Achieved perfect Core Web Vitals scores.',
      metrics: {
        performance: '100 Lighthouse Score',
        seo: 'SEO Optimized',
        conversion: 'A/B Tested Design'
      },
      image: '/api/placeholder/600/400',
      liveUrl: 'https://webdesign-gilt.vercel.app/',
      githubUrl: 'https://github.com/PranavAchar01/webdesign',
      technologies: ['Next.js 14', 'TypeScript', 'Server Components', 'Headless UI', 'TailwindCSS'],
      category: 'SaaS',
      featured: true,
      year: '2024'
    }
  ]

  const filters = ['All', 'Enterprise', 'Template', 'SaaS', 'Featured']

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
            Production <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-8">
            Live projects demonstrating expertise in modern web development, 
            performance optimization, and scalable architecture
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
                        <Code size={48} className="text-medium-gray mx-auto" />
                        <p className="text-medium-gray text-sm">Live Production Site</p>
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
                          aria-label="View live site"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-pure-white text-off-black rounded-full hover:bg-light-gray transition-colors"
                          aria-label="View source code"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-dark-gray rounded-lg p-3 text-center border border-light-gray">
                      <TrendingUp size={16} className="text-pure-white mx-auto mb-1" />
                      <p className="text-xs text-medium-gray">{project.metrics.performance}</p>
                    </div>
                    <div className="bg-dark-gray rounded-lg p-3 text-center border border-light-gray">
                      <Users size={16} className="text-pure-white mx-auto mb-1" />
                      <p className="text-xs text-medium-gray">{project.metrics.users || project.metrics.reusability || project.metrics.seo}</p>
                    </div>
                    <div className="bg-dark-gray rounded-lg p-3 text-center border border-light-gray">
                      <Zap size={16} className="text-pure-white mx-auto mb-1" />
                      <p className="text-xs text-medium-gray">{project.metrics.improvement || project.metrics.development || project.metrics.conversion}</p>
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
                      Tech Stack
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
                      View Source
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
            Need a similar solution for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector('#contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-4 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 group"
            >
              Start Your Project
            </a>
            <a
              href="https://github.com/PranavAchar01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-dark-gray text-pure-white rounded-lg font-semibold hover:bg-light-gray hover:text-off-black transition-all duration-300 border border-light-gray group"
            >
              <Github size={20} className="mr-3 group-hover:scale-110 transition-transform" />
              More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
