import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Trade with Rashid by ZuluTrade</h1>
          <p className="text-xl mb-8">Discover top traders and copy their strategies</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Explore Markets
          </button>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Top Traders</h2>
          {/* Fake top traders preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Trader 1</h3>
              <p>ROI: 85%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Trader 2</h3>
              <p>ROI: 92%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Trader 3</h3>
              <p>ROI: 78%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
