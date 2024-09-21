import React from "react";


import backgroundImage from '../assets/img/copii-defavorizati.jpg'
import DonateButton from "./DonateButton";
import farfuriiImage from '../assets/img/tablouri.png'
import tablouImage from '../assets/img/img.y8lJ8Bjod3.jpg'

import teachImage from '../assets/img/Teach.png'
import Navbar from "../../navbar_and_footer/Navbar";
import Footer from "../../navbar_and_footer/Footer";


export default function Homepage() {
  return (
    <>
      <main>
        <Navbar transparent ></Navbar>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "100vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center justify-end">
              <div className="w-full lg:w-6/12 px-4 text-right">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    E nevoie de un sat întreg pentru a crește un copil.
                  </h1>

                  <p className="mt-4 text-lg text-gray-300" style={{ marginTop: '10px', paddingTop: '20px' }}>
                    <DonateButton></DonateButton>
                  </p>
                </div>
              </div>
            </div>
          </div>




          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
                className="text-white fill-current"
                points="2560 0 2560 110 0 100"
                stroke="none"

              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 -mt-0" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Sponsor</h6>
                    <p className="text-gray-600">
                      Persoana Fizică, Juridică
                    </p>
                    <p className="mt-2 mb-4 text-gray-600">
                      Iti dorești să fii cel care ajută elevii sau școlile din România să-și descopere aripile? Fii la curent cu contextul cu care se confruntă copiii din țară și contribuie activ la susținerea lor. Sharing is Caring.
                    </p>
                  </div>
                </div>
              </div>


              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Profesor
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Creează-ți propriul profil și devino influencer în educație! Folosește-te de creativitatea pe care oricum
                      o folosești mereu cu elevii tăi și dă naștere unei comunități online cu ajutorul căreia să deschizi orizonturile
                      copiilor din România!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Partener
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Susține educația din România prin intermediul companiei tale! Dacă produsele sau serviciile tale pot influența pozitiv viitorul elevilor, devino partener și alătură-te comunității de profesori care oferă cele mai bune soluții direct din practică.
                    </p>
                  </div>
                </div>
              </div>
            </div>










            <div className="flex flex-wrap items-center mt-24">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Ajută copiii defavorizați să își urmeze visul
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Prin intermediul platorfmei, profesorii isi pot transforma clasa de elevi in niste mici antreprenori ce isi indeplinesc visurile prin munca si persevernta
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Pentru realizarea produselor elevii au nevoie de resurse, pentru care sponsorii pot contribui cu orice suma dorita, ulterior produsele rezultate pot iesi la licitatie.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Află mai multe!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg bg-pink-600">
                  <img
                    src={farfuriiImage} // Use the variable directly here
                    alt="Basketball Image"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>













            <div className="container mx-auto py-12 px-6">
              {/* Main wrapper for flexbox layout */}
              <div className="flex flex-wrap -mx-4">
                {/* Left side: Hexagonal image */}
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative">
                    <img
                      src="https://www.bucuresti21km.ro/media/2012/Teach-1-930x620.jpg.webp"
                      alt="Basketball Image"
                      className="w-full h-auto"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 85% 10%, 100% 40%, 100% 70%, 85% 100%, 50% 100%, 15% 100%, 0% 70%, 0% 40%, 15% 10%)"
                      }}
                    />
                  </div>
                </div>

                {/* Right side: Text with icons */}
                <div className="w-full md:w-6/12 px-4 flex flex-col justify-center">
                  {/* Donation section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-pink-200 text-pink-500 p-3 rounded-full">
                        <i className="fas fa-heart"></i>
                      </span>
                      <h3 className="text-xl font-semibold ml-4">Creează</h3>
                    </div>
                    <p className="text-gray-600">
                      Help us rewrite the stories of at-risk children and families. Get involved!
                    </p>
                  </div>

                  {/* Become a volunteer section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-pink-200 text-pink-500 p-3 rounded-full">
                        <i className="fas fa-clock"></i>
                      </span>
                      <h3 className="text-xl font-semibold ml-4">Contribuie</h3>
                    </div>
                    <p className="text-gray-600">
                      Volunteers are valuable members of the family. You too can donate your time!
                    </p>
                  </div>

                  {/* Donate Your Birthday section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-pink-200 text-pink-500 p-3 rounded-full">
                        <i className="fas fa-birthday-cake"></i>
                      </span>
                      <h3 className="text-xl font-semibold ml-4">Construiește</h3>
                    </div>
                    <p className="text-gray-600">
                      Encourage friends and family to support us through the Donate Your Birthday campaign.
                    </p>
                  </div>

                  {/* Redirect section */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-pink-200 text-pink-500 p-3 rounded-full">
                        <i className="fas fa-folder"></i>
                      </span>
                      <h3 className="text-xl font-semibold ml-4">Reușim împreună</h3>
                    </div>
                    <p className="text-gray-600">
                      Part of your income tax paid to the government can support children. Find out how you can help!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    A growing company
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://www.europafm.ro/wp-content/uploads/2015/09/Scoala-Satulung-3.jpg"
                />
              </div>
            </div>
          </div>
        </section>




        <section className="pb-20 relative block bg-gray-900">
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">

            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
