import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import Loader from '../Shared/Loader/Loader';
// import Loader from '../Shared/Loader/Loader';

const Products = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `http://localhost:5000/book/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
            });
          Swal.fire(
            "Deleted!",
            "The product deleted successfully from the database",
            "success"
          );
        }
      });
    };
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
                  <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-black mb-4">HOT SALE! 🔥</h2>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
                {products.length === 0 ? (<Loader></Loader>) : (products.slice(0, 6).map(product => (
                    <Product key={product._id} data={product} button={handleDelete} ></Product>
                )))
                }
            </div>
            <div className='flex items-center justify-center'>
                <button onClick={() => navigate('/products')}className='mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wide'>Manage Books</button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Products;