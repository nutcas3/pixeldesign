import OptimizedImage from './OptimizedImage'

interface Project {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-background rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow transform hover:scale-105">
      <div className="aspect-w-16 aspect-h-9 relative">
        <OptimizedImage
          src={project.image}
          alt={`${project.name} project thumbnail`}
          className="w-full h-full"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          width={640}
          height={360}
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">
          {project.name}
        </h3>
        <p className="mt-2 text-text-secondary mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-4 inline-flex items-center text-primary group-hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
