import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import MyItem from "./MyItem/MyItem";
import Swal from "sweetalert2";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    async function getProducts() {
      const url = `https://warm-lowlands-49144.herokuapp.com/productlist?email=${user?.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          localStorage.removeItem("accessToken");
          console.log("Error :()");
        }
      }
    }
    getProducts();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeah",
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
    <div>
      <section className="antialiased bg-gray-900 text-white h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-9/12 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Your Added Books</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table table-auto table-compact w-full">
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Author</th>
                      <th>Publisher</th>
                      <th>ISBN</th>
                      <th>Pages</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <MyItem
                        key={product._id}
                        data={product}
                        button={handleDelete}
                      />
                    ))}
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

export default MyItems;
