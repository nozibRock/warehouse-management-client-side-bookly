import React from 'react';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <PageTitle title='About' />
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-6 gap-8'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full  my-8 flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 '>
                    <div className='sm:text-right text-4xl font-bold col-start-1 animate__animated animate__fadeInLeft col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
                        <p>Hi. I'm Nozib, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                        <div className='h-full w-6 flex items-center justify-center'>
                            <div className='h-full w-1 bg-gray-100 pointer-events-none'></div>
                        </div>
                        <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping'></div>
                    </div>
                    <div className='animate__animated animate__fadeInRight col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
                        <p>I am passionate about building excellent software that improves
                        the lives of those around me. I specialize in creating software
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if you had
                        a software expert available at your fingertips?</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;