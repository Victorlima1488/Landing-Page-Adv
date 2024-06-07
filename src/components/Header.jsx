import { useState, useEffect } from 'react'

import { Nav } from './Nav'
import { NavMobile } from './NavMobile'

// import imgLogo from '../assets/img/imgLogo.png'
import imgLogo2 from '../assets/img/imgLogo2.png'
import imgLogo3 from '../assets/img/imgLogo3.png'

export function Header() {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBg(true)
      } else {
        setBg(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        bg ? 'shadow-md p-3' : ''
      } p-3 lg:px-0 w-full fixed z-10 transition-all duration-300`}
      style={{ backgroundColor: bg ? '#611718' : 'transparent' }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#!">
          <img
            src={bg ? imgLogo2 : imgLogo3}
            alt="Logo"
            className="w-40 h-20"
          />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  )
}
