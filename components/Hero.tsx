'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Mail, Linkedin } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "I'm Pranav Achar"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-medium-gray font-medium">
              Hello, World! 👋
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-medium-gray font-light max-w-4xl mx-auto">
              Computer Science Student & Web Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            High school senior from Dublin, California, with <span className="text-pure-white font-semibold">3+ years</span> of web development experience, 
            creating modern websites for clubs, businesses, and biotech companies. 
            Passionate about <span className="text-pure-white font-semibold">React</span>, 
            <span className="text-pure-white font-semibold"> Next.js</span>, and building exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.querySelector('#projects')
                projectsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-pure-white text-off-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-light-gray transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector('#contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-pure-white text-pure-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pure-white hover:text-off-black transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:achar.pranav@gmail.com"
              className="p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/PranavAchar01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300 group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/pranav-achar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="p-2 text-medium-gray hover:text-pure-white transition-colors cursor-pointer"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero