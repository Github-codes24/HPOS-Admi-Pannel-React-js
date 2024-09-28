import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const GraphData = () => {
    const data = [
        { name: 'Jan', visits: 100 },
        { name: 'Feb', visits: 120 },
        { name: 'Mar', visits: 80 },
        { name: 'Apr', visits: 150 },
        { name: 'May', visits: 170 },
    ];


    const pieData = [
        { name: 'Sickle Cell', value: 15424 },
        { name: 'Breast Cancer', value: 8001 },
        { name: 'Cervical Cancer', value: 8001 },
    ];
  return (
    <>
    <div className="bg-white p-4 shadow rounded mb-8">
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="visits" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>
    </>
  )
}

export default GraphData