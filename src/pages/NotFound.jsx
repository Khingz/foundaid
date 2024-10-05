import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mb-20'>
      <Helmet>
          <title>Foundaid America - 404</title>
          <meta name='description' content='This page does not exist on foundaid' />
      </Helmet>
      <div className="bg-[rgb(51,51,51)] pt-24 px-2 pb-2"></div>
      <div className='min-h-96 flex justify-center items-center flex-col text-center px-2'>
        <h1 className='text-3xl md:text-5xl font-bold text-customBlue mb-3'>404 - Page Not Found</h1>
        <p className='text-xl font-extralight mb-2'>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className='border border-customBlue px-4 py-2 hover:bg-transparent hover:text-[#333] bg-customBlue text-white transition-all duration-500 ease-in-out'>Back to homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;