import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg-black'>
            <div className='flex justify-center items-center py-8 sm:px-6 lg:px-8'>
                <div className='w-full max-w-md space-y-4 p-8 bg-gray-300 rounded-2xl z-10'>
                    <div className='text-center'>
                        <h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcome!</h2>
                        <p className='mt-2 text-sm text-gray-600'>Please sign up a account</p>
                    </div>
                    <div className='flex justify-center items-center space-x-2'>
                        <span className='h-px w-16 bg-gray-400'></span>
                        <span className='text-gray-500 font-normal'>OR</span>
                        <span className='h-px w-16 bg-gray-400'></span>
                    </div>
                    <form action="" className='mt-8 space-y-6'>
                        <input type="hidden" name='remember' value='true' />
                        <div className='relative'>
                            <label htmlFor="" className='text-sm font-bold text-gray-700 tracking-wide'>Email</label>
                            <input type="email" name="" id="" className='w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='mail@gmail.com' required />
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label htmlFor="" className='text-sm font-bold text-gray-700 tracking-wide'>Password</label>
                            <input type="password" name="" id="" className='w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='Enter your password' required />
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label htmlFor="" className='text-sm font-bold text-gray-700 tracking-wide'>Confirm Password</label>
                            <input type="password" name="" id="" className='w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='Enter your password' required />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input type="checkbox" id='remember_me' name='remember_me'className='h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded' />
                                <label htmlFor="" for='remember_me' className='ml-2 block text-sm text-gray-900'>Agreed to Terms and Services</label>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full flex justify-center bg-green-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-700 shadow-lg cursor-pointer transition ease-in duration-300'>Sign up</button>
                        </div>
                        <p className='flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500'>
                            <span>Already have an account?</span>
                            <Link className='text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300' to={'/login'}>Login</Link>
                        </p>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Signup;