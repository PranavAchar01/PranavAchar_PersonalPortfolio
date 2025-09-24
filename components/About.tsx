'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, GraduationCap, Award, Globe } from 'lucide-react'

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
    { number: '4.0', label: 'Weighted GPA' },
    { number: '10+', label: 'Projects Built' },
    { number: '3', label: 'Languages Spoken' },
  ]

  const skills = {
    technical: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'WordPress', 'Wix'],
    languages: ['English (Native)', 'Tulu (Fluent)', 'Tamil (Fluent)'],
    soft: ['Leadership', 'Teamwork', 'Time Management', 'Problem Solving', 'Communication', 'Attention to Detail']
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Passionate student developer combining academic excellence with real-world experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio & Story */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pure-white mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  I'm a <span className="text-pure-white font-semibold">high school senior</span> from Dublin, California, 
                  with an insatiable passion for technology and web development. What started as curiosity about 
                  how websites work has evolved into <span className="text-pure-white font-semibold">3+ years of professional experience</span> 
                  building digital solutions for real businesses.
                </p>
                <p>
                  Currently maintaining a <span className="text-pure-white font-semibold">4.0 weighted GPA</span> while 
                  pursuing advanced coursework in Computer Science and Mathematics, I've learned to balance 
                  academic excellence with practical application. My journey has taken me from building simple 
                  club websites to developing sophisticated platforms for biotech companies.
                </p>
                <p>
                  Beyond coding, I'm deeply involved in <span className="text-pure-white font-semibold">competitive sports</span> - 
                  playing club soccer competitively for 4 years and lacrosse at the varsity level for 3 years. These experiences have 
                  taught me invaluable lessons about teamwork, leadership, and perseverance that directly translate 
                  to my approach in software development.
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

          {/* Right Column - Skills & Highlights */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Technical Skills */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="mr-3 text-pure-white" size={24} />
                <h4 className="text-xl font-semibold text-pure-white">Technical Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm font-medium border border-light-gray"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="mr-3 text-pure-white" size={24} />
                <h4 className="text-xl font-semibold text-pure-white">Languages</h4>
              </div>
              <div className="space-y-2">
                {skills.languages.map((language, index) => (
                  <div key={language} className="text-medium-gray">
                    {language}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Highlight */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="mr-3 text-pure-white" size={24} />
                <h4 className="text-xl font-semibold text-pure-white">Education</h4>
              </div>
              <div className="space-y-2">
                <p className="text-medium-gray">
                  <span className="text-pure-white font-semibold">Dublin High School</span> - Dublin, CA
                </p>
                <p className="text-medium-gray">
                  Expected Graduation: May 2026
                </p>
                <p className="text-medium-gray">
                  Advanced Placement: Computer Science, Mathematics, World History
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="mr-3 text-pure-white" size={24} />
                <h4 className="text-xl font-semibold text-pure-white">Leadership & Activities</h4>
              </div>
              <div className="space-y-2 text-medium-gray">
                <p>• Varsity Lacrosse Player (3 years)</p>
                <p>• Club Soccer Player - Competitive (4 years)</p>
                <p>• Licensed Soccer Referee</p>
                <p>• Computer Science Club Member</p>
                <p>• Business Club Participant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About