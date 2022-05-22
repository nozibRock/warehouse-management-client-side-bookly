import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Loader from '../Shared/Loader/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('hotsalebooks.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    
    return (
      <div>
        <section className="bg-purple-500 lg:pt-[120px] pb-12 lg:pb-[90px] px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <h2>Products: {products.length} </h2>
                  <span className="font-semibold text-lg text-sky-800 mb-2 block">
                    Recently Sold Products
                  </span>
                  <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">HOT SALE! 🔥</h2>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
                {/* products.length === 0 ? (
                    <Loader></Loader>
                ) : */ (products.slice(0, 6).map(product => (
                    <Product key={product.id} product={product}></Product>
                )))
                }
            </div>
          </div>
        </section>
      </div>
    );
};

export default Products;