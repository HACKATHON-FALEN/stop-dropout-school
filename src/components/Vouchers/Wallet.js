import React from "react";
import { FaWallet } from "react-icons/fa"; // Wallet icon
import { FaGift } from "react-icons/fa6";

const Wallet = ({ balance }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 flex items-center justify-between space-x-4 max-w-lg mx-auto">
      {/* Wallet Icon */}
      <div className="flex items-center space-x-2">
        <FaWallet className="text-gray-600 text-3xl" /> {/* Wallet Icon */}
        <div className="text-gray-800 text-lg font-semibold">
          Ai la dispoziție
        </div>
      </div>

      {/* Balance Display */}
      <div className="flex items-center space-x-2">
        {/* <FiDollarSign className="text-gray-600 text-2xl" /> */}
        <FaGift />

        <div className="text-gray-900 text-xl font-bold">
          {balance} Speranțe
        </div>
      </div>

      {/* Optional Action Button (Top-Up/Withdraw) */}
      {/* <button className="bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300">
        Alimentează
      </button> */}
    </div>
  );
};

export default Wallet;
