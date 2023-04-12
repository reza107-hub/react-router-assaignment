import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Header2 from "./Header2";

const data = [
  { name: "Assignment-1", value: 60 },
  { name: "Assignment-2", value: 58 },
  { name: "Assignment-3", value: 58 },
  { name: "Assignment-4", value: 60 },
  { name: "Assignment-5", value: 60 },
  { name: "Assignment-6", value: 60 },
  { name: "Assignment-7", value: 60 },
  { name: "Assignment-8", value: 60 },
];

const label = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#000" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${data[index].name}: ${value}`}
    </text>
  );
}

const Statistics = () => {
  return (
    <div>
      <Header2>Statistics</Header2>
      <div className="flex justify-center h-full">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={360}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={label}
            />
            <Tooltip formatter={(value, name) => [value, name]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;