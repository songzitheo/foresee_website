export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-8">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What is ForeSee?
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            ForeSee is a simple, child-friendly app that reminds kids to follow the{" "}
            <span className="text-blue-600 font-semibold">20-20-20 eye care rule</span>: every 20 minutes, take a 20-second break and look at something 20 feet away.
          </p>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Parents can easily monitor their child&apos;s progress and help them form healthy digital habits — all with{" "}
            <span className="text-blue-600 font-semibold">no login or data collection</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
