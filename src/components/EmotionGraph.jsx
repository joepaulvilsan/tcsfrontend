// src/components/EmotionGraph.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const EmotionGraph = ({ timeline }) => {
  // Convert the timeline data so that we can use the start time (extracted from time_segment) as the x-axis.
  const data = timeline.map((segment) => {
    const start = parseFloat(segment.time_segment.split("-")[0]);
    return {
      time: start,
      score: segment.score,
      emotion: segment.emotion,
    };
  });

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" label={{ value: "Time (s)", position: "insideBottomRight", offset: 0 }} />
      <YAxis domain={[0, 1]} label={{ value: "Confidence Score", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default EmotionGraph;