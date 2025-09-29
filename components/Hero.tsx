'use client'

import { ChevronDown, Github, Mail, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Heading - Professional introduction */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-pure-white">Hi, I'm Pranav Achar</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-high-contrast font-light max-w-4xl mx-auto">
              Full-Stack Web Developer
            </p>
            <p className="text-lg text-medium-gray font-medium">
              Dublin, CA • Available for Freelance Projects
            </p>
          </div>

          {/* Professional Description */}
          <p className="text-lg sm:text-xl text-high-contrast max-w-3xl mx-auto leading-relaxed body-text">
            Specialized in building <strong className="text-pure-white font-semibold">high-performance web applications</strong> with 
            <strong className="text-pure-white font-semibold"> React</strong>, 
            <strong className="text-pure-white font-semibold"> Next.js</strong>, and 
            <strong className="text-pure-white font-semibold"> TypeScript</strong>. 
            Delivered <strong className="text-pure-white font-semibold">10+ production-ready solutions</strong> for businesses 
            with a focus on performance optimization, user experience, and scalable architecture.
          </p>

          {/* CTA Buttons with better labels */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.querySelector('#projects')
                projectsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-pure-white text-off-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-light-gray transition-all duration-300 transform hover:scale-105"
              aria-label="View my portfolio projects"
            >
              View Live Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector('#contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-pure-white text-pure-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pure-white hover:text-off-black transition-all duration-300 transform hover:scale-105"
              aria-label="Contact me for opportunities"
            >
              Start a Project
            </a>
          </div>

          {/* Social Links - Professional focus */}
          <div className="flex justify-center items-center space-x-6 pt-8">
            <a
              href="https://github.com/PranavAchar01"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300"
              aria-label="View GitHub profile"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only sm:not-sr-only text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/pranav-achar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300"
              aria-label="View LinkedIn profile"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only sm:not-sr-only text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:achar.pranav@gmail.com"
              className="group flex items-center space-x-2 p-3 border border-light-gray rounded-full hover:bg-light-gray hover:text-off-black transition-all duration-300"
              aria-label="Send email to achar.pranav@gmail.com"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              <span className="sr-only sm:not-sr-only text-sm">Email</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator with better accessibility */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="p-2 text-medium-gray hover:text-pure-white transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
            <span className="sr-only">Scroll to next section</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
