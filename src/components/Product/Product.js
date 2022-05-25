import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
import ReactReadMoreReadLess from "react-read-more-read-less";

const Product = ({product}) => {
    const { id, name, description, author, publisher, quantity, price,  img} = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
      <div className="w-full md:w-1/2 xl:w-1/3 px-3  transition-all">
        <div className="bg-black rounded-lg overflow-hidden mb-10">
          <img
            src={img}
            alt={name}
            className="w-64 max-h-96 h-64 mx-auto hover:scale-110 transition-all object-cover"
          />
          <div className="p-8 sm:p-9 md:p-7 xl:p-9">
            <h2 className="font-semibold text-white text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
              {name}
            </h2>
            <p className="text-base text-slate-200 leading-relaxed mb-7">
              <ReactReadMoreReadLess
                charLimit={100}
                ellipsis={"..."}
                readMoreClassName={"react-read-more"}
                readLessClassName={"react-read-less"}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {description}
              </ReactReadMoreReadLess>
            </p>

            <hr className="w-2/3 mx-auto mb-3" />
            <div className="flex justify-center items-center md:flex-row flex-col">
              <div className="w-full md:pl:16">
                <h3 className="font-medium text-white text-lg mb-4">
                  Author: {author}{" "}
                </h3>
                <p className="font-medium text-white text-lg mb-4">
                  {" "}
                  Price:
                  <span className="text-green-400"> TK.{price} </span>
                </p>
                <p className="font-medium text-white text-lg mb-4">
                  {" "}
                  Publisher:
                  <span className="text-cyan-400"> {publisher} </span>
                </p>
                <p className="font-medium text-white text-lg mb-4">
                  {" "}
                  Quantity:
                  <span className="text-yellow-400"> {quantity} </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <button
                className="py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-semibold text-base bg-green-900 rounded-lg hover:bg-opacity-90 mx-2"
                onClick={() => navigateToProductDetail(id)}
              >
                Manage Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;