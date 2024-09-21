import React, { useState } from 'react';
import AuctionImage from './auction.jpg'; // Importă imaginea locală

const OrnamentsAuction = () => {
    // Stare pentru prețuri și detalii
    const [price, setPrice] = useState(86); // prețul curent "Cumpără acum"
    const [lastSale, setLastSale] = useState(95); // ultima vânzare
    const [sold, setSold] = useState(277); // numărul de ornamente vândute
    const [isModalOpen, setIsModalOpen] = useState(false); // Stare pentru modal
    const [offerPrice, setOfferPrice] = useState(price); // Prețul din input
    const [notification, setNotification] = useState(''); // Stare pentru notificare

    // Funcții pentru deschiderea și închiderea modalului
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Funcție pentru creșterea/scăderea prețului din input
    const incrementPrice = () => setOfferPrice(prev => prev + 10);
    const decrementPrice = () => setOfferPrice(prev => (prev > 10 ? prev - 10 : prev));

    // Funcție pentru a plasa oferta
    const placeOffer = () => {
        setNotification('Oferta plasată!');
        closeModal();
    };

    return (
        <div className="bg-gray-100 mt-20 min-h-screen p-5">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Licitație pentru Ornamente</h1>
                <p className="text-gray-600 mb-4">
                    Micii eroi au creat ornamente unice, iar tu poți licita pentru a sprijini educația lor! Toate fondurile strânse vor ajuta la organizarea banchetului de final de an.
                </p>

                {/* Imaginea ornamentului */}
                <div className="mb-4">
                    <img
                        src={AuctionImage}
                        alt="Ornament creat de copii"
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* Notificare */}
                {notification && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        {notification}
                    </div>
                )}
                
                {/* Informații de preț și buton "Cumpără acum" */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-700">Cumpără acum pentru</h2>
                    <p className="text-3xl font-bold text-orange-500 mb-2">{price} LEI</p>
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                        onClick={openModal}
                    >
                        Cumpără acum
                    </button>
                </div>

                {/* Numărul de ornamente vândute */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                    <p className="text-xl font-semibold text-gray-700">{sold} Ornamente vândute!</p>
                </div>

                {/* Informații despre ultima vânzare */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-700">Ultima vânzare</h2>
                    <p className="text-2xl font-bold text-green-500 mb-2">{lastSale} LEI</p>
                </div>
            </div>

            {/* Modal pentru plasarea ofertei */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Plasați Oferta</h2>

                        {/* Input pentru preț incrementabil */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={decrementPrice}
                                className="px-4 py-2 bg-gray-300 rounded-lg"
                            >
                                -
                            </button>
                            <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">RON</span>

                            <input
                                type="number"
                                value={offerPrice}
                                onChange={(e) => setOfferPrice(Number(e.target.value))}
                                className="p-2 border border-gray-300 w-20 focus:outline-none focus:ring-1 focus:ring-olive-500 text-left"
                            />
                            <span className="text-gray-600">RON</span>

                            <button
                                onClick={incrementPrice}
                                className="px-4 py-2 bg-gray-300 rounded-lg"
                            >
                                +
                            </button>
                        </div>

                        {/* Buton pentru plasarea ofertei */}
                        <button
                            onClick={placeOffer}
                            className="bg-orange-500 text-white px-4 py-2 w-full rounded-lg hover:bg-orange-600 transition duration-300 mb-4"
                        >
                            Plasați oferta
                        </button>

                        {/* Buton pentru închiderea modalului */}
                        <button
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-700 text-sm"
                        >
                            Închide
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrnamentsAuction;
