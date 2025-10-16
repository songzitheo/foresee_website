export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Healthier Eyes for Your Kids
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              ForeSee helps children build better screen habits using the 20-20-20 eye care rule.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center gap-6">
            {/* Phone 1 */}
            <div className="relative w-64 h-[520px] bg-white rounded-[3rem] shadow-2xl p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full bg-gray-50 rounded-[2.5rem] flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ForeSee</h3>
                <p className="text-sm text-gray-600 mb-8">20-20-20 Rule Timer</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mb-3">
                  👶 Child
                </button>
                <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold">
                  👪 Parent
                </button>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="relative w-64 h-[520px] bg-white rounded-[3rem] shadow-2xl p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-b from-purple-50 to-white rounded-[2.5rem] flex flex-col items-center justify-between p-6">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-sm text-gray-600">ForeSee</p>
                      <h3 className="text-lg font-bold">Hello, Theo!</h3>
                      <p className="text-xs text-gray-500">Ready to protect your eyes?</p>
                    </div>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold mb-2">20-20-20 Rule</h4>
                    <p className="text-sm text-gray-600">Work for 20 minutes, then take a 20-second break to look at something 20 feet away</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg">
                  ▶ Start Work Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50">
        <span className="text-xl">?</span>
      </button>
    </section>
  );
}
