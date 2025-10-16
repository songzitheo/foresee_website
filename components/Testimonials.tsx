export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "ForeSee made screen time healthier for my son. He actually reminds me when it's time for his break!",
      name: "Emily W.",
      role: "Parent",
      initial: "E",
      bgColor: "bg-blue-500",
    },
    {
      rating: 5,
      text: "Simple, effective, and private — just what parents need.",
      name: "Carlos M.",
      role: "Parent",
      initial: "C",
      bgColor: "bg-purple-500",
    },
    {
      rating: 5,
      text: "The 20-second break screen is genius. My kids find it fun!",
      name: "Aisha K.",
      role: "Parent",
      initial: "A",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-purple-100">
            Real feedback from families using ForeSee
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
