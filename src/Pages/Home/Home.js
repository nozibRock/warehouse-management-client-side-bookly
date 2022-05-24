import React from 'react';
import Domestic from '../../components/Domestic/Domestic';
import Products from '../../components/Products/Products';
import Services from '../../components/Sevices/Services';

const Home = () => {
    return (
        <div>
            <Products></Products>
            <Domestic></Domestic>
            <Services></Services>
        </div>
    );
};

export default Home;