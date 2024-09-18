import React from 'react';
import Navbar from '../navbar_and_footer/Navbar';
import Footer from '../navbar_and_footer/Footer';


const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col">
                <Navbar transparent />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </div>
        </>


    );
};

export default Layout;