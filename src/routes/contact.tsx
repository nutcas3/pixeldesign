import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')

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
    <div className="min-h-screen pt-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <div className="text-green-500 dark:text-green-400 text-center">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for a dose of design inspiration?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to stay updated on our latest projects and get expert tips for growing your business online.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                setNewsletterStatus('sending')
                // Simulate newsletter subscription
                setTimeout(() => {
                  setNewsletterStatus('subscribed')
                  setNewsletterEmail('')
                }, 1000)
              }} 
              className="max-w-md mx-auto"
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending'}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {newsletterStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
              {newsletterStatus === 'subscribed' && (
                <div className="mt-4 text-green-500">
                  Thanks for subscribing! Check your email to confirm.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
