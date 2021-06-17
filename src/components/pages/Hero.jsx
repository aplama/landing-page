import React from "react";

const Hero = () => {
  return (
    <div>
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        {/* <div className='sm:text-center lg:text-left'> */}
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Let's get you this</span>{" "}
            <span className='block text-blue-600 xl:inline'>dream job!</span>
          </h1>
          <p className='mx-auto mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl'>
            With our <span className='text-blue-600'>free</span> resume builder,
            employers will not be able miss your candidacy.
          </p>
          <div className='mt-5 sm:mt-8 sm:flex justify-center '>
            <div className='rounded-md shadow'>
              <a
                href='#/'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
              >
                Get started
              </a>
            </div>
            {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
              <a
                href='#/'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
              >
                Live demo
              </a>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
