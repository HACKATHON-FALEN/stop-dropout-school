import React, { useState } from 'react';
import Navbar from '../../navbar_and_footer/Navbar';
import Footer from '../../navbar_and_footer/Footer';
import backgroundImage from './image.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

const FeedPage = () => {
  const [donationAmount, setDonationAmount] = useState(300); // Default value is 300

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ''); // Allow only numbers
    setDonationAmount(value);
  };

  // Dummy data for posts
  const [posts] = useState([
    {
      id: 1,
      sector: 'Education | Romania',
      title: 'Support Rural Education in Romania',
      author: 'Professor John',
      description: 'Help us provide books and supplies to students in rural areas...',
      raised: 15056,
      goal: 24917,
      image: image2,
      date: '2023-09-12', // Adding a date field
    },
    {
      id: 2,
      sector: 'Health | Kenya',
      title: 'Medical Supplies for Children',
      author: 'Dr. Mary',
      description: 'Your donation will help us purchase essential medical supplies for children...',
      raised: 7850,
      goal: 15000,
      image: image3,
      date: '2023-09-20', // Adding a date field
    },
    {
      id: 3,
      sector: 'Environment | Brazil',
      title: 'Rainforest Protection Initiative',
      author: 'Eco Warriors',
      description: 'Help us save the Amazon rainforest from deforestation...',
      raised: 12000,
      goal: 50000,
      image: image4,
      date: '2023-08-15', // Adding a date field
    },
    {
      id: 4,
      sector: 'Animal Welfare | India',
      title: 'Support Stray Animal Rescue',
      author: 'Animal Angels',
      description: 'Your support will provide shelter and food for stray animals...',
      raised: 9200,
      goal: 12000,
      image: image5,
      date: '2023-09-18', // Adding a date field
    },
  ]);

  // State for the selected sorting option
  const [sortOption, setSortOption] = useState('Newest');

  // State for the category switch
  const [selectedCategory, setSelectedCategory] = useState('Individual');

  // Sort posts based on selected option
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOption === 'Newest') {
      return new Date(b.date) - new Date(a.date); // Sort by date, newest first
    }
    if (sortOption === 'Closest to goal') {
      const aProgress = a.raised / a.goal;
      const bProgress = b.raised / b.goal;
      return bProgress - aProgress; // Sort by percentage of funds raised, closest to goal first
    }
    return 0;
  });

  // Format the date
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
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
          Donation Feed
        </h1>

        {/* Filtering Section */}
        <div className="mb-6 flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Search donations..."
            className="p-2 border border-gray-300 w-full max-w-md focus:outline-none focus:ring-1 focus:ring-olive-500"
          />
          <select
            className="p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-olive-500"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option>Newest</option>
            <option>Closest to goal</option>
            <option>Funds Raised</option>
          </select>
        </div>

        {/* Category Switch */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setSelectedCategory('Individual')}
            className={`px-4 py-2 border border-orange-500 text-sm font-medium ${
              selectedCategory === 'Individual'
                ? 'bg-orange-500 text-white'
                : 'text-orange-500 bg-white'
            } transition duration-300`}
          >
            Individual
          </button>
          <button
            onClick={() => setSelectedCategory('Corporate')}
            className={`px-4 py-2 border border-orange-500 text-sm font-medium ${
              selectedCategory === 'Corporate'
                ? 'bg-orange-500 text-white'
                : 'text-orange-500 bg-white'
            } transition duration-300`}
          >
            Corporate
          </button>
        </div>

        {/* Posts List */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 border border-gray-200 shadow-sm mx-auto w-full max-w-lg"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded shadow-2xl"
              />

              <div className="text-xs text-olive-700 font-medium">{post.sector}</div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h2>
              <p className="text-sm text-gray-500">by {post.author}</p>
              <p className="text-xs text-gray-400">{formatDate(post.date)}</p> {/* Displaying the date */}
              <p className="mt-2 text-gray-600">
                {post.description}{' '}
                <a href="#" className="text-orange-600 hover:underline">
                  Read more
                </a>
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-1">
                  €{post.raised.toLocaleString()} raised of €{post.goal.toLocaleString()} goal
                </div>
                <div className="w-full bg-gray-100 h-2.5">
                  <div
                    className="bg-orange-500 h-2.5"
                    style={{ width: `${(post.raised / post.goal) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Donation Section */}
              <div className="mt-4 flex justify-end items-center mr-3 space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    value={donationAmount}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 w-20 focus:outline-none focus:ring-1 focus:ring-olive-500 text-left"
                  />
                  <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">€</span>
                </div>
                <button className="bg-orange-500 text-white p-2 hover:bg-orange-600 transition duration-300">
                  Donate
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
