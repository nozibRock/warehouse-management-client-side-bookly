import React from 'react';
import './Banner.css';
import banner from '../../assets/banner/2286.jpg';

const Banner = () => {
    return (
      <div className="bg-[#0C0C0C] flex justify-between items-center min-h-[100vh] lg:py-16 lg:px-24 md:p-16 sm:py-16 sm:px-8">
        <div className="flex-1 w-full flex justify-start items-start flex-col">
          <h1 className="text-[#DCCA87] font-bold capitalize sm:leading-[70px] md:leading-[87px] leading-[117px] 2xl:leading-[210px] sm:text-5xl md:text-7xl text-[90px] 2xl:text-[180px] ">
            Discover your next great read
          </h1>
          <p className='text-white font-normal capitalize leading-7 2xl:leading-[50px] sm:text-xs md:text-sm text-base 2xl:text-3xl my-8 mx-0'>Fancy something unusual and unpredictable? Funny or sexy? No problem. Use our unique mood and  emotion search to find great books with exactly the flavour you've asked for.
          </p>
          <button className='py-2 px-6 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-green-900 rounded-sm hover:bg-opacity-90 mx-2'>Choose: Mood & Emotion Search</button>
        </div>
        <div className='flex-1 w-full flex justify-center items-center ml-8'>
            <img src={banner} alt="banner_image" />
        </div>
      </div>
    );
};

export default Banner;