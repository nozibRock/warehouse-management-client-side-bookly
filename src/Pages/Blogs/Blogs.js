import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="bg-[#0a192f]">
      <PageTitle title="Blogs" />
      <h1 className="text-center text-4xl py-6 font-bold text-gray-300">
        QNA Section
      </h1>
      <hr className="xl:w-1/5 md:w-1/3 sm:w-1/2 mx-auto border-b-4 border-pink-600" />
      <div className="my-8 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__backInLeft">
            <Link to="#">
              <img
                className="rounded-t-lg"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--OoV4BYAd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kxjkl4wi1d0hioh7fooa.png"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Differences between Javascript and NodeJs
                  <div className="tags flex justify-center items-center my-4">
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      JS
                    </span>
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      NodeJS
                    </span>
                  </div>
                </h5>
              </Link>
              <p>
                ☘ JavaScript is a client-side development language that runs
                inside web browsers as part of the documents that are loaded by
                the browser. It determines how the pages behave. It offers the
                semantic structure, whereas CSS provides the look and feel.
              </p>
              <hr className="my-6 border-gray-300" />
              <p>
                ☘ NodeJs is an open source, cross-platform environment that
                allows you to create server-side applications and tools using
                JavaScript.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__backInDown">
            <Link to="#">
              <img
                className="rounded-t-lg"
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Difference between SQL and NoSQL
                  <div className="tags flex justify-center items-center my-4">
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      SQL
                    </span>
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      NoSQL
                    </span>
                  </div>
                </h5>
              </Link>
              <p>
                ☘ Structured Query Language or SQL is a standard Database
                language which is used to create, maintain and retrieve the data
                from relational databases like MySQL, Oracle, SQL Server,
                PostGre, etc.
              </p>

              <hr className="my-6 border-gray-300" />
              <p>
                ☘ A NoSQL originally referring to non SQL or non relational is a
                database that provides a mechanism for storage and retrieval of
                data.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__backInRight">
            <Link to="#">
              <img
                className="rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBBMq4Ch8po6qnByFNOb8UihcrQ-I71wvqMys3jZsLv4d4LRd97ByGWwug46lO9QRurI&usqp=CAU"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  What is the purpose of JWT and how does it work?
                  <div className="tags flex justify-center items-center my-4">
                    <span className="px-4 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-2">
                      JWT
                    </span>
                  </div>
                </h5>
              </Link>
              <p>
                ☘ JSON Web Token (JWT) is a small and self-contained technique
                of securely sending information as a JSON object between two
                parties. Because it is digitally signed, this information can be
                checked and trusted. A secret or a public/private key can be
                used to sign JWTs.
              </p>

              <hr className="my-6 border-gray-300" />
              <p>
                ☘ The most popular application of JWT is authorization. Each
                subsequent request will include the JWT once the user has logged
                in, allowing the user to access routes, services, and resources
                that are permitted with that token.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
