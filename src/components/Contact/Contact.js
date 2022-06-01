import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Contact = () => {
  const [user] = useAuthState(auth);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.warn("Please Sign in first!");
      return;
    }
    toast.success("Your email sent!");
  };
  return (
    <div>
      <section className="bg-black py-20 lg:py-[120px] overflow-hidden relative px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:justify-evenly -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base text-sky-400 font-bold">
                  Contact Us
                </span>
                <h2
                  className="
                  text-white
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                >
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base text-slate-200 leading-relaxed mb-9">
                  Got Lost? Facing any issues on the website? We have a
                  dedicated support team that is always ready to help you. We
                  are always there for you.
                </p>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Our Location
                    </h4>
                    <p className="text-base text-slate-300">
                      Narayanganj, Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Phone Number
                    </h4>
                    <p className="text-base text-slate-300">
                      (+88) 01922438860
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Email Address
                    </h4>
                    <p className="text-base text-slate-300">
                      nozibuddowla@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-gray-200 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="white"
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 py-2 px-6 lg:px-8 xl:px-10 text-center text-slate-100 font-bold text-base bg-green-900 rounded-sm hover:bg-opacity-90 mx-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
