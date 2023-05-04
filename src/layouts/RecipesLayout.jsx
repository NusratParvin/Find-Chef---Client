import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import Services from '../pages/HomeExtra/Services';
import BookingProcess from '../pages/HomeExtra/BookingProcess';

const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <Services></Services>
            <BookingProcess></BookingProcess>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;