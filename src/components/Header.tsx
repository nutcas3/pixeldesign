import { useState, useEffect } from 'react'
import Logo from './Logo'

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
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
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
    <header className="w-full bg-[#F8F8F8] py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#" className="block">
            <Logo size="medium" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button md:hidden p-2 rounded-lg text-white"
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

        {/* Navigation Section 1 */}
        <div className="hidden md:block">
          <div className="bg-[#A5D6A7] rounded-full py-2 px-4 flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-full">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-text-secondary hover:text-primary transition-colors focus:outline-none"
                >
                  Projects
                </button>
              </div>
              <div className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-full">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-text-secondary hover:text-primary transition-colors focus:outline-none"
                >
                  Projects
                </button>
              </div>
              <div className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-full">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-text-secondary hover:text-primary transition-colors focus:outline-none"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section 2 */}
        <div className="hidden md:block">
          <div className="bg-[#A5D6A7] rounded-full py-2 px-4 flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center px-4 py-2 rounded-full cursor-pointer text-text-secondary hover:text-primary transition-colors focus:outline-none"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-gray-600"
              aria-label="Close menu"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="p-4 space-y-4" aria-label="Mobile Navigation">
            <div className="border-b pb-2">
              <div className="font-medium mb-2">Main Menu</div>
              <div className="pl-4 py-2 text-gray-700">Workshops &amp; Courses</div>
              <div className="pl-4 py-2 text-gray-700">Private parties &amp; events</div>
              <div className="pl-4 py-2 text-gray-700">Memberships &amp; Vouchers</div>
            </div>

            <div className="border-b pb-2">
              <div className="font-medium mb-2">Locations</div>
              <div className="pl-4 py-2 text-gray-700">PIE Studio Zurich</div>
              <div className="pl-4 py-2 text-gray-700">PIE Studio Basel</div>
            </div>

            <div>
              <div className="pl-4 py-2 text-gray-700">FAQ</div>
              <div className="pl-4 py-2 text-gray-700">Language: EN</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
