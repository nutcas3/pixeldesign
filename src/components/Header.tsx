import { useState, useEffect } from 'react'

const scrollToSection = (id: string, setIsMenuOpen?: (open: boolean) => void) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen?.(false)
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isMenuOpen && !target?.closest('.mobile-menu') && !target?.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-background/80 shadow-soft transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-text-primary hover:text-primary transition-colors"
          >
            PixelDesign
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-surface transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium transition-colors"
            >
              Book a Call
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home', setIsMenuOpen)}
              className="block w-full text-left px-4 py-2 text-text-secondary hover:bg-surface rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects', setIsMenuOpen)}
              className="block w-full text-left px-4 py-2 text-text-secondary hover:bg-surface rounded-lg transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact', setIsMenuOpen)}
              className="block w-full text-left px-4 py-2 text-text-secondary hover:bg-surface rounded-lg transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact', setIsMenuOpen)}
              className="block w-full text-left px-4 py-2 bg-accent-pink hover:bg-accent-pink/90 text-white font-medium rounded-lg transition-colors"
            >
              Book a Call
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
