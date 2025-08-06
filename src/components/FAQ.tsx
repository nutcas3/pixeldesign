import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive web design and development services, including UI/UX design, responsive web development, e-commerce solutions, and brand identity design. Each project is tailored to meet your specific business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website design and development project takes 4-8 weeks from concept to launch. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "What is your design process?",
    answer: "Our design process includes discovery, wireframing, design concepts, development, testing, and launch. We maintain clear communication throughout and involve you in key decisions to ensure the final product meets your vision."
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, we offer ongoing website maintenance and support packages to keep your site secure, up-to-date, and performing optimally. This includes regular updates, backups, and technical support."
  },
  {
    question: "What is your pricing structure?",
    answer: "We provide custom quotes based on your project requirements. Each project is unique, and we'll work with you to create a solution that fits your budget while meeting your business objectives."
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section 
      className="py-20 px-6 bg-surface"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-soft overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-text-primary">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-text-secondary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
