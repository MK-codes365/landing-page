import React, { useState } from 'react'

const faqData = [
  {
    question: "How does AuraUI compare to Tailwind?",
    answer: "AuraUI is a pre-built component library, while Tailwind is a utility class framework. We actually use custom CSS for maximum performance and isolation, but you can use them together!"
  },
  {
    question: "Is it suitable for production apps?",
    answer: "Absolutely. Our components are tested across all major browsers and devices, optimized for accessibility and speed."
  },
  {
    question: "Can I customize the colors?",
    answer: "Yes! We use CSS variables for everything. Simply override the root variables in your CSS file to match your brand identity instantly."
  },
  {
    question: "Do you offer support?",
    answer: "We offer 24/7 priority support for Pro and Enterprise plans, and a very active community Discord for our Starter users."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
