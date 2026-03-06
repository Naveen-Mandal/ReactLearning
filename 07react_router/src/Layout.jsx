import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>  
            {/* In app at every page header and footer is same on all links but inside header and footer content changes so where we pass <Outlet/> we can change content. */}
            <Footer/>  
        </>
    )
}

export default Layout;