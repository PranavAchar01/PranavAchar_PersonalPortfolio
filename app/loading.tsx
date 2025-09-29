export default function Loading() {
  return (
    <div className="min-h-screen bg-off-black flex items-center justify-center">
      <div className="text-center" role="status" aria-live="polite">
        {/* Accessible progress indicator */}
        <div className="relative inline-flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-light-gray border-t-pure-white rounded-full animate-spin mb-4" aria-hidden="true"></div>
          <progress className="sr-only" aria-label="Loading content">
            Loading portfolio content...
          </progress>
          <p className="text-medium-gray text-lg">
            <span aria-hidden="true">Loading Portfolio</span>
            <span className="animate-pulse" aria-hidden="true">...</span>
            <span className="sr-only">Please wait while the portfolio loads</span>
          </p>
        </div>
        
        {/* Skeleton loader for better UX */}
        <div className="mt-8 space-y-4 max-w-2xl mx-auto px-4">
          <div className="h-4 bg-dark-gray rounded-full animate-pulse" style={{width: '80%'}}></div>
          <div className="h-4 bg-dark-gray rounded-full animate-pulse" style={{width: '60%'}}></div>
          <div className="h-4 bg-dark-gray rounded-full animate-pulse" style={{width: '70%'}}></div>
        </div>
      </div>
    </div>
  )
}