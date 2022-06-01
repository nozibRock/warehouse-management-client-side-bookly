import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import Swal from "sweetalert2";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    async function getProducts() {
      const url = `http://localhost:5000/productlist?email=${user.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          localStorage.removeItem("token");
          console.log("Error :(");
        }
      }
    }
    getProducts();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      text: "Please don't delete any product if you are here just for visiting. It will also delete from the database. Consider creating you own product and then delete 🥶",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/book/${id}`;
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
          "The product delted successfully from the database",
          "success"
        );
      }
    });

    return (
      <div>
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
          <div className="flex flex-col justify-center h-full">
            <div className="w-9/12 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className='className="px-5 py-4 border-b border-gray-100"'>
                <h2 className="font-bold text-gray-800">Your Added Books</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>
                          <label type="checkbox" className="checkbox" />
                        </th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>ISBN</th>
                        <th>No of Page</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <label type="checkbox" className="checkbox" />
                        </th>
                        <td>{products.name}</td>
                        <td>{products.author}</td>
                        <td>{products.publisher}</td>
                        <td>{products.isbn}</td>
                        <td>{products.pages}</td>
                        <td>{products.price}</td>
                        <td>{products.quantity}</td>
                        <td>
                          <button onClick={() => handleDelete(id)} className=" py-3 px-10 w-full lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-bold text-base bg-[#c9184a] rounded-lg hover:bg-opacity-90 mx-2"
                          >Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
};
export default MyItems;
