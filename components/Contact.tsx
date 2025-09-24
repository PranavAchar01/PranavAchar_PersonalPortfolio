'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'achar.pranav@gmail.com',
      href: 'mailto:achar.pranav@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(925) 557-6515',
      href: 'tel:+19255576515'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Ramon, CA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/PranavAchar01',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/pranav-achar',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:achar.pranav@gmail.com',
      color: 'hover:text-green-400'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-off-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pure-white mb-6">
                Let's Connect
              </h3>
              <p className="text-medium-gray leading-relaxed mb-8">
                Whether you're looking for a web developer for your business, need help with a personal project, 
                or just want to chat about technology and opportunities, I'm always open to new connections and collaborations.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className={`glass-effect rounded-lg p-6 hover:border-pure-white transition-all duration-300 group cursor-pointer transition-all duration-1000 delay-${300 + index * 100} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-pure-white text-off-black rounded-full group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-pure-white font-semibold">{info.title}</h4>
                        <p className="text-medium-gray group-hover:text-pure-white transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className={`space-y-6 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h4 className="text-lg font-semibold text-pure-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 border border-light-gray rounded-full ${link.color} transition-all duration-300 group hover:border-pure-white hover:scale-110`}
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`glass-effect rounded-lg p-6 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-pure-white font-semibold">Available for New Projects</span>
              </div>
              <p className="text-medium-gray text-sm mt-2">
                Currently accepting new web development projects and collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-effect rounded-2xl p-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-pure-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-light-gray rounded-lg text-pure-white placeholder-medium-gray focus:outline-none focus:border-pure-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-pure-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-gray border border-light-gray rounded-lg text-pure-white placeholder-medium-gray focus:outline-none focus:border-pure-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-pure-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-light-gray rounded-lg text-pure-white placeholder-medium-gray focus:outline-none focus:border-pure-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-pure-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-gray border border-light-gray rounded-lg text-pure-white placeholder-medium-gray focus:outline-none focus:border-pure-white transition-colors resize-vertical"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full flex items-center justify-center px-8 py-4 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-off-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="text-medium-gray text-sm mt-6 text-center">
              Prefer email? Reach out directly at{' '}
              <a href="mailto:achar.pranav@gmail.com" className="text-pure-white hover:text-light-gray transition-colors underline">
                achar.pranav@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact