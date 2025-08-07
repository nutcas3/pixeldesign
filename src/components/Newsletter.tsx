import { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
     
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <motion.section 
      className="bg-surface py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          variants={itemVariants}
        >
          Stay Updated with Design Insights
        </motion.h2>
        <motion.p 
          className="text-xl text-text-secondary mb-8"
          variants={itemVariants}
        >
          Join our newsletter for expert tips, industry trends, and exclusive insights to grow your digital presence.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-text-tertiary/20 bg-background text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              disabled={status === 'submitting'}
            />
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 rounded-lg bg-black hover:bg-black-dark text-white font-medium transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </div>
          
          <p className="mt-4 text-sm text-text-tertiary">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
          
          {status === 'success' && (
            <motion.div 
              className="mt-4 text-secondary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thanks for subscribing! Check your email to confirm.
            </motion.div>
          )}
          
          {status === 'error' && (
            <motion.div 
              className="mt-4 text-accent-pink"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
