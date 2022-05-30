import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    const handleAddProduct = (data) => {
      const url = `http://localhost:5000/book/`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      Swal.fire("Done!", "The Product added Successfully!", "success");
      reset();
    };
    return (
      <div>
        <PageTitle title={"Add Products"} />
        <div className="p-5">
          <div className="container mx-auto">
            <div className="flex justify-center px-1 md:px-6 my-12">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                <div
                  className="w-full h-auto bg-black hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                  style={{
                    backgroundImage: `url(https://images.gr-assets.com/misc/1650914415-1650914415_goodreads_misc.png)`,
                  }}
                />
                <div className="w-full lg:w-7/12 bg-black p-3 md:p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pb-4 text-2xl text-yellow-50 text-center">
                    Add New Book!
                  </h3>
                  <form
                    className="md:px-8 pt-6 pb-8 mb-4 bg-white rounded"
                    onSubmit={handleSubmit(handleAddProduct, onSubmit)}
                  >
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="bookName"
                        >
                          Book Name
                        </label>
                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="bookName"
                          type="text"
                          placeholder=" Book Name"
                          {...register("name")}
                          required
                        />
                      </div>

                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="publisher"
                        >
                          Publisher
                        </label>
                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="publisher"
                          type="text"
                          placeholder="Publisher Name"
                          {...register("publisher")}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="author"
                      >
                        Book Author
                      </label>
                      <input
                        className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        placeholder="Book Author"
                        {...register("author")}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        {...register("email")}
                        required
                        readOnly
                      />
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="Isbn"
                        >
                          ISBN
                        </label>
                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="Isbn"
                          type="number"
                          placeholder="Isbn"
                          {...register("isbn")}
                        />
                      </div>
                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="Pages"
                        >
                          Pages
                        </label>
                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="Pages"
                          type="number"
                          placeholder="Pages"
                          {...register("pages", { min: 0 })}
                        />
                      </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="Price"
                        >
                          Price <sup>*</sup>
                        </label>

                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="Price"
                          type="number"
                          placeholder=" Price"
                          {...register("price", { min: 0 })}
                          required
                        />
                      </div>
                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="Quantity"
                        >
                          Quantity <sup>*</sup>
                        </label>
                        <input
                          className="w-full px-6 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="Quantity"
                          type="number"
                          placeholder="Quantity"
                          {...register("quantity", { min: 0 })}
                          required
                        />
                      </div>
                    </div>

                    <label
                      className="block mb-2 text-sm text-center font-bold text-red-400"
                      htmlFor="Price"
                    >
                      *Enter a value above 0
                    </label>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Image"
                      >
                        Image
                      </label>
                      <input
                        className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Image"
                        type="url"
                        placeholder="Image Link"
                        {...register("img")}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Description"
                      >
                        Description
                      </label>
                      <textarea
                        className="w-full px-6 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Description"
                        rows={5}
                        placeholder="Description"
                        {...register("description")}
                        required
                      />
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="mb-6 text-center">
                      <input
                        type="submit"
                        value="Add Book"
                        className="mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-green-900 border-0 hover:bg-opacity-80 focus:shadow-outline focus:outline-none active:scale-90 text-xl  cursor-pointer md:ml-4 hover:text-gray-300 md:mt-0 mt-4"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;