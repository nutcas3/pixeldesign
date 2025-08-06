import { useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a submission
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.section 
      className="py-20 px-6 bg-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 px-6 rounded-lg bg-black hover:bg-black-dark text-white font-medium transition-colors disabled:opacity-50"
            variants={itemVariants}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status === 'sent' && (
            <motion.div 
              className="text-green-500 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
