import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const refEmail = useRef('');
    const refPass = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [state, setState] = useState(false);
    const toggleBtn = () => {
        setState(prevState => !prevState);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
      toast.error(`ERROR : ${error}`);
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = refEmail.current.value;
        const password = refPass.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = (event) => {
      navigate("/register");
    };
    return (
        <div className='bg-black'>
            <div className='flex justify-center items-center py-8 sm:px-6 lg:px-8'>
                <div className='w-full max-w-md space-y-4 p-8 bg-gray-300 rounded-2xl z-10'>
                    <div className='text-center'>
                        <h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcome back!</h2>
                        <h2 className='mt-2 text-sm text-gray-600'>Please sign in to your account</h2>
                    </div>

                    <SocialLogin></SocialLogin>

                    <form onSubmit={handleSubmit} action="" className='mt-8 space-y-6'>
                        <input type="hidden" name='remember' value='true' />
                        <div className='relative'>
                            <label className='text-sm font-bold text-gray-700 tracking-wide'>Email</label>
                            <input ref={refEmail} type="email" name="" id="" className='w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='mail@gmail.com' required />
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label className='text-sm font-bold text-gray-700 tracking-wide'>Password</label>
                            <input ref={refPass} type={state ? "text" : "password"} className='w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='Enter your password' required />
                            <button className='absolute text-xl top-8 right-3 cursor-pointer' onClick={toggleBtn}>{state ? <AiFillEyeInvisible /> : <AiFillEye />}</button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input type="checkbox" id='remember_me' name='remember_me'className='h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded' />
                                <label for='remember_me' className='ml-2 block text-sm text-gray-900'>Remember me</label>
                            </div>
                            <div className='text-sm'>
                                <button className='font-medium text-indigo-500 hover:text-red-500'>Forgot your password?</button>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full flex justify-center bg-green-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-700 shadow-lg cursor-pointer transition ease-in duration-300'>Sign in</button>
                        </div>
                        <p className='flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500'>
                            <span>Don't have an account?</span>
                            <Link className='text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300' to={'/signup'} onClick={navigateRegister}>Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;