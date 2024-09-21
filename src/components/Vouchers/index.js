import React, { useState } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import altex from "../../assets/vouchers/altex.png";
import daco from "../../assets/vouchers/daco.jpg";
import dedeman from "../../assets/vouchers/dedeman.jpg";
import emag from "../../assets/vouchers/emag.png";
import pim from "../../assets/vouchers/pim.png";
import cardGif from "../../assets/vouchers/card.gif";
import { FaHandHoldingHeart, FaTimes, FaCheckCircle } from "react-icons/fa";
import checkmark from "../../assets/vouchers/chckmark.gif";
import { motion } from "framer-motion";
import Modal from "react-modal"; // React Modal
import { FaGift } from "react-icons/fa";
import Wallet from "./Wallet";
import mailGif from "../../assets/vouchers/mail.gif";

// Modal styles
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "750px", // Fixed width
    height: "600px", // Fixed height to prevent resizing
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden", // Prevents content from overflowing
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Darker background
    backdropFilter: "blur(5px)", // Blur effect
  },
};

const voucherAmounts = [100, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7500];

const CouponCard = ({ logo, description, code }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // Control final message display
  const [isFading, setIsFading] = useState(false); // Control for fade animation

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setIsModalOpen(true); // Open modal with delay
    }, 800);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setShowMessage(false); // Reset message state
    setIsFading(false); // Reset fade state when closing modal
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom amount if a preset amount is selected
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clear preset amount if custom is entered
  };

  const handleSubmit = () => {
    setIsFading(true); // Trigger fade effect on submit
    setTimeout(() => {
      setIsSubmitted(true); // Show the GIF after the fade effect
    }, 800); // Fade duration

    setTimeout(() => {
      setShowMessage(true); // Show final message after 5 seconds
    }, 5000); // GIF step lasts longer (5 seconds)
  };

  return (
    <div className="border rounded-lg shadow-2xl p-4 flex flex-col justify-between items-center text-center">
      <div className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-2 flex items-center justify-center space-x-3">
        <span>Partener Verificat</span>
        <HiOutlineBadgeCheck size={25} style={{ color: "green" }} />
      </div>
      <img src={logo} alt="brand-logo" className="h-40 mb-4" />
      <p className="text-lg font-semibold text-gray-800 mb-4">{description}</p>

      {/* Button with animated icon */}
      <button
        onClick={handleButtonClick}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-4 items-center space-x-2 hover:bg-red-600 transition duration-300 ease-in-out flex flex-col"
      >
        {/* Animated icon */}
        <motion.div
          animate={{
            rotateY: isAnimating ? 700 : 0,
            scale: isAnimating ? 1.4 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <FaHandHoldingHeart size={35} className="text-yellow-300" />
        </motion.div>
        <span>Afișează</span>
      </button>

      <div className="text-lg font-semibold text-gray-800 mt-2">{code}</div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
        ariaHideApp={false}
      >
        {/* Conditional rendering based on submission */}
        {!isSubmitted ? (
          <div
            className={`transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            } px-20 py-10`}
          >
            <h2 className="text-xl font-bold mb-4">Select a Voucher Amount</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {voucherAmounts.map((amount) => (
                <div
                  key={amount}
                  className={`p-3 border rounded-lg cursor-pointer text-center flex flex-col items-center justify-center transition duration-300 ease-in-out ${
                    selectedAmount === amount
                      ? "bg-purple-200 border-purple-400 text-purple-800"
                      : "bg-gray-100 border-gray-300"
                  } hover:bg-gray-200`}
                  onClick={() => handleAmountChange(amount)}
                >
                  <FaGift className="text-xl mb-2" />
                  <span className="text-lg font-semibold">{amount} Lei</span>
                </div>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="mb-4">
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out w-full"
            >
              Confirm
            </button>
          </div>
        ) : showMessage ? (
          <div className="text-center flex flex-col align-middle justify-center my-20">
            {/* Final Message with Icon */}
            <div className="text-2xl font-semibold flex items-center justify-center space-x-2 mb-4">
              <span>Voucherul a fost virat în contul dumneavoastră</span>
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>

            {/* GIF Under the Message */}
            <img src={mailGif} alt="Success" className="w-[50%] mx-auto mt-4" />
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
              isSubmitted ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* GIF animation with fade-in effect */}
            <img
              src={cardGif}
              alt="Loading"
              className="w-45 mb-4 transition-opacity duration-1000"
            />
            {/* Smaller checkmark animation with fade-in effect */}
            <img
              src={checkmark}
              alt="Success"
              className="w-20 transition-opacity duration-1000"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

const Vouchers = () => {
  const coupons = [
    {
      logo: altex,
      description:
        "Altex - unul dintre cei mai mari retaileri de electronice și electrocasnice din România, cunoscut pentru oferirea unei game variate de produse la prețuri competitive.",
      code: "ALTEX10",
    },
    {
      logo: daco,
      description:
        "Daco - un brand de top în papetărie și produse de birou din România, oferind o gamă largă de produse pentru studenți, profesioniști și creativi.",
      code: "DACO15",
    },
    {
      logo: dedeman,
      description:
        "Dedeman - cel mai mare retailer de bricolaj și amenajări interioare din România, oferind o varietate largă de materiale de construcții, mobilă și produse pentru grădină.",
      code: "DEDE20",
    },
    {
      logo: emag,
      description:
        "eMAG - cel mai mare retailer online din România, oferind o selecție diversificată de electronice, electrocasnice, modă, cărți și multe altele.",
      code: "EMAG25",
    },
    {
      logo: pim,
      description:
        "PIM - o librărie cunoscută în România, care oferă o gamă largă de cărți, materiale educaționale și produse de papetărie pentru studenți și profesioniști.",
      code: "PIM5",
    },
  ];

  return (
    <div className="container mx-auto my-64 px-36">
      <div className="mb-10 flex space-x-4 w-full align-middle justify-center items-center">
        <h2 className="text-2xl font-bold flex justify-center items-center align-middle text-center mb-8 w-1/2 py-0 mb-0">
          <span>Parteneri disponibli</span>
        </h2>
        <div className="w-1/2">
          <Wallet balance={1500} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            logo={coupon.logo}
            description={coupon.description}
            code={coupon.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Vouchers;
