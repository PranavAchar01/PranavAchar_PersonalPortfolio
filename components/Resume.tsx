'use client'

import { useState, useEffect, useRef } from 'react'
import { Download, Briefcase, Code2, Rocket, CheckCircle, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react'

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const experience = [
    {
      title: 'Full-Stack Web Developer',
      type: 'Freelance',
      duration: '2022 - Present',
      description: 'Delivering end-to-end web solutions for businesses and organizations',
      highlights: [
        'Developed and deployed 10+ production websites using React, Next.js, and TypeScript',
        'Achieved average performance scores of 95+ on Google Lighthouse across all projects',
        'Implemented SEO best practices resulting in 60% increase in organic traffic for clients',
        'Managed full project lifecycle from requirements gathering to deployment and maintenance'
      ]
    },
    {
      title: 'Frontend Developer',
      type: 'Contract Projects',
      duration: '2023 - 2025',
      description: 'Specialized in creating responsive, performant user interfaces',
      highlights: [
        'Built reusable component libraries reducing development time by 70% across projects',
        'Integrated third-party APIs including payment gateways and email automation services',
        'Optimized web applications achieving 40% improvement in load times',
        'Collaborated directly with clients to translate business needs into technical solutions'
      ]
    }
  ]

  const technicalSkills = {
    frontend: ['React.js', 'Next.js 14', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'TailwindCSS', 'Responsive Design'],
    backend: ['Node.js', 'REST APIs', 'GraphQL', 'Database Integration', 'Server Components'],
    tools: ['Git/GitHub', 'VS Code', 'Vercel', 'Netlify', 'Figma', 'Chrome DevTools', 'Postman'],
    practices: ['Agile Development', 'CI/CD', 'Testing', 'Code Review', 'Performance Optimization', 'SEO']
  }

  const achievements = [
    {
      icon: <Rocket className="text-pure-white" size={24} />,
      title: '10+ Production Websites',
      description: 'Successfully delivered and maintained production-ready applications'
    },
    {
      icon: <CheckCircle className="text-pure-white" size={24} />,
      title: '100% Client Satisfaction',
      description: 'Maintained perfect client satisfaction through clear communication and quality delivery'
    },
    {
      icon: <Code2 className="text-pure-white" size={24} />,
      title: '95+ Performance Scores',
      description: 'Consistently achieved top Lighthouse scores across all projects'
    },
    {
      icon: <Briefcase className="text-pure-white" size={24} />,
      title: '3+ Years Experience',
      description: 'Proven track record in professional web development'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="resume" 
      className="py-20 bg-dark-gray relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-8">
            Comprehensive overview of technical expertise and professional accomplishments
          </p>
          
          {/* Download Resume Button */}
          <button className="inline-flex items-center px-6 py-3 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 group">
            <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
            Download PDF Resume
          </button>
        </div>

        {/* Contact Info Header */}
        <div className={`glass-effect rounded-2xl p-8 mb-12 text-center transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-pure-white mb-2">Pranav Achar</h3>
          <p className="text-xl text-medium-gray mb-4">Full-Stack Web Developer</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-medium-gray">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>Dublin, CA</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:achar.pranav@gmail.com" className="hover:text-pure-white transition-colors">
                achar.pranav@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>(925) 557-6515</span>
            </div>
            <div className="flex items-center">
              <Github size={16} className="mr-2" />
              <a href="https://github.com/PranavAchar01" target="_blank" rel="noopener noreferrer" className="hover:text-pure-white transition-colors">
                GitHub
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin size={16} className="mr-2" />
              <a href="https://linkedin.com/in/pranav-achar" target="_blank" rel="noopener noreferrer" className="hover:text-pure-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className={`glass-effect rounded-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-pure-white mb-6">
            Professional Summary
          </h3>
          <p className="text-medium-gray leading-relaxed text-lg">
            Results-driven Full-Stack Developer with 3+ years of experience building scalable web applications 
            using modern JavaScript frameworks. Specialized in React and Next.js development with a strong focus 
            on performance optimization, user experience, and clean code practices. Proven track record of delivering 
            high-quality solutions on time and within budget, maintaining 100% client satisfaction across 10+ production projects.
          </p>
        </div>

        {/* Key Achievements */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-effect rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">{achievement.icon}</div>
              <h4 className="text-lg font-semibold text-pure-white mb-2">{achievement.title}</h4>
              <p className="text-sm text-medium-gray">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Professional Experience */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Briefcase className="mr-3" size={28} />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-pure-white pl-4">
                    <div className="mb-3">
                      <h4 className="text-xl font-semibold text-pure-white">{job.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-medium-gray">{job.type}</span>
                        <span className="text-sm text-medium-gray">{job.duration}</span>
                      </div>
                    </div>
                    <p className="text-medium-gray mb-3 italic">{job.description}</p>
                    <div className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <p key={idx} className="text-medium-gray text-sm flex items-start">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-pure-white rounded-full flex-shrink-0"></span>
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Projects */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Rocket className="mr-3" size={28} />
                Notable Projects
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">
                    Anushma - Bio-Tech Distribution Platform
                  </h4>
                  <p className="text-medium-gray text-sm mb-2">
                    Enterprise web application with real-time inventory management
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">React</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">Radix UI</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">95+ Lighthouse</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">
                    Next.js SaaS Landing Pages
                  </h4>
                  <p className="text-medium-gray text-sm mb-2">
                    High-converting templates with perfect Core Web Vitals scores
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">Next.js 14</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">TypeScript</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">SEO Optimized</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">
                    Business Website Templates
                  </h4>
                  <p className="text-medium-gray text-sm mb-2">
                    Reusable component architecture deployed for 5+ clients
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">React</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">TailwindCSS</span>
                    <span className="text-xs px-2 py-1 bg-dark-gray text-pure-white rounded border border-light-gray">70% Time Saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Code2 className="mr-3" size={28} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frontend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Backend & Integration</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.backend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.tools.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Practices */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Best Practices</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.practices.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-dark-gray text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Availability */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6">
                Services & Availability
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">Available For</h4>
                  <ul className="space-y-2 text-medium-gray text-sm">
                    <li>• Full-time remote positions</li>
                    <li>• Contract/Freelance projects</li>
                    <li>• Technical consultation</li>
                    <li>• Long-term partnerships</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">Project Types</h4>
                  <ul className="space-y-2 text-medium-gray text-sm">
                    <li>• Web Application Development</li>
                    <li>• E-commerce Platforms</li>
                    <li>• SaaS Products</li>
                    <li>• Business Websites</li>
                    <li>• Landing Pages</li>
                    <li>• API Development</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-pure-white pl-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-2">Response Time</h4>
                  <p className="text-medium-gray text-sm">
                    Usually responds within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-medium-gray mb-6">
            Ready to bring your project to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector('#contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </a>
            <a
              href="mailto:achar.pranav@gmail.com"
              className="px-8 py-3 border-2 border-pure-white text-pure-white rounded-lg font-semibold hover:bg-pure-white hover:text-off-black transition-all duration-300"
            >
              Send Direct Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
