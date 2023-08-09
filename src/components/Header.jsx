import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='max-w-[1240px] mx-auto bg-gray-100 py-[20px] p-10 flex justify-between rounded'>
      {/* logo section  */}
      <Link to='/' className='flex items-center gap-2'>
        <BoltIcon className='w-6 h-6 text-blue-500' />
        <span className='font-bold text-xl tracking-wide text-gray-800'>bookPage</span>
      </Link>
      {/* nav itemes section */}
      <div className='font-bold hidden tracking-wide space-x-5 text-gray-600 md:flex'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to='/books'
          className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
        >
          Books
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
        >
          About us
        </NavLink>
      </div>
      {/* Mobile navber section */}
      <div className='md:hidden'>
        {/* DropDown Button  */}
        <button
          onClick={() => setMenuOpen(true)}
        >
          <Bars3BottomRightIcon className='w-5 text-gray-600' />
        </button>
        {
          menuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* logo and button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>

                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>

              </div>
            </div>
          )
        }

      </div>
    </div>
  );
};

export default Header;