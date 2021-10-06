import React from 'react';
import {LineChart, XAxis, YAxis,CartesianGrid,Line,ResponsiveContainer} from 'recharts';


class Rechartsbar extends React.Component{
    render(){
        const data =[
            {"uv":41,
            "pv":32},
            {"uv":12,
            "pv":27},
            {"uv":41,
            "pv":28},
            {"uv":19,
            "pv":20},
            {"uv":41,
            "pv":32},
            {"uv":12,
            "pv":27},
            {"uv":41,
            "pv":28},
            {"uv":19,
            "pv":20}
        ]
        return(
        <div style={{ width: '100%', height: 300 }}>
             <ResponsiveContainer >
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        );
    }
}

export default Rechartsbar;