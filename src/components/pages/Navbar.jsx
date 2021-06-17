import React, { useState } from "react";
import astronaut from "../../assets/icons/astronaut.svg";
import description from "../../assets/icons/description_black.svg";
import menu from "../../assets/icons/menu_black_24dp.svg";
import summarize from "../../assets/icons/summarize_black.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {/* Navbar goes here */}
      <nav className='bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex justify-between'>
            <div className='flex space-x-32 '>
              {/* Logo*/}
              <div className=''>
                <a href='#cool' className='flex items-center px-0 lg:px-4 '>
                  <img src={astronaut} alt='astronaut' className='h-10 w-10' />
                  <span className='italic text-2xl text-black-600 py-6 font-bold'>
                    Spacer
                  </span>
                </a>
              </div>
              {/* Primary */}
              <div className='hidden lg:flex items-center'>
                <a
                  href='#resume'
                  className='py-6 px-2 text-gray-600 hover:text-blue-600'
                >
                  Resume
                </a>
                <a
                  href='#cv'
                  className='py-6 px-4 text-gray-600 hover:text-blue-600'
                >
                  CV
                </a>
              </div>
            </div>
            {/* Secondary */}
            <div className='hidden lg:flex items-center space-x-2'>
              <a
                href='#login'
                className='px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 rounded shadow transition duration-300'
              >
                Login
              </a>
              <a
                href='#register'
                className='px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-700 hover:text-yellow-800 rounded shadow transition duration-300'
              >
                Register
              </a>
            </div>
            <div className='flex items-center lg:hidden'>
              <button onClick={handleOpen}>
                <img src={menu} alt='menu' />
                {/* <i class='fas fa-bars'></i> */}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='lg:hidden bg-gray-50 group '>
          <div
            className={
              isOpen
                ? "flex flex-col space-y-4 px-8 py-4 border-t border-b border-gray-100 "
                : "hidden"
            }
          >
            <a
              href='#resume'
              className='flex flex-row justify-between text-md hover:bg-text-200 bg-white py-4 rounded-lg shadow-md'
            >
              <p className='ml-6'>Resume</p>
              <span className='mr-6'>
                <img src={description} alt='description' />
              </span>
            </a>
            <a
              href='#cv'
              className='flex flex-row justify-between text-md hover:bg-text-200 bg-white py-4 rounded-lg shadow-md'
            >
              <p className='ml-6'>CV</p>
              <span className='mr-6'>
                <img src={summarize} alt='description' />
              </span>
            </a>
          </div>
        </div>
      </nav>
      {/* <div className='flex flex-col items-center py-8'>
        <p className=' mx-auto text-4xl'>Let's Explore</p>
        <p className='mt-6'>Content</p>
      </div> */}
    </React.Fragment>
  );
}
