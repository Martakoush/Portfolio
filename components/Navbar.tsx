'use client'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className='top-0 left-0 fixed right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353f]'>
            <div className='flex flex-wrap items-center justify-start mx-auto py-2 px-4'>
                <div className='block md:hidden mobile-menu'>
                {
                  !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white text-slate-200 hover:border-white'>
                      <Bars3Icon className='h-5 w-5'></Bars3Icon>
                    </button>
                  ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white text-slate-200 hover:border-white'>
                      <XMarkIcon className='w-5 h-5'></XMarkIcon>
                    </button>
                  )
                }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex lg:p-4 md:p-0 sm:flex-row md:Space-x-8 mt-0'>
                        {navLinks.map((link,index) =>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
              navbarOpen ? <MenuOverlay links={navLinks}></MenuOverlay> : null
            }
        </nav>
    )
}

export default Navbar
