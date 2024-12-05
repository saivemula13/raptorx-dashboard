import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/material';

export default function PriceChangeGraph({ data }) {
  const graphData = data.map((item) => ({
    name: item["Name"], 
    priceChange: item["Price Change"],
  }));

  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="priceChange"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
