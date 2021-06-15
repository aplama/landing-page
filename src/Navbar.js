import React from "react";
import astronaut from "./assets/icons/astronaut.svg";

export default function Navbar() {
  return (
    // Navbar goes here
    <nav className='bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between'>
          <div className='flex space-x-32 '>
            {/* Logo*/}
            <div className=''>
              <a href='#cool' className='flex items-center px-4 '>
                <img
                  src={astronaut}
                  alt='astronaut'
                  className='h-10 w-10 mr-2'
                />
                <span className='italic text-black-600 py-6 font-bold'>
                  Spacer
                </span>
              </a>
            </div>
            {/* Primary */}
            <div className='flex items-center '>
              <a
                href='#resume'
                className='py-6 px-2 text-gray-600 hover:text-gray-900'
              >
                Resume
              </a>
              <a
                href='#cv'
                className='py-6 px-4 text-gray-600 hover:text-gray-900'
              >
                CV
              </a>
            </div>
          </div>
          {/* Secondary */}
          <div className='flex items-center space-x-2'>
            <a
              href='#login'
              className='px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 rounded shadow'
            >
              Login
            </a>
            <a
              href='#register'
              className='px-4 py-2 bg-red-200 hover:bg-red-300 text-red-700 hover:text-red-800 rounded shadow'
            >
              Register
            </a>
          </div>
        </div>
      </div>
      {/* Mobile */}
    </nav>
  );
}
