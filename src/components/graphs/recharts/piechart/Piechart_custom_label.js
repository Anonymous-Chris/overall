import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group io', value: 210 },
  { name: 'Group oD', value: 230 },
  { name: 'Group osaD', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="small" x={x} y={y} fill="white" textAnchor={x > cx ? 'middle' : 'middle'} dominantBaseline="central" >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ payload }) => {
  return (
    <div>
      <div className="ant-popover-arrow" />
      <div className="">
        <b>{payload?.[0]?.payload?.name}</b>
        <span className=" ">
          <p>{payload?.[0]?.payload?.value} </p>
        </span>
      </div>
    </div>
  );
};


export default function Piechart_custom_label() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} ></Tooltip>
        </PieChart>
      </ResponsiveContainer>
    );
  }
