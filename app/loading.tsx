'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-off-black flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Main Loading Animation */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-20 h-20 border-4 border-light-gray border-t-pure-white rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-medium-gray border-b-pure-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pure-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-pure-white">
            Loading Portfolio
          </h2>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-pure-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-pure-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pure-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-dark-gray rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pure-white to-light-gray animate-pulse" style={{ width: '60%' }}></div>
          </div>
          <p className="text-medium-gray text-sm mt-2">Preparing your experience...</p>
        </div>
      </div>
    </div>
  )
}