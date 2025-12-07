import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniChart from './MiniChart';
import LoadingSkeleton from './LoadingSkeleton';

const TradersTable = ({ traders, loading }) => {
  const [sortBy, setSortBy] = useState('roi');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const sortedTraders = [...traders].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (sortBy === 'followers') {
      aVal = parseInt(aVal);
      bVal = parseInt(bVal);
    } else if (sortBy === 'roi') {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    }

    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return <LoadingSkeleton rows={10} />;
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Trader
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-white"
                onClick={() => handleSort('roi')}
              >
                ROI % {sortBy === 'roi' && (sortOrder === 'desc' ? '↓' : '↑')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-white"
                onClick={() => handleSort('followers')}
              >
                Followers {sortBy === 'followers' && (sortOrder === 'desc' ? '↓' : '↑')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Risk
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Chart
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {sortedTraders.map((trader) => (
              <tr key={trader.id} className="hover:bg-gray-750">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <Link
                      to={`/trader/${trader.id}`}
                      className="text-sm font-medium text-white hover:text-blue-400"
                    >
                      {trader.name}
                    </Link>
                    <div className="text-sm text-gray-400">{trader.country}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-green-400 font-semibold">
                    {trader.roi}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {trader.followers.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${getRiskColor(trader.riskLevel)}`}>
                    {trader.riskLevel}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {trader.tradeDuration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-24">
                    <MiniChart data={trader.chartData} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
                    Follow
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradersTable;
