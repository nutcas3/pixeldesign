import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = lazy(() => import('./ProjectCard'))

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with seamless user experience and robust backend integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'A stunning portfolio website for a creative agency showcasing their work and services.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    link: '#'
  },
  {
    id: 3,
    name: 'Mobile App UI',
    description: 'Beautiful and intuitive mobile app interface design for a fitness tracking application.',
    image: '/projects/mobile-app.jpg',
    tags: ['UI/UX', 'Figma', 'React Native'],
    link: '#'
  }
]

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

function ProjectsSkeleton({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-lg animate-pulse"
        >
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-200 w-full h-full" />
          </div>
          <div className="p-6 bg-white">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      ))}
    </>
  )
}

export default function Projects() {
  return (
    <motion.section 
      className="py-20 px-6 bg-surface"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          Our Latest Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <Suspense fallback={<ProjectsSkeleton count={3} />}>
            {projects.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </Suspense>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
