import React, { useState } from 'react';
import Navbar from '../../navbar_and_footer/Navbar';
import Footer from '../../navbar_and_footer/Footer';
import backgroundImage from './image.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import companyImage from './image8.jpg';

const FeedPage = () => {
  const [donationAmount, setDonationAmount] = useState(300);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setDonationAmount(value);
  };

  const [posts] = useState([
    {
      id: 1,
      sector: 'Județul Gorj',
      title: 'Sprijină Educația Rurală în România',
      author: 'Profesorul John',
      description: 'Ajută-ne să oferim cărți și materiale educaționale elevilor din zonele rurale...',
      raised: 1200,
      goal: 1700,
      image: image2,
      date: '2023-09-12',
      type: 'postare',
    },
    {
      id: 2,
      sector: 'Județul Iași',
      title: 'Materiale Creative pentru Copii',
      author: 'Dr. Maria',
      description: 'Donația ta ne va ajuta să achiziționăm materiale didactice esențiale pentru copii...',
      raised: 3200,
      goal: 4120,
      image: image3,
      date: '2023-09-20',
      type: 'postare',
    },
    {
      id: 3,
      sector: 'Județul Botoșani',
      title: 'Rechizite pentru Copii Defavorizați',
      author: 'Eco Războinicii',
      description: 'Sprijină-ne să oferim rechizite și resurse educaționale copiilor din medii defavorizate...',
      raised: 200,
      goal: 2500,
      image: image4,
      date: '2023-08-15',
      type: 'postare',
    },
    {
      id: 4,
      sector: 'Județul Dolj',
      title: 'Sprijin pentru Educația Elevilor Defavorizați',
      author: 'Îngeri ai Educației',
      description: 'Contribuția ta va ajuta la furnizarea de burse și materiale educaționale pentru elevii defavorizați...',
      raised: 2000,
      goal: 3000,
      image: image5,
      date: '2023-09-18',
      type: 'postare',
    },
    {
      id: 5,
      sector: 'Județul Cluj',
      title: 'Licitație pentru Ornamente Creativitate',
      author: 'Artă pentru Toți',
      description: 'Participă la licitația noastră pentru ornamente create de copii!',
      raised: 2000,
      goal: 5000,
      image: image6,
      date: '2023-09-25',
      type: 'licitatie',
    },
    {
      id: 6,
      sector: 'Județul Sibiu',
      title: 'Licitație pentru Desene de Copii',
      author: 'Talentul Copiilor',
      description: 'Vino să licitezi pentru cele mai frumoase desene realizate de copii!',
      raised: 1500,
      goal: 3000,
      image: image7,
      date: '2023-09-28',
      type: 'licitatie',
    },
    {
      id: 7,
      sector: 'Județul Brașov',
      title: 'Sprijin pentru Inițiative Verzi',
      author: 'Compania Verde',
      description: 'Ajută-ne să dezvoltăm inițiative verzi și să protejăm mediul înconjurător.',
      raised: 5000,
      goal: 10000,
      image: companyImage,
      date: '2023-10-01',
      type: 'companie', // New post of type company
    },
  ]);

  const [sortOption, setSortOption] = useState('Cele mai recente');
  const [selectedCategory, setSelectedCategory] = useState('Postari');

  const filteredPosts = posts.filter(post => {
    if (selectedCategory === 'Postari') {
      return post.type === 'postare';
    } else if (selectedCategory === 'Licitatii') {
      return post.type === 'licitatie';
    } else if (selectedCategory === 'Companii') {
      return post.type === 'companie';
    }
    return true;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === 'Cele mai recente') {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortOption === 'Cele mai apropiate de obiectiv') {
      const aProgress = a.raised / a.goal;
      const bProgress = b.raised / b.goal;
      return bProgress - aProgress;
    }
    return 0;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-6 bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
          Feed de Donații
        </h1>

        <div className="mb-6 flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Caută donații..."
            className="p-2 border border-gray-300 w-full max-w-md focus:outline-none focus:ring-1 focus:ring-olive-500"
          />
          <select
            className="p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-olive-500"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option>Cele mai recente</option>
            <option>Cele mai apropiate de obiectiv</option>
            <option>Fonduri strânse</option>
          </select>
        </div>

        <div className="flex justify-center mb-6 space-x-2">
          <button
            onClick={() => setSelectedCategory('Postari')}
            className={`px-4 py-2 border border-orange-500 text-sm font-medium ${
              selectedCategory === 'Postari' ? 'bg-orange-500 text-white' : 'text-orange-500 bg-white'
            } transition duration-300`}
          >
            Postari
          </button>
          <button
            onClick={() => setSelectedCategory('Licitatii')}
            className={`px-4 py-2 border border-orange-500 text-sm font-medium ${
              selectedCategory === 'Licitatii' ? 'bg-orange-500 text-white' : 'text-orange-500 bg-white'
            } transition duration-300`}
          >
            Licitatii
          </button>
          <button
            onClick={() => setSelectedCategory('Companii')}
            className={`px-4 py-2 border border-orange-500 text-sm font-medium ${
              selectedCategory === 'Companii' ? 'bg-orange-500 text-white' : 'text-orange-500 bg-white'
            } transition duration-300`}
          >
            Companii
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {sortedPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 border border-gray-200 shadow-sm mx-auto w-full max-w-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded shadow-2xl"
              />
              <div className="text-xs text-olive-700 font-medium">{post.sector}</div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h2>
              <p className="text-sm text-gray-500">de {post.author}</p>
              <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
              <p className="mt-2 text-gray-600">
                {post.description}{' '}
                <a href="#" className="text-orange-600 hover:underline">Citește mai mult</a>
              </p>
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-1">
                  {post.raised.toLocaleString()}RON strânși din {post.goal.toLocaleString()}RON obiectiv
                </div>
                <div className="w-full bg-gray-100 h-2.5">
                  <div className="bg-orange-500 h-2.5" style={{ width: `${(post.raised / post.goal) * 100}%` }}></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end items-center mr-3 space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    value={donationAmount}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 w-20 focus:outline-none focus:ring-1 focus:ring-olive-500 text-left"
                  />
                  <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">RON</span>
                </div>
                <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
                  Donează
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedPage;
