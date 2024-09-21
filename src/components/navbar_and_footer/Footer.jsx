import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4 text-center mb-4">
            <h4 className="text-3xl font-semibold">
              Ne puteți găsi și pe urmatoarele platforme!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Facem tot posibilul sa raspundem cat de repede se poate.
            </h5>
            <div className="mt-6 flex space-x-8 flex justify-center">
              <a href='https://wa.me'>
                <button className="text-green-400 scale-150 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:outline-dashed">
                  <i className="fab fa-whatsapp"></i>
                </button>
              </a>
              <a href='https://www.facebook.com'>
                <button className="text-blue-600 scale-150 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:outline-dashed">
                  <i className="fab fa-facebook-square"></i>
                </button>
              </a>
              <a href='https://www.instagram.com'>
                <button className="text-pink-400  scale-150 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:outline-dashed">
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
              <a href='https://g.co/kgs/hB8oxHy'>
                <button className="text-white  scale-150 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:outline-dashed">
                  <i className="fab fa-google"></i>
                </button>
              </a>
            </div>
          </div>

        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}EduTeach. Toate drepturile sunt rezervate.{" "}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
