'use client'

import { useState, useEffect, useRef } from 'react'
import { Download, GraduationCap, Briefcase, Award, Code2, Languages, Trophy, MapPin, Mail, Phone } from 'lucide-react'

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

  const education = {
    school: 'Dublin High School',
    location: 'Dublin, CA',
    graduation: 'May 2026',
    gpa: {
      weighted: '4.0',
      unweighted: '3.46'
    },
    coursework: [
      'AP Computer Science Principles (A)',
      'AP Computer Science A (A-/B+)',
      'AP World History (A)',
      'Honors English 3 (A-)',
      'Calculus (A)'
    ]
  }

  const technicalProjects = [
    {
      title: 'Anushma Site – Bio-Tech Distribution Company',
      year: '2025',
      website: 'www.anushma.site',
      highlights: [
        'Designed and developed a modern website with intuitive navigation and responsive design',
        'Implemented interactive features using HTML, CSS, and JavaScript to enhance engagement',
        'Collaborated with stakeholders to align branding and marketing requirements'
      ]
    },
    {
      title: 'Club & Small Business Websites',
      year: '2023-2025',
      highlights: [
        'Built and deployed multiple websites for school clubs and local businesses',
        'Delivered tailored solutions, managing domain setup, content organization, and site maintenance',
        'Ensured accessibility and responsive layouts across devices'
      ]
    }
  ]

  const leadership = [
    {
      title: 'Competitive Soccer',
      duration: '4 Years',
      description: 'Played in competitive league matches, demonstrating discipline, teamwork, and leadership'
    },
    {
      title: 'Varsity Lacrosse',
      duration: '3 Years',
      description: 'Earned varsity letters and mentored underclassmen while balancing athletics and academics'
    },
    {
      title: 'Licensed Soccer Referee',
      duration: 'Current',
      description: 'Certified to officiate matches, reinforcing game knowledge and demonstrating fairness and authority'
    }
  ]

  const skills = {
    technical: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'WordPress', 'Wix', 'Content Management Systems'],
    languages: ['English (Native)', 'Tulu (Fluent)', 'Tamil (Fluent)'],
    soft: ['Leadership', 'Teamwork', 'Attention to Detail', 'Time Management', 'Problem Solving', 'Communication']
  }

  const qualifications = [
    '3+ years of web development experience creating websites for clubs, businesses, and a biotech company',
    'Strong academic foundation in Computer Science, Mathematics, and Honors-level coursework',
    'Proven leadership and teamwork through varsity athletics and certified soccer refereeing',
    'Fluent in Tulu and Tamil; adaptable and detail-oriented with strong time management skills'
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
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-8">
            A comprehensive overview of my academic achievements, technical experience, and leadership activities
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
          </div>
        </div>

        {/* Summary of Qualifications */}
        <div className={`glass-effect rounded-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
            <Award className="mr-3" size={28} />
            Summary of Qualifications
          </h3>
          <div className="space-y-3">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-pure-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-medium-gray leading-relaxed">{qualification}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <GraduationCap className="mr-3" size={28} />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-pure-white">
                    {education.school} — {education.location}
                  </h4>
                  <p className="text-medium-gray mb-2">Expected Graduation: {education.graduation}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-pure-white font-semibold">Weighted GPA:</span>
                      <span className="text-medium-gray ml-2">{education.gpa.weighted}</span>
                    </div>
                    <div>
                      <span className="text-pure-white font-semibold">Unweighted GPA:</span>
                      <span className="text-medium-gray ml-2">{education.gpa.unweighted}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-pure-white font-semibold mb-2">Relevant Coursework:</p>
                    <div className="space-y-1">
                      {education.coursework.map((course, index) => (
                        <p key={index} className="text-medium-gray text-sm">• {course}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-medium-gray text-sm mt-3 italic">
                    Recognized for academic excellence with multiple term GPAs above 4.0.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Projects */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Code2 className="mr-3" size={28} />
                Technical Projects
              </h3>
              <div className="space-y-6">
                {technicalProjects.map((project, index) => (
                  <div key={index} className="border-l-2 border-pure-white pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-pure-white">{project.title}</h4>
                      <span className="text-sm text-medium-gray font-medium">({project.year})</span>
                    </div>
                    {project.website && (
                      <p className="text-pure-white text-sm mb-3">
                        Website: <a href={`https://${project.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-light-gray underline">{project.website}</a>
                      </p>
                    )}
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <p key={idx} className="text-medium-gray text-sm">• {highlight}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Leadership & Activities */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Trophy className="mr-3" size={28} />
                Leadership & Extracurricular Activities
              </h3>
              <div className="space-y-6">
                {leadership.map((activity, index) => (
                  <div key={index} className="border-l-2 border-pure-white pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-pure-white">{activity.title}</h4>
                      <span className="text-sm text-medium-gray font-medium">({activity.duration})</span>
                    </div>
                    <p className="text-medium-gray text-sm">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-pure-white mb-6 flex items-center">
                <Briefcase className="mr-3" size={28} />
                Skills
              </h3>
              <div className="space-y-6">
                {/* Technical Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pure-black text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3 flex items-center">
                    <Languages size={20} className="mr-2" />
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {skills.languages.map((language) => (
                      <p key={language} className="text-medium-gray text-sm">• {language}</p>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-pure-white mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-dark-gray text-pure-white rounded-full text-sm border border-light-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-medium-gray mb-6">
            Ready to discuss opportunities? Let's connect!
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
              Contact Me
            </a>
            <a
              href="mailto:achar.pranav@gmail.com"
              className="px-8 py-3 border-2 border-pure-white text-pure-white rounded-lg font-semibold hover:bg-pure-white hover:text-off-black transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume