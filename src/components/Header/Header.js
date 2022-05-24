import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2 className='text-4xl'>Save me from myself</h2>
            <p>By give me death.</p> */}
            <Banner></Banner>
        </div>
    );
};

export default Header;