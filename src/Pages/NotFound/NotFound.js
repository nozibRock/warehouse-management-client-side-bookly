import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/404.gif'

const NotFound = () => {
    return (
      <div className='bg-black py-8'>
        <img className="mx-auto mt-4" src={notFound} alt="" />
        <h5 className="md:text-xl text-2xl text-center text-white mb-12">
          ...maybe the page you're looking for is not found or never existed.
        </h5>
        <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className=" inline-flex items-center justify-center h-16 px-8 font-medium tracking-wide text-white transition duration-200 rounded-2xl md:px-24 shadow-md bg-green-700 hover:bg-green-600 focus:shadow-outline active:scale-90 focus:outline-none"
        >Take me back!</Link>
      </div>
      </div>
    );
};

export default NotFound;