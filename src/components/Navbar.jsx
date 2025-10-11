import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // lightweight icon library
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [ 
      { name: 'Home', href: '#home' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'About Me', href: '#about' },
      { name: 'Contact Me', href: '#contact' }
  ]

  return (
    <header className="w-full shadow-sm sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <a href="./HeroSection.jsx"><img className='w-[90px] h-[30px]' src="/naresh.png" alt="" /></a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 montserrat items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative text-sm font-medium cursor-pointer group">
                <a href={item.href} className="relative px-1 py-1 hover:bg-gray-100">
                  {item.name}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-3px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-3 montserrat">
            {navItems.map((item, index) => (
              <li key={index} className="relative text-base font-medium cursor-pointer group">
                <a href={item.href} 
                   className="relative px-1 py-1 hover:bg-gray-100"
                   onClick={() => setIsOpen(false)} // closes menu after click 
                >
                  {item.name}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
