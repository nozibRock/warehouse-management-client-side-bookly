import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { booksData } from '../../booksdata';
import './Domestic.css'
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";


const  Domestic = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="my-14 mx-auto w-9/12">
        <Slider {...settings}>
          {booksData.map((item) => (
            <div className="border-solid border-2 border-white bg-black rounded-lg overflow-hidden h-96 text-white">
              <div>
                <img
                  className="mx-auto w-100 h-100 object-cover "
                  src={item.linkImg}
                  alt={item.title}
                />
                <h1 className="  text-xl font-bold my-3 mx-5">
                  {" "}
                  {item.title}
                </h1>
              </div>
              <div className=" my-3 mx-5">
                <h3 className="text-lg font-semibold"> {item.author} </h3>
                <p> TK. {item.price} </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Domestic;