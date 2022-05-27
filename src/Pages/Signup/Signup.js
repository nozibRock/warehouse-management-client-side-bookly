import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';

const Signup = () => {
    const [state, setState] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const toggleBtn = () => {
      setState(prevState => !prevState);
    };
    const navigateLogin = () => {
        navigate('/login')
    }
    if(user) {
        navigate('/');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate(from, { replace: true });
    }
    return (
        <div className='bg-black'>
            <div className='flex justify-center items-center py-8 sm:px-6 lg:px-8'>
                <div className='w-full max-w-md space-y-4 p-8 bg-gray-300 rounded-2xl z-10'>
                    <div className='text-center'>
                        <h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcome!</h2>
                        <p className='mt-2 text-sm text-gray-600'>Please sign up a account</p>
                    </div>

                    <SocialLogin />
                    
                    <form onSubmit={handleRegister} action="" className='mt-8 space-y-6'>
                        <input type="hidden" name='remember' value='true' />
                        <div className='relative'>
                            <label htmlFor="name" className='text-sm font-bold text-gray-700 tracking-wide'>Your Name</label>
                            <input type="text" name='name' placeholder='Your Name' className='w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' />
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label htmlFor="" className='text-sm font-bold text-gray-700 tracking-wide'>Email</label>
                            <input type="email" name="email" id="" className='w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='mail@gmail.com' required />
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label htmlFor="password" className='text-sm font-bold text-gray-700 tracking-wide'>Password</label>
                            <input type={state ? "text" : "password"} name="password" id="password" className='w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='Enter your password' required />
                            <button className='absolute text-xl top-8 right-3 cursor-pointer' onClick={toggleBtn}>{state ? <AiFillEyeInvisible /> : <AiFillEye />}</button>
                        </div>
                        <div className='mt-8 content-center relative'>
                            <label htmlFor="" className='text-sm font-bold text-gray-700 tracking-wide'>Confirm Password</label>
                            <input type={state ? "text" : "password"}name="" id="" className='w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500' placeholder='Enter your password' required />
                            <button className='absolute text-xl top-8 right-3 cursor-pointer' onClick={toggleBtn}>{state ? <AiFillEyeInvisible /> : <AiFillEye />}</button>
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
                            <Link className='text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300' to={'/login'} onClick={navigateLogin}>Login</Link>
                        </p>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Signup;