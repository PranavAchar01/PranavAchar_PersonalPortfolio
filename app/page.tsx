'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-light-gray border-t-pure-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-medium-gray text-lg">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-off-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}