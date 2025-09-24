'use client'

import { useEffect } from 'react'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    // Optional: Track 404 errors
    console.log('404 Error: Page not found')
  }, [])

  const goHome = () => {
    window.location.href = '/'
  }

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-off-black flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-pure-white mb-4 animate-pulse">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pure-white to-transparent mx-auto mb-8"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-pure-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-medium-gray text-lg leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry though – even the best developers encounter 404s!
          </p>
          <p className="text-medium-gray">
            Let's get you back on track.
          </p>
        </div>

        {/* Search Suggestions */}
        <div className="glass-effect rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-lg font-semibold text-pure-white mb-4 flex items-center">
            <Search className="mr-2" size={20} />
            You might be looking for:
          </h2>
          <ul className="space-y-3 text-medium-gray">
            <li className="hover:text-pure-white transition-colors cursor-pointer" onClick={() => window.location.href = '/#about'}>
              • About Me - Learn about my background and skills
            </li>
            <li className="hover:text-pure-white transition-colors cursor-pointer" onClick={() => window.location.href = '/#projects'}>
              • My Projects - View my latest development work
            </li>
            <li className="hover:text-pure-white transition-colors cursor-pointer" onClick={() => window.location.href = '/#resume'}>
              • Resume - Check out my experience and education
            </li>
            <li className="hover:text-pure-white transition-colors cursor-pointer" onClick={() => window.location.href = '/#contact'}>
              • Contact - Get in touch for collaborations
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="inline-flex items-center px-8 py-4 bg-pure-white text-off-black rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 group"
          >
            <Home size={20} className="mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </button>
          
          <button
            onClick={goBack}
            className="inline-flex items-center px-8 py-4 border-2 border-pure-white text-pure-white rounded-lg font-semibold hover:bg-pure-white hover:text-off-black transition-all duration-300 transform hover:scale-105 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:scale-110 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 bg-dark-gray rounded-lg border border-light-gray">
          <p className="text-medium-gray text-sm">
            <span className="text-pure-white font-semibold">Fun Fact:</span> HTTP 404 errors were named after 
            room 404 at CERN, where the World Wide Web was invented. The room housed the central database, 
            and when it couldn't be found, visitors got "404 Not Found" errors!
          </p>
        </div>
      </div>
    </div>
  )
}