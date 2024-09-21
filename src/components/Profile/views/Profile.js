import React, { useState } from "react";

import profilePicture from "../assets/img/profile_teacher.jpg";
import backgroundPicture from "../assets/img/Background.jpg";
import postareAndra from "../assets/img/andra_postare1.jpg";
import postareCopii from "../assets/img/poza_principala_postare.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaEye, FaEyeSlash, FaCopy, FaGift } from "react-icons/fa";
import { BsPrinter } from "react-icons/bs";
import receipt from "./sal.pdf";

// import { FaCopy } from "react-icons/fa";
import { Tooltip } from "@mui/material"; // Material UI Tooltip
import { FaHeart } from "react-icons/fa";
// import FavoriteIcon from "@mui/icons-material/Favorite"; // Heart icon from MUI
// import AssignmentIcon from "@mui/icons-material/Assignment"; // Report icon from MUI
import altex from "../../../assets/vouchers/altex.png";
import daco from "../../../assets/vouchers/daco.jpg";
import dedeman from "../../../assets/vouchers/dedeman.jpg";

const vouchers = [
  { id: 1, partnerLogo: altex, name: "Altex", amount: "500", code: "ALT500" },
  { id: 2, partnerLogo: daco, name: "Daco", amount: "750", code: "ALT500" },
  {
    id: 3,
    partnerLogo: dedeman,
    name: "Dedeman",
    amount: "1200",
    code: "ALT500",
  },
];

export default function Profile() {
  // const [isExpanded, setIsExpanded] = useState(false); // State for controlling text expansion

  // const toggleText = () => {
  //   setIsExpanded(!isExpanded); // Toggle the expansion state
  // };

  const [activeTab, setActiveTab] = useState("about");
  const [isExpanded, setIsExpanded] = useState(false);
  const [revealedVouchers, setRevealedVouchers] = useState({});

  // Toggle expanded state for the "About Me" section
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // Toggle reveal voucher value
  const toggleRevealVoucher = (voucherId) => {
    setRevealedVouchers((prev) => ({
      ...prev,
      [voucherId]: !prev[voucherId],
    }));
  };

  const handleDownload = (voucherId) => {
    const fileName = `voucher-emag.pdf`; // Customize file name based on voucher ID

    // Simulate file download by creating a link to the static file
    const link = document.createElement("a");
    link.href = receipt; // Replace with your file path
    link.download = fileName;
    link.click();
  };

  const VoucherCard = () => {
    const [revealedVouchers, setRevealedVouchers] = useState({}); // Track revealed voucher codes

    // Toggle reveal voucher code
    const toggleRevealVoucher = (voucherId) => {
      setRevealedVouchers((prev) => ({
        ...prev,
        [voucherId]: !prev[voucherId],
      }));
    };

    return (
      <div className="space-y-8 flex flex-col align-middle justify-center items-center">
        {/* Vertical spacing for list layout */}
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white border border-gray-200 rounded-lg shadow w-1/2 p-5 flex flex-col items-center space-y-5"
          >
            {/* Partner logo */}
            <img
              src={voucher.partnerLogo}
              alt={`Partner ${voucher.id}`}
              className="w-24 h-24 object-contain mb-4" // Ensures the logo fits nicely
            />

            {/* Voucher Details */}
            <h3 className="text-2xl font-bold mb-2">{voucher.name}</h3>

            {/* Voucher Value with Gift Icon */}
            <div className="flex items-center justify-center w-full mb-4">
              <FaGift className="text-gray-600 text-2xl mr-2" />
              <span className="font-semibold text-xl">
                {voucher.amount} Lei
              </span>
            </div>

            {/* Voucher Code (Hidden/Visible) */}

            {/* Hearts to signify trust */}

            <div className="flex items-center justify-between w-1/2 px-4 mb-4">
              <span className="font-semibold text-xl">
                {revealedVouchers[voucher.id] ? voucher.code : "*****"}
              </span>

              {/* Reveal and Copy Icons */}
              <div className="flex items-center space-x-2">
                {/* Reveal/Hide Button */}
                <Tooltip
                  title={
                    revealedVouchers[voucher.id]
                      ? "Ascunde codul voucherului"
                      : "Arată codul voucherului"
                  }
                  arrow
                >
                  <button
                    onClick={() => toggleRevealVoucher(voucher.id)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {revealedVouchers[voucher.id] ? (
                      <FaEyeSlash size={25} />
                    ) : (
                      <FaEye size={25} />
                    )}
                  </button>
                </Tooltip>

                {/* Copy Icon (Visible only when the voucher is revealed) */}
                {revealedVouchers[voucher.id] && (
                  <Tooltip title="Copiază codul" arrow>
                    <button className="text-gray-600 hover:text-gray-800">
                      <FaCopy size={25} />
                    </button>
                  </Tooltip>
                )}
              </div>
            </div>
            <div className="flex justify-around align-middle items-center w-1/2">
              {/* <div className="flex space-x-2 mb-4"> */}
              <Tooltip title="Fonduri încredințate profesorului" arrow>
                <FaHeart className="text-red-500" fontSize="large" />
              </Tooltip>

              {/* </div> */}
              <Tooltip title="Emitere Rețetă" arrow>
                <button
                  onClick={() => handleDownload(voucher.id)}
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <BsPrinter size={30} />
                </button>
              </Tooltip>
              <Tooltip title="Fonduri de încredere" arrow>
                <FaHeart className="text-red-500" fontSize="large" />
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundPicture})`, // Use the imported image here
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
                    <div className="container mx-auto py-8 px-36">
                      {/* Tab Navigation */}
                      <div className="flex justify-center mb-8 space-x-8">
                        <button
                          className={`text-lg font-bold ${activeTab === "about"
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-600"
                            }`}
                          onClick={() => setActiveTab("about")}
                        >
                          Despre mine
                        </button>
                        <button
                          className={`text-lg font-bold ${activeTab === "vouchers"
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-600"
                            }`}
                          onClick={() => setActiveTab("vouchers")}
                        >
                          Vouchere
                        </button>
                      </div>

                      {/* Tab Content */}
                      {activeTab === "about" && (
                        <div className="flex flex-wrap justify-center">
                          <div className="w-full lg:w-9/12 px-4">
                            <h1 style={{ fontSize: "30px" }}>Teacher</h1>
                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                              The profession that creates all other professions.
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                <a href="#">
                                  <img
                                    alt="Profile"
                                    src={postareAndra}
                                    style={{
                                      width: "100%",
                                      height: "200px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </a>
                                <div className="p-5">
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                      Cine sunt?
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-700">
                                    {isExpanded
                                      ? "Mă numesc Andra și fac parte din categoria oamenilor visători care cred în schimbare si in faptul ca impreună putem reuși să facem lumea un loc mai bun. Sunt invățătoare într-o comnitate vulnerabilă din județul Iași și îmi doresc ca elevii mei sa considere școala un spațiu sigur în care pot invăța și visa la lucruri mărețe."
                                      : "Mă numesc Andra și fac parte din categoria oamenilor visători care cred în schimbare si in faptul ca impreună putem reusi..."}
                                  </p>
                                  <button
                                    onClick={toggleText}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                  >
                                    {isExpanded
                                      ? "Citeste mai puțin"
                                      : "Citeste mai mult"}
                                  </button>
                                </div>
                              </div>

                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                <a href="/Post1">
                                  <img
                                    className="rounded-t-lg"
                                    src={postareCopii}
                                    alt=""
                                    style={{
                                      width: "100%",
                                      height: "200px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </a>
                                <div className="p-5">
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                      Micii antreprenori
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-700">
                                    A venit timpul să vă prezint și micii eroi
                                    pentru care sunt "Doamna". Clasa noastră
                                    este compusă din 6 elevi...
                                  </p>
                                  <a
                                    href="/Post1"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                  >
                                    Citeste mai mult
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Vouchers Tab */}
                      {activeTab === "vouchers" && <VoucherCard />}
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
