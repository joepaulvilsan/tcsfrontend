// src/components/EmotionPie.jsx
import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4B19", "#8DD1E1"];

const EmotionPie = ({ distribution }) => {
  // Convert distribution object to an array of { name, value } objects.
  const data = Object.keys(distribution).map((emotion, index) => ({
    name: emotion,
    value: distribution[emotion],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default EmotionPie;