import React, { useState } from "react";

import profilePicture from '../assets/img/profile_teacher.jpg'
import backgroundPicture from '../assets/img/Background.jpg'
import postareAndra from '../assets/img/andra_postare1.jpg'
import postareCopii from '../assets/img/poza_principala_postare.jpg'



export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false); // State for controlling text expansion

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
  };
  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundPicture})` // Use the imported image here
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="Profile"
                        src={profilePicture}
                        className="shadow-xl rounded-full align-middle border-none"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginTop: "-75px", // Pull the image upwards
                        }}
                      />

                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Andra - Maria Năforniță
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Iași - România
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">

                  <div className="flex flex-wrap justify-center">

                    <div className="w-full lg:w-9/12 px-4">
                      <h1 style={{ fontSize: '30px' }}>Teacher</h1>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        The profession that creates all other professions.
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <img
                              alt="Profile"
                              src={postareAndra}
                              style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />
                          </a>
                          <div class="p-5">
                            <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cine sunt?</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              {isExpanded
                                ? "Mă numesc Andra și fac parte din categoria oamenilor visători care cred în schimbare si in faptul ca impreună putem reuși să facem lumea un loc mai bun . Sunt invățătoare într-o comnitate vulnerabilă din județul Iași și îmi doresc ca elevii mei sa considere școala un spațiu sigur în care pot invăța și visa la lucruri mărețe"
                                : "Mă numesc Andra și fac parte din categoria oamenilor visători care cred în schimbare si in faptul ca impreună putem reusi..."}
                            </p>
                            <div
                              href="#"
                              onClick={toggleText} // Add click handler
                              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              {isExpanded ? "Citeste mai puțin" : "Citeste mai mult"}
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="/Post1">
                            <img class="rounded-t-lg" src={postareCopii} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                          </a>
                          <div class="p-5">
                            <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Micii antreprenori</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A venit timpul să vă prezint și micii eroi pentru care sunt "Doamna". Clasa noastră este compusă din 6 elevi...</p>
                            <a href="/Post1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Citeste mai mult
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
