"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]) 

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const leftColumnFAQs = [
    {
      question: "What is ENTREX and why is it the best chauffeur service?",
      answer:
        "ENTREX is a premium chauffeur service provider offering luxury transportation solutions across India. We provide professional drivers, well-maintained vehicles, and exceptional customer service to ensure your comfort and safety during every journey.",
    },
    {
      question: "What types of vehicles do you offer?",
      answer:
        "We offer a diverse fleet including luxury sedans, SUVs, premium cars, and executive vehicles. All our vehicles are less than 3 years old, regularly maintained, and equipped with modern amenities for your comfort.",
    },
    {
      question: "How do you ensure driver quality and safety?",
      answer:
        "All our chauffeurs are handpicked, background-verified, professionally trained, and dressed. They undergo regular training programs and are equipped with GPS tracking for real-time monitoring and safety.",
    },
    {
      question: "What areas do you serve in India?",
      answer:
        "ENTREX operates across major cities in India including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and many other metropolitan areas. We also provide intercity travel services.",
    },
    {
      question: "How can I book a ride with ENTREX?",
      answer:
        "You can book through our website, mobile app, or by calling our 24x7 customer support. We offer instant booking, advance reservations, and corporate account management for businesses.",
    },
  ]

  const rightColumnFAQs = [
    {
      question: "What is your pricing structure?",
      answer:
        "We offer transparent pricing with no hidden charges. Our rates are competitive within the premium segment, and we provide real-time billing through our app. Corporate packages and long-term contracts are available at special rates.",
    },
    {
      question: "Do you provide airport transfer services?",
      answer:
        "Yes, we specialize in airport transfers with timely pickups and drop-offs. We monitor flight schedules in real-time and adjust pickup times accordingly to ensure you never miss your flight or wait unnecessarily.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "We ensure safety through GPS tracking, emergency support, regular vehicle maintenance, verified drivers, and 24x7 monitoring. All vehicles are equipped with safety kits and emergency contact systems.",
    },
    {
      question: "Do you offer corporate travel solutions?",
      answer:
        "Yes, we provide comprehensive corporate travel solutions including employee commute services, executive transportation, event management, and dedicated transport desk management with centralized billing and reporting.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, credit/debit cards, digital wallets, UPI, and corporate billing. For businesses, we offer monthly invoicing and account management services.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-2xl font-bold mb-4">???</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Got questions? We have got answers! Find solutions to common queries about our services, processes, and
            technology.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {leftColumnFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3
                      className={`text-lg font-medium pr-4 ${
                        openItems.includes(index) ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {rightColumnFAQs.map((faq, index) => {
                const itemIndex = index + 5
                return (
                  <div key={itemIndex} className="bg-white rounded-lg border border-gray-200">
                    <button
                      onClick={() => toggleItem(itemIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3
                        className={`text-lg font-medium pr-4 ${
                          openItems.includes(itemIndex) ? "text-blue-600" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      {openItems.includes(itemIndex) ? (
                        <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(itemIndex) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
