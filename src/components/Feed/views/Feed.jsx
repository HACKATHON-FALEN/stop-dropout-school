import React, { useState } from 'react';

const FeedPage = () => {
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
    },
    {
      id: 2,
      sector: 'Health | Kenya',
      title: 'Medical Supplies for Children',
      author: 'Dr. Mary',
      description: 'Your donation will help us purchase essential medical supplies for children...',
      raised: 7850,
      goal: 15000,
    },
    // Add more posts as needed
    {
      id: 3,
      sector: 'Education | Romania',
      title: 'Support Rural Education in Romania',
      author: 'Professor John',
      description: 'Help us provide books and supplies to students in rural areas...',
      raised: 15056,
      goal: 24917,
    },
    {
      id: 4,
      sector: 'Health | Kenya',
      title: 'Medical Supplies for Children',
      author: 'Dr. Mary',
      description: 'Your donation will help us purchase essential medical supplies for children...',
      raised: 7850,
      goal: 15000,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Donation Feed</h1>

      {/* Filtering Section */}
      <div className="mb-6 flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Search donations..."
          className="p-2 border rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Sectors</option>
          <option>Newest</option>
          <option>Closest to goal</option>
          <option>Funds Raised</option>
        </select>
      </div>

      {/* Posts List */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md mx-auto w-full max-w-lg"
          >
            <div className="text-xs text-gray-600 font-medium">{post.sector}</div>
            <h2 className="text-lg font-bold text-gray-800 mt-2">{post.title}</h2>
            <p className="text-sm text-gray-500">by {post.author}</p>
            <p className="mt-2 text-gray-700">
              {post.description}{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Read more
              </a>
            </p>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-1">
                €{post.raised.toLocaleString()} raised of €{post.goal.toLocaleString()} goal
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(post.raised / post.goal) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Donation Section */}
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="number"
                min="1"
                placeholder="€"
                className="p-2 border rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
