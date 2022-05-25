import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import './Login.css'

const Login = () => {
    const refEmail = useRef('');
    const refPass = useRef('');
    const [state, setState] = useState(false);
    const toggleBtn = () => {
        setState(prevState => !prevState);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        const email = refEmail.current.value;
        const password = refPass.current.value;
        console.log(email, password);
    }
    return (
        <div className='bg-black'>
            <div className='flex justify-center items-center py-8 sm:px-6 lg:px-8'>
                <div className='w-full max-w-md space-y-4 p-8 bg-gray-300 rounded-2xl z-10'>
                    <div className='text-center'>
                        <h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcome back!</h2>
                        <h2 className='mt-2 text-sm text-gray-600'>Please sign in to your account</h2>
                    </div>
                    <div className='flex flex-row justify-center items-center space-x-3'>
                        <span className='w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  hover:bg-white hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                            </button>
                        </span>
                        <span className='w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-black  hover:bg-white hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                            </button>
                        </span>
                        <span className='w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-black  hover:bg-white hover:shadow-lg cursor-pointer transition ease-in duration-300'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path></svg>
                            </button>
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <span className='h-px w-16 bg-gray-400'></span>
                        <span className='text-gray-500 font-normal'>OR</span>
                        <span className='h-px w-16 bg-gray-400'></span>
                    </div>
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
                            <Link className='text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300' to={'/signup'}>Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;