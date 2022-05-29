import React from 'react';
import Banner from '../../components/Banner/Banner';
import Domestic from '../../components/Domestic/Domestic';
import Products from '../../components/Products/Products';
import Services from '../../components/Sevices/Services';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';

const Home = () => {
    return (
      <div>
        <PageTitle title='Home' />
        <Banner></Banner>
        <Products></Products>
        <Domestic></Domestic>
        <Services></Services>
      </div>
    );
};

export default Home;