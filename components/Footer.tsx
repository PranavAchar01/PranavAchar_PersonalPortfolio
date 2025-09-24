'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/PranavAchar01',
      label: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/pranav-achar',
      label: 'Connect with me professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:achar.pranav@gmail.com',
      label: 'Send me an email'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-pure-black border-t border-dark-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-pure-white hover:text-light-gray transition-colors mb-4 cursor-pointer"
              >
                Pranav Achar
              </button>
              <p className="text-medium-gray text-sm leading-relaxed mb-6 max-w-md">
                High school senior and passionate web developer with 3+ years of experience 
                creating modern, responsive websites for businesses and organizations. 
                Based in San Ramon, California.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-light-gray rounded-full text-medium-gray hover:text-pure-white hover:border-pure-white transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-pure-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-medium-gray hover:text-pure-white transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-pure-white font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <p className="text-medium-gray">
                  San Ramon, California
                </p>
                <a
                  href="mailto:achar.pranav@gmail.com"
                  className="text-medium-gray hover:text-pure-white transition-colors block"
                >
                  achar.pranav@gmail.com
                </a>
                <a
                  href="tel:+19255576515"
                  className="text-medium-gray hover:text-pure-white transition-colors block"
                >
                  (925) 557-6515
                </a>
                <div className="flex items-center space-x-2 pt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-gray py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-medium-gray text-sm text-center md:text-left">
              © {currentYear} Pranav Achar. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-medium-gray text-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using Next.js & TailwindCSS</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-pure-white text-off-black rounded-full shadow-lg hover:bg-light-gray transition-all duration-300 group z-50"
          aria-label="Back to top"
        >
          <svg 
            className="w-5 h-5 group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer