"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is ForeSee free?",
      answer: "Yes! ForeSee is 100% free and has no ads. We believe healthy screen habits should be accessible to everyone.",
    },
    {
      question: "Does it work offline?",
      answer: "Yes, all data stays on your device. ForeSee works completely offline and doesn't require an internet connection after installation.",
    },
    {
      question: "Can parents monitor multiple children?",
      answer: "Yes, you can link multiple child devices to a single parent account using unique 6-character codes for each child.",
    },
    {
      question: "What is the 20-20-20 rule?",
      answer: "The 20-20-20 rule is a simple eye care guideline: every 20 minutes, take a 20-second break and look at something 20 feet away. It helps reduce eye strain from screen time.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No! ForeSee works without any account creation or sign-in. Simply download the app, add a name, and start using it immediately.",
    },
    {
      question: "Is my child's data safe?",
      answer: "Absolutely. All data is stored locally on your device. We don't collect, store, or share any personal information. Your privacy is our priority.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ForeSee
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
