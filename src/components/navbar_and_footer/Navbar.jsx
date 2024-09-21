import React, { useState, useEffect } from "react";
import profile from "./andra.jpg";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(props);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (!props.transparent) {
      setIsScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={
        (isScrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50"
          : "absolute top-0 left-0 w-full z-50") +
        " flex flex-wrap items-center justify-between px-2 py-3 transition-all duration-300"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            <img
              src={
                isScrolled
                  ? require("./assets/logo-colored.png")
                  : require("./assets/logo-white.png")
              }
              alt="Logo"
              className="h-12"
            />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (isScrolled ? "text-gray-800" : "text-white") + " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (isScrolled
                    ? "text-gray-800 hover:text-gray-600"
                    : "lg:text-white lg:hover:text-gray-300 text-gray-800") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/Vouchers"
              >
                Vouchers
              </a>
              <a
                className={
                  (isScrolled
                    ? "text-gray-800 hover:text-gray-600"
                    : "lg:text-white lg:hover:text-gray-300 text-gray-800") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              >
                {" "}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (isScrolled
                    ? "text-gray-800 hover:text-gray-600"
                    : "lg:text-white lg:hover:text-gray-300 text-gray-800") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (isScrolled
                    ? "text-gray-800 hover:text-gray-600"
                    : "lg:text-white lg:hover:text-gray-300 text-gray-800") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (isScrolled
                    ? "text-gray-800 hover:text-gray-600"
                    : "lg:text-white lg:hover:text-gray-300 text-gray-800") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <button
                className={
                  (isScrolled
                    ? "bg-pink-500 text-white active:bg-pink-600"
                    : "bg-white text-gray-800 active:bg-gray-100") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Contribuie
              </button>
              <button>
                <a href="/profile">
                  <img src={profile} className="size-10 rounded-full" alt="" />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
