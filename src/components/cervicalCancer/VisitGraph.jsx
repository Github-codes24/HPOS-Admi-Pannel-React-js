import React, { useState } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const VisitGraph = () => {
    const [showGraph, setShowGraph] = useState(true);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setShowGraph(selectedValue === "View Graph");
    };

    const data = [
        { name: 'Jan', uv: 100 },
        { name: 'Feb', uv: 120 },
        { name: 'Mar', uv: 80 },
        { name: 'Apr', uv: 150 },
        { name: 'May', uv: 170 },
    ];

    return (
        <div className="bg-white p-4 shadow rounded mt-6">
            <div className="flex items-center mt-5 justify-between mb-7 gap-2 h-2">
                <h1 className="text-lg flex">Candidate Visit</h1>
                <div className="flex gap-2">
                    <h1 className="flex items-center">Sort By</h1>
                    <select
                        className="select select-sm select-bordered w-32 text-blue-600 font-bold"
                        onChange={handleSelectChange}
                    >
                        <option>View Graph</option>
                        <option>Hide Graph</option>
                    </select>
                </div>
            </div>
            {showGraph && (
                <AreaChart
                    width={600}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            )}
        </div>
    );
};

export default VisitGraph;
