import React from 'react';
import {PieChart,Pie,Cell,ResponsiveContainer,CartesianGrid,Tooltip} from 'recharts'; 

class Piecharts extends React.Component{
    render(){
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
          return (
            <text className="small" x={x} y={y} fill="white" textAnchor={x > cx ? 'middle' : 'middle'} dominantBaseline="central">
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
                    <p className="desc">
                      <small>{payload?.[0]?.payload?.value}</small>
                    </p>
                    <p>{payload?.[0]?.payload?.value} %</p>
                  </span>
                </div>
              </div>
            );
          };

        const data01 = [
            {
              "name": "Group A",
              "value": 400
            },
            {
              "name": "Group B",
              "value": 300
            },
            {
              "name": "Group C",
              "value": 300
            },
            {
              "name": "Group D",
              "value": 200
            },
            {
              "name": "Group E",
              "value": 278
            },
            {
              "name": "Group F",
              "value": 189
            }
          ];
          const data02 = [
            {
              "name": "Group A",
              "value": 2400
            },
            {
              "name": "Group B",
              "value": 4567
            },
            {
              "name": "Group C",
              "value": 1398
            },
            {
              "name": "Group D",
              "value": 9800
            },
            {
              "name": "Group E",
              "value": 3908
            },
            {
              "name": "Group F",
              "value": 4800
            }
          ];
        return(
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                <PieChart width={400} height={400}> 
                <CartesianGrid strokeDasharray="3 3" />
                
                <Pie
                    data={data01}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
            
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                 <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#82ca9d" label />
                 <Tooltip content={<CustomTooltip />} ></Tooltip>
                </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default Piecharts;