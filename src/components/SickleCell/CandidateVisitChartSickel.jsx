// import { useState } from 'react';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// const CandidateVisitChartSickel = () => {
//     const [showGraph, setShowGraph] = useState(true);

//     // Function to handle the dropdown change
//     const handleSelectChange = (e) => {
//         const selectedValue = e.target.value;
//         setShowGraph(selectedValue === "View Graph");
//     };

//     const data = [
//         { name: 'Jan', visits: 55 },
//         { name: 'Feb', visits: 155 },
//         { name: 'Mar', visits: 75 },
//         { name: 'Apr', visits: 40 },
//         { name: 'May', visits: 55 },
//         { name: 'Jun', visits: 45 },
//         { name: 'Jul', visits: 55 },
//         { name: 'Aug', visits: 185 },
//         { name: 'Sep', visits: 45 },
//         { name: 'Oct', visits: 145 },
//         { name: 'Nov', visits: 185 },
//         { name: 'Dec', visits: 50 },
//     ];

//     return (
//         <div className="bg-white p-6 shadow rounded-lg mt-6 w-full max-w-[40rem]">
//             <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-semibold">Candidate Visit</h1>
//                 <div className="flex items-center gap-2">
//                     <span className="font-medium">Sort By:</span>
//                     <select
//                         className="select select-sm select-bordered w-32 text-blue-600 font-bold"
//                         onChange={handleSelectChange}
//                     >
//                         <option>View Graph</option>
//                         <option>Hide Graph</option>
//                     </select>
//                 </div>
//             </div>

//             {showGraph && (
//                 <LineChart width={600} height={300} data={data}>
//                     <Line type="monotone" dataKey="visits" stroke="#333" strokeWidth={2} />
//                     <CartesianGrid stroke="#e0e0e0" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                 </LineChart>
//             )}
//         </div>
//     );
// };

// export default CandidateVisitChartSickel;


import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const CandidateVisitChartSickel = () => {
    const [showGraph, setShowGraph] = useState(true);

    // Function to handle the dropdown change
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setShowGraph(selectedValue === "View Graph");
    };

    const data = [
        { name: 'Jan', visits: 55 },
        { name: 'Feb', visits: 155 },
        { name: 'Mar', visits: 75 },
        { name: 'Apr', visits: 40 },
        { name: 'May', visits: 55 },
        { name: 'Jun', visits: 45 },
        { name: 'Jul', visits: 55 },
        { name: 'Aug', visits: 185 },
        { name: 'Sep', visits: 45 },
        { name: 'Oct', visits: 145 },
        { name: 'Nov', visits: 185 },
        { name: 'Dec', visits: 50 },
    ];

    return (
        <div className="bg-white p-2 shadow rounded-xl mt-2 w-full max-w-[40rem]">
            <div className="flex items-center justify-between mb-4 rounded-md">
                <h1 className="text-xl font-bold">Candidate Visit</h1>
                <div className="flex items-center gap-2">
                    <span className="font-medium">Sort By:</span>
                    <select
                        className="select select-sm select-bordered w-32 text-violet-600 font-bold"
                        onChange={handleSelectChange}
                    >
                        <option>View Graph</option>
                        <option>Hide Graph</option>
                    </select>
                </div>
            </div>

            {showGraph && (
                <LineChart width={600} height={300} data={data}>
                    {/* Adding a gradient for the line */}
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#333" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="visits" stroke="#333" strokeWidth={2} fill="url(#colorVisits)" />
                    <CartesianGrid stroke="#e0e0e0" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A9A9A9' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A9A9A9' }} />
                    <Tooltip />
                </LineChart>
            )}
        </div>
    );
};

export default CandidateVisitChartSickel;