import React from 'react';
// import Navbar from '../Navbar/index';
// import Footer from '../Footer/index';

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col">
                <header > Navbar </header>

                <main className="flex-grow">
                    {children}
                </main>

                <footer>FOOTER</footer>
            </div>
        </>


    );
};

export default Layout;