import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const {
    name,
    img,
    description,
    price,
    quantity,
    publisher,
    isbn,
    pages,
    author,
  } = product;
  useEffect(() => {
    const url = `https://warm-lowlands-49144.herokuapp.com/book/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const confirmDeliver = () => {
    Swal.fire({
      title: "Are you sure its delivered?",
      text: "Check once again!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        if (quantity < 1) {
          Swal.fire(
            "Oops!",
            "We don't have that much copies right now!",
            "error"
          );
          return;
        }
        let newQuantity = quantity - 1;
        const newProduct = { ...product, quantity: newQuantity };
        setProduct(newProduct);
        fetch(
          `https://warm-lowlands-49144.herokuapp.com/updateProduct/${productId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          }
        );
        Swal.fire("Delivered!", "Books delivered successfully", "success");
      }
    });
  };
  const handleQuantity = (event) => {
    event.preventDefault();

    const newAddedQuantity = event.target.addQuantity.value;
    if (newAddedQuantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "Hey!",
        text: "Enter a valid quantity",
        footer: "<p>Enter a number above 0</p>",
      });
      event.target.addQuantity.value = "";
    } else {
      event.preventDefault();
      const itemValue = parseInt(newAddedQuantity);
      const oldQuantity = parseInt(quantity);
      console.log(itemValue, oldQuantity);
      let newQuantity = oldQuantity + itemValue;
      const newProduct = { ...product, quantity: newQuantity };
      setProduct(newProduct);
      fetch(
        `https://warm-lowlands-49144.herokuapp.com/updateProduct/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );
      //reset form
      Swal.fire("Done!", "Quantity added successfully!", "success");
      event.target.addQuantity.value = "";
    }
  };
  return (
    <div>
      <PageTitle title="Book Detail" />
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col md:flex-row">
            <div
              className="w-full md:h-auto h-64 bg-white block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
            <div className="w-full lg:w-7/12 bg-black p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-white">{name}</h3>
              <hr className="w-1/2 my-4 mx-auto" />
              <p className="md:mx-12  text-lg text-slate-300">{description}</p>
              <hr className="w-1/2 mx-auto my-4" />
              <div className="md:w-1/2 w-full md:mx-auto">
                <p className="font-medium text-gray-200 text-lg mb-4">
                  Price : <span className="text-purple-400">TK.{price}</span>
                </p>
                <p className="font-medium text-gray-200 text-lg mb-4">
                  Sold :{" "}
                  <span className="text-orange-400">
                    {quantity <= 1 ? "Yes" : "No"}
                  </span>
                </p>
                <p className="font-medium text-gray-200 text-lg mb-4">
                  ISBN : <span className="text-purple-400">{isbn}</span>
                </p>
                <p className="font-medium text-gray-200 text-lg mb-4">
                  Publisher : <span className="text-sky-400">{publisher}</span>
                </p>
                <p className="font-medium text-gray-200 text-lg mb-4">
                  Author : <span className="text-sky-400">{author}</span>
                </p>
                <p className="font-medium text-gray-200 text-lg mb-4">
                  No of Page : <span className="text-purple-400">{pages}</span>
                </p>
                <p className="font-medium text-gray-200 text-lg">
                  Quantity : <span className="text-green-400">{quantity}</span>
                </p>

                <button
                  onClick={confirmDeliver}
                  className=" mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer ml-4 hover:text-gray-300  mt-4"
                >
                  Delivered
                </button>
                <div className="mt-4">
                  <form
                    onSubmit={handleQuantity}
                    className="flex flex-col md:flex-row"
                  >
                    <input
                      type="number"
                      placeholder="Add More Quantity"
                      name="addQuantity"
                      className="input w-full max-w-sm"
                      required
                    ></input>
                    <input
                      type="submit"
                      value="Add"
                      className="mt-4 md:mt-0 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer ml-4 hover:text-gray-300 "
                    />
                  </form>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Link
                  to="/products"
                  className="md:w-2/3 w-full mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 mt-6 border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wider "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="white"
                >
                  See All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
