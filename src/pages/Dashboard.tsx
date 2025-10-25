import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Employees', value: 120 },
  { name: 'On Leave', value: 15 },
  { name: 'Present', value: 105 },
];
const COLORS = ['#0088FE', '#FFBB28', '#00C49F'];

export default function Dashboard() {
  return (
    <div className="container mt-4">
      <h3>Dashboard</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} outerRadius={80} label>
              {data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
