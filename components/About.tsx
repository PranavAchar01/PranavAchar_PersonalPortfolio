'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Users, Zap, Globe } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Technologies' },
  ]

  const expertise = {
    frontend: {
      title: 'Frontend Development',
      icon: <Code className="text-pure-white" size={24} />,
      skills: ['React.js', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Responsive Design', 'Performance Optimization']
    },
    backend: {
      title: 'Backend & Integration',
      icon: <Zap className="text-pure-white" size={24} />,
      skills: ['Node.js', 'REST APIs', 'Database Integration', 'Server Components', 'Third-party APIs', 'Authentication']
    },
    delivery: {
      title: 'Project Delivery',
      icon: <Users className="text-pure-white" size={24} />,
      skills: ['Client Communication', 'Agile Development', 'Version Control (Git)', 'CI/CD', 'Testing', 'Documentation']
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-dark-gray relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Delivering high-quality web solutions with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Professional Summary */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pure-white mb-4">
                Full-Stack Developer & Technical Problem Solver
              </h3>
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  <span className="text-pure-white font-semibold">Specialized in modern web development</span> with extensive experience in 
                  React ecosystem, Next.js framework, and TypeScript. I focus on building 
                  <span className="text-pure-white font-semibold"> scalable, performant applications</span> that deliver exceptional user experiences.
                </p>
                <p>
                  <span className="text-pure-white font-semibold">Production Experience:</span> Successfully delivered 
                  over 10 production websites ranging from business portfolios to complex web applications. 
                  Each project emphasizes <span className="text-pure-white font-semibold">clean code</span>, 
                  <span className="text-pure-white font-semibold"> responsive design</span>, and 
                  <span className="text-pure-white font-semibold"> optimal performance</span>.
                </p>
                <p>
                  <span className="text-pure-white font-semibold">Client-Focused Approach:</span> Proven track record of 
                  translating business requirements into technical solutions. Strong communication skills ensure 
                  project alignment from conception to deployment, resulting in 
                  <span className="text-pure-white font-semibold"> 100% client satisfaction</span>.
                </p>
                <p>
                  <span className="text-pure-white font-semibold">Continuous Learning:</span> Staying current with 
                  the latest web technologies and best practices. Regularly implementing new features like 
                  Next.js 14 App Router, Server Components, and modern CSS techniques to deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-1000 delay-${300 + index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-pure-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-medium-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Technical Expertise */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Frontend Development */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                {expertise.frontend.icon}
                <h4 className="text-xl font-semibold text-pure-white ml-3">{expertise.frontend.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.frontend.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm font-medium border border-light-gray"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Integration */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                {expertise.backend.icon}
                <h4 className="text-xl font-semibold text-pure-white ml-3">{expertise.backend.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.backend.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm font-medium border border-light-gray"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Delivery */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                {expertise.delivery.icon}
                <h4 className="text-xl font-semibold text-pure-white ml-3">{expertise.delivery.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.delivery.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm font-medium border border-light-gray"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Services Offered */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="text-pure-white" size={24} />
                <h4 className="text-xl font-semibold text-pure-white ml-3">Services Offered</h4>
              </div>
              <div className="space-y-2 text-medium-gray">
                <p>• Full-Stack Web Application Development</p>
                <p>• Frontend UI/UX Implementation</p>
                <p>• API Integration & Development</p>
                <p>• Website Performance Optimization</p>
                <p>• Technical Consultation & Code Review</p>
                <p>• Maintenance & Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-medium-gray mb-6">
            Looking for a developer who delivers quality on time?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.querySelector('#contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-4 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
