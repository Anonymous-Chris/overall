import React, { useState, useCallback } from "react";
import { ResponsiveContainer, Cell,PieChart, Pie, Sector, Tooltip } from "recharts";

const data = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  },
  {
    name: "Group E",
    value: 278
  },
  {
    name: "Group F",
    value: 189
  }
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

    const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        midAngle,
    
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const x = cx + (outerRadius - 40) * cos;
    const y = cy + (outerRadius - 40) * sin;

  return (
    <Sector
      cx={x}
      cy={y}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill="red"
    >

    </Sector>
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

export default function Piechartpopup() {
  const [activeIndex, setActiveIndex] = useState(null);
  const onMouseOver = useCallback((data, index) => {
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          activeShape={renderActiveShape}
         
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip content={<CustomTooltip />}></Tooltip>
      </PieChart>
    </ResponsiveContainer>
  );
}
