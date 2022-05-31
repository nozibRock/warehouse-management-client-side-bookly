import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Loader from '../Shared/Loader/Loader';
// import Loader from '../Shared/Loader/Loader';

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    
    return (
      <div>
        <section className="bg-white p-8 shadow-md shadow-[#9c9c9c] rounded lg:pt-[100px] pb-12 lg:pb-[80px] px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-sky-800 mb-2 block">
                    Recently Sold Products
                  </span>
                  <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-black mb-4">
                    HOT SALE! 🔥
                  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="flex flex-wrap -mx-4">
                {products.length === 0 ? (
                  <Loader></Loader>
                ) : (
                  products.slice(0, 6).map((product) => (
                    <div
                      className="w-full md:w-1/2 xl:w-1/3 px-3 transition-all"
                      key={product._id}
                    >
                      <div className="bg-black rounded-lg overflow-hidden mb-10">
                        <img src={product.img} className="w-full h-72 hover:scale-110 transition-all" alt="Product" />
                        <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                          <h3 className="font-bold text-white text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
                            {product.name}
                          </h3>
                          <p className="text-base text-slate-200 leading-relaxed mb-7">
                            <ReactReadMoreReadLess
                              charLimit={100}
                              readMoreText={"Read more ▼"}
                              readLessText={"Read less ▲"}
                              readMoreClassName={"react-read-more"}
                              readLessClassName={"react-read-less"}
                            >
                              {product.description}
                            </ReactReadMoreReadLess>
                          </p>
                          <hr className="w-2/3 mx-auto mb-3" />
                          <div className="flex justify-center items-center md:flex-row flex-col">
                            <div>
                              <p className="font-medium text-white text-lg mb-4">
                                Price :
                                <span className="text-green-300">
                                  Tk.{product.price}
                                </span>
                              </p>
                              <p className="font-medium text-white text-lg mb-4">
                                Author :
                                <span className="text-cyan-300">
                                  {product.author}
                                </span>
                              </p>
                              <p className="font-medium text-white text-lg mb-4 ">
                                Quantity :{" "}
                                <span className="text-yellow-300">
                                  {product.quantity}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex ">
                            <button
                              onClick={() =>
                                navigate("/product/" + product._id)
                              }
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="white"
                              className=" py-3 px-10 mx-auto lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-bold text-base bg-green-900 rounded-lg hover:bg-opacity-90"
                            >
                              Manage
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => navigate("/products")}
                  className="mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wide"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="white"
                >
                  Manage Books
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Products;