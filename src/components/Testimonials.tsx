import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    company: 'Design Co.',
    content: 'Working with Pixel Design Kitchen transformed our brand. Their attention to detail and creative solutions exceeded our expectations.',
    image: '/testimonials/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'TechStart',
    content: 'The team delivered an outstanding website that perfectly captures our vision. Their expertise in UI/UX design is exceptional.',
    image: '/testimonials/michael.jpg'
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Marketing Manager',
    company: 'Growth Labs',
    content: 'The redesign significantly improved our conversion rates. Their strategic approach to design makes them stand out.',
    image: '/testimonials/emma.jpg'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2
          }
        }
      }}
      className="py-20 px-6 bg-surface">

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-6"
        >
          Success Stories From Our Happy Clients
        </motion.h2>
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          className="text-xl text-text-secondary text-center mb-12"
        >
          Real feedback from businesses we've helped grow
        </motion.p>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }} 
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="bg-background p-8 rounded-lg shadow-soft"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.p 
                      className="text-text-secondary mb-6 italic"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      "{testimonial.content}"
                    </motion.p>
                    <motion.div 
                      className="flex items-center"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <div className="flex-shrink-0">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="h-12 w-12 rounded-full"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="ml-4">
                        <motion.h4 
                          className="text-lg font-semibold text-text-primary"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                          }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <motion.p 
                          className="text-text-tertiary"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                          }}
                        >
                          {testimonial.role} at {testimonial.company}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.5 } }
            }}
            className="flex justify-center mt-8 space-x-2"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-text-tertiary/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
