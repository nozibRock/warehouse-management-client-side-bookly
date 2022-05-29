import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner/2286.jpg';
import useProducts from '../../hooks/useProducts';

const Banner = () => {
  const [] = useProducts([]);
  const navigate = useNavigate();
    return (
      <div className="bg-[#0C0C0C] relative  overflow-hidden -z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:max-w-xl lg:w-full lg:py-28 xl:py-32">
            <h1 className="text-[#DCCA87] font-bold capitalize sm:leading-[70px] md:leading-[87px] leading-[117px] 2xl:leading-[210px] sm:text-5xl md:text-7xl text-[90px] 2xl:text-[180px] ">
              Discover your next great read
            </h1>
            <p className="text-white font-normal capitalize leading-7 2xl:leading-[50px] sm:text-xs md:text-sm text-base 2xl:text-3xl my-8 mx-0">
              Fancy something unusual and unpredictable? Funny or sexy? No
              problem. Use our unique mood and emotion search to find great
              books with exactly the flavour you've asked for.
            </p>
            <button onClick={() => navigate('/products')} className="py-2 px-6 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-bold text-base bg-green-900 rounded-sm hover:bg-opacity-90 mx-2">
              Choose: Mood & Emotion Search
            </button>
          </div>
          <div className="lg:absolute lg:inset-y-16 lg:right-16 lg:w-1/2">
            <img src={banner} alt="banner_image" />
          </div>
        </div>
      </div>
    );
};

export default Banner;