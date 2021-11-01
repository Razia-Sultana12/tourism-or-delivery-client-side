import React from 'react';

import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Destinations from '../Destinations/Destinations';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import NotFound from '../NotFound/NotFound';
import TopDestinations from '../TopDestinations/TopDestinations';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Destinations></Destinations>
            <TopDestinations></TopDestinations>
            <Footer></Footer>
            
            
           

        </div>
    );
};

export default Home;