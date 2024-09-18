import React, { Suspense, lazy, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/views/Homepage";


const Fallback = (
  <div className="loader-container">
    <small>Va rugam asteptati</small>
  </div>
);



const App = () => {
  return (
    <Fragment>
      <Suspense fallback={Fallback}>
        <Routes>
          {/* Aici bagi paginile faci o componenta noua Layout care contine navbar si footer -> las exemplu */}

          <Route path="*" element={<Layout><Homepage /></Layout>} />

        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
