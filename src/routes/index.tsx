import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FAQ from '../components/FAQ'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SEO from '../components/SEO'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-background" role="main">
      <SEO
        title="Home"
        description="PixelDesign - Crafting digital experiences with stunning design and flawless functionality. We specialize in web design, UI/UX, and development services."
      />
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6"
          >
            Get a Website That
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary"
            > Works</motion.span> as Hard as You Do
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-8"
          >
            We build fast, user-friendly designs to grow your business
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-text-secondary mb-12"
          >
            We're more than designers—we're your digital growth partners
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg border-2 border-primary bg-black text-white hover:bg-primary hover:text-white font-medium transition-colors"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView()}
            aria-label="Scroll to services"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-text-secondary mb-8"
          >
            We build fast, user-friendly designs to grow your business.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group p-6 bg-background rounded-lg shadow-soft hover:shadow-lg"
              >
                <motion.div 
                  className="text-primary mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div id="projects">
        <Projects />
      </div>
      <Testimonials />
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      <Newsletter />
    </div>
  )
}

const services = [
  {
    title: 'Custom Code & Web Frameworks',
    description: 'Modern, responsive websites built with Laravel, React, and cutting-edge technologies',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile apps using Flutter and modern development tools',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing & Branding',
    description: 'Strategic branding and marketing solutions to enhance your online presence',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
]
