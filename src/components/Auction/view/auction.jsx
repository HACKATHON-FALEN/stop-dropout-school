import React, { useState } from "react";
import AuctionImage from "./auction.jpg"; // Import auction image
import gifImage from "./success.gif"; // Import your GIF file

const OrnamentsAuction = () => {
  // State for prices, sale details, and modal
  const [price, setPrice] = useState(100); // Current "Buy Now" price
  const [lastSale, setLastSale] = useState(95); // Last sale price
  const [sold, setSold] = useState(277); // Number of ornaments sold
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [offerPrice, setOfferPrice] = useState(price); // Input price for the offer
  const [notification, setNotification] = useState(""); // State for notification
  const [isGifVisible, setIsGifVisible] = useState(false); // State for GIF visibility
  const [gifAnimation, setGifAnimation] = useState("fade-in"); // Manage GIF animation state

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsGifVisible(false); // Reset GIF visibility when closing modal
  };

  // Increment and decrement price
  const incrementPrice = () => setOfferPrice((prev) => prev + 10);
  const decrementPrice = () =>
    setOfferPrice((prev) => (prev > 10 ? prev - 10 : prev));

  // Place offer and show modal with GIF
  const placeOffer = () => {
    setNotification("Oferta plasată!");
    setGifAnimation("fade-in"); // Set to fade in
    setIsGifVisible(true); // Show GIF
    setTimeout(() => {
      setGifAnimation("fade-out"); // Change to fade out after 2 seconds
      setTimeout(() => {
        setIsGifVisible(false); // Hide GIF after fade-out is complete
        closeModal(); // Close modal after 1 second fade-out
      }, 1000); // Fade-out duration
    }, 2000); // GIF shows for 2 seconds before fading out
  };

  return (
    <div className="bg-gray-100 mt-20 min-h-screen p-5">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Licitație pentru Ornamente
        </h1>
        <p className="text-gray-600 mb-4">
          Micii eroi au creat ornamente unice, iar tu poți licita pentru a
          sprijini educația lor! Toate fondurile strânse vor ajuta la
          organizarea banchetului de final de an.
        </p>

        {/* Ornament image */}
        <div className="mb-4">
          <img
            src={AuctionImage}
            alt="Ornament creat de copii"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Notification */}
        {notification && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            {notification}
          </div>
        )}

        {/* Price info and "Buy Now" button */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">
            Cumpără acum pentru
          </h2>
          <p className="text-3xl font-bold text-orange-500 mb-2">{price} LEI</p>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={openModal}
          >
            Cumpără acum
          </button>
        </div>

        {/* Number of ornaments sold */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-xl font-semibold text-gray-700">
            {sold} Ornamente vândute!
          </p>
        </div>

        {/* Last sale info */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">
            Ultima vânzare
          </h2>
          <p className="text-2xl font-bold text-green-500 mb-2">
            {lastSale} LEI
          </p>
        </div>
      </div>

      {/* Modal for placing offer */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* If GIF is visible, show it */}
            {isGifVisible ? (
              <div
                className={`flex justify-center items-center ${gifAnimation}`}
              >
                <img src={gifImage} alt="Success" className="w-96 h-96" />
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Plasați Oferta</h2>

                {/* Price input with increment/decrement buttons */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={decrementPrice}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-gray-600">{offerPrice} RON</span>
                  <button
                    onClick={incrementPrice}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    +
                  </button>
                </div>

                {/* Button to place the offer */}
                <a href="/vouchers">
                  <button
                    onClick={placeOffer}
                    className="bg-orange-500 text-white px-4 py-2 w-full rounded-lg hover:bg-orange-600 transition duration-300 mb-4"
                  >
                    Plasați oferta
                  </button>
                </a>


                {/* Button to close the modal */}
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Închide
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrnamentsAuction;
