import { createFileRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import SEO from '../components/SEO'
import { routeConfig } from './config'

const ProjectCard = lazy(() => import('../components/ProjectCard'))

export const Route = createFileRoute('/projects')({
  component: Projects,
})

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

function Projects() {
  return (
    <div className="min-h-screen pt-20 px-6 bg-white" role="main">
      <SEO
        title={routeConfig.projects.title}
        description={routeConfig.projects.description}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {routeConfig.projects.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<ProjectsSkeleton count={3} />}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  )
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
