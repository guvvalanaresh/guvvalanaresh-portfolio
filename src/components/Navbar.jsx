import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around items-center p-4'>
        <h1 className='text-2xl suse-mono'>naresh.</h1>
        <nav>
          <ul className='flex gap-6 montserrat items-center'>
            {['Home', 'Skills', 'Projects', 'About Me', 'Contact Me'].map((item, index) => (
              <li key={index} className='relative text-sm font-medium cursor-pointer px-1 py-1 group'>
                <a href="#" className='relative px-1 py-1 hover:bg-gray-100'>
                  {item}
                  <span className='absolute left-1/2 -translate-x-1/2 bottom-[-3px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0'></span>

                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
