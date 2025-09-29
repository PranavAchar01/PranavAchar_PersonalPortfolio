import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Server Component - no "use client" directive
export default function Home() {
  return (
    <main className="min-h-screen bg-off-black">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pure-white text-off-black px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      <div id="main-content">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}