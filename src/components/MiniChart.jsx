import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const MiniChart = ({ data, color = '#10b981' }) => {
  // Simplify data for mini chart - take every 5th point or so
  const simplifiedData = data.filter((_, index) => index % 3 === 0);

  return (
    <div className="w-full h-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={simplifiedData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;
