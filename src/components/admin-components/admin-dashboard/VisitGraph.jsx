import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const PatientVisitChart = () => {
    const [showGraph, setShowGraph] = useState(true);

    // Function to handle the dropdown change
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "Hide Graph") {
            setShowGraph(false);
        } else if (selectedValue === "View Graph") {
            setShowGraph(true);
        }
    };
    const data = [
        { name: 'Jan', visits: 50 },
        { name: 'Feb', visits: 80 },
        { name: 'Mar', visits: 100 },
        { name: 'Apr', visits: 120 },
        { name: 'May', visits: 140 },
        { name: 'Jun', visits: 130 },
    ];

    return (
        <div className="bg-white p-4 shadow rounded mt-6">
            <div className="flex  items-center mt-5 justify-between mb-7 gap-2 h-2">
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
            {showGraph &&
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            }
        </div>
    );
};
export default PatientVisitChart