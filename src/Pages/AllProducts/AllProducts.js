import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Product from "../../components/Product/Product";
import Loader from "../../components/Shared/Loader/Loader";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products, setProducts] = useProducts();
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
        const url = `https://warm-lowlands-49144.herokuapp.com/book/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
        Swal.fire(
          "Deleted!",
          "The book deleted successfully from the database",
          "success"
        );
      }
    });
  };
  return (
    <div className="py-4">
      <PageTitle title="Manage Books" />

      <div className="flex items-center justify-center">
        <Link
          to="/addBook"
          className="mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-black border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wider"
          data-mdb-ripple="true"
          data-mdb-ripple-color="white"
        >
          Add New Books
        </Link>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto my-6 max-w-[510px]">
            <h2 className="text-5xl font-medium text-center text-gray-400">
              All Books
            </h2>
            <p className="text-bae text-slate-400">
              All Books in the warehouse is listed here
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {products.length === 0 ? (
            <Loader></Loader>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                data={product}
                button={handleDelete}
              ></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
