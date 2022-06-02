import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import Loader from "../../components/Shared/Loader/Loader";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [state, setState] = useState(false);
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/signIn";
  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };
  const navigateLogin = () => {
    navigate("/signIn");
  };
  if (token) {
    navigate(from, { replace: true });
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password.length < 6) {
      toast.warning("Passwords needs at least 6 characters");
      return;
    }
    if (error || updateError) {
      toast.error("ERROR : ", error?.code || updateError?.code);
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("Verification email Sent!");
    toast.info("Go check your Email and verify your email");
    // navigate(from, { replace: true });
  };
  return (
    <div className="bg-black">
      <PageTitle title="Signup"></PageTitle>
      <div className="flex justify-center items-center py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4 p-8 bg-gray-300 rounded-2xl z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign up a account
            </p>
          </div>

          <SocialLogin />

          <form onSubmit={handleRegister} action="" className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label
                htmlFor="name"
                className="text-sm font-bold text-gray-700 tracking-wide"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mt-8 content-center relative">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-700 tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="mail@gmail.com"
                required
              />
            </div>
            <div className="mt-8 content-center relative">
              <label
                htmlFor="password"
                className="text-sm font-bold text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
                type={state ? "text" : "password"}
                name="password"
                id="password"
                className="w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
              <p
                className="absolute text-xl top-8 right-3 cursor-pointer"
                onClick={toggleBtn}
              >
                {state ? <AiFillEyeInvisible /> : <AiFillEye />}
              </p>
            </div>
            <div className="mt-8 content-center relative">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-700 tracking-wide"
              >
                Confirm Password
              </label>
              <input
                type={state ? "text" : "password"}
                name=""
                id=""
                className="w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
              <p
                className="absolute text-xl top-8 right-3 cursor-pointer"
                onClick={toggleBtn}
              >
                {state ? <AiFillEyeInvisible /> : <AiFillEye />}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  onClick={() => setAgree(!agree)}
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                />
                {/* <label className={agree ? 'ml-2 block text-sm text-cyan-900' : 'ml-2 block text-sm text-red-700'} htmlFor="remember_me" >Agreed to Terms and Services</label> */}
                <label
                  className={`ml-2 block text-sm ${
                    agree ? "text-cyan-900" : "text-red-700"
                  }`}
                  htmlFor="remember_me"
                >
                  Agreed to Terms and Services
                </label>
              </div>
            </div>
            {loading || updating ? <Loader></Loader> : ""}
            <div>
              <button
                disabled={!agree}
                type="submit"
                className="w-full flex justify-center bg-green-600 text-gray-100 p-4  rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-green-700 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Already have an account?</span>
              <Link
                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                to={"/signIn"}
                onClick={navigateLogin}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
