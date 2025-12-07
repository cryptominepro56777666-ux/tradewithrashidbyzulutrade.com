import React from 'react';
import { useParams } from 'react-router-dom';
import { mockTraders } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TraderDetails = () => {
  const { id } = useParams();
  const trader = mockTraders.find(t => t.id === parseInt(id));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!trader) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Trader Not Found</h2>
          <p className="text-gray-400">The trader you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{trader.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">ROI</h3>
            <p className="text-3xl font-bold text-green-400">{trader.roi}%</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Followers</h3>
            <p className="text-3xl font-bold">{trader.followers.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Risk Level</h3>
            <p className="text-3xl font-bold">{trader.riskLevel}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Performance Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trader.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Trade History</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Pair</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Profit</th>
              </tr>
            </thead>
            <tbody>
              {/* Fake trade history */}
              <tr className="border-b border-gray-700">
                <td className="p-2">2023-12-01</td>
                <td className="p-2">EUR/USD</td>
                <td className="p-2">Buy</td>
                <td className="p-2 text-green-400">+150</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-2">2023-11-28</td>
                <td className="p-2">GBP/USD</td>
                <td className="p-2">Sell</td>
                <td className="p-2 text-red-400">-50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg">
          FOLLOW TRADER
        </button>
      </div>
    </div>
  );
};

export default TraderDetails;
