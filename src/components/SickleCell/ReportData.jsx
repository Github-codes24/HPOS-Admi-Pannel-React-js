import React, { useState } from 'react';

const ReportData = () => {
    const [showMore, setShowMore] = useState(false); // State to toggle view

    const stats = [
        { title: 'Normal', value: '23,425', color: 'bg-white' },
        { title: 'Sickle Cell Trait', value: '15,424', color: 'bg-white' },
        { title: 'Sickle Cell Disease', value: '8,001', color: 'bg-white' },
        { title: 'Total Card Distributed', value: '39', color: 'bg-white' },
    ];

    return (
        <div className="mt-6">
            {/* Flex container to align title and button on the same line */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Candidates Report</h2>
                <button
                    onClick={() => setShowMore(!showMore)} // Toggle showMore state
                    className="text-blue-500 font-semibold"
                >
                    {showMore ? 'View Less' : 'View More'}
                </button>
            </div>

            {showMore && ( // Show stats only if `showMore` is true
                <div className="flex grid-cols-4 gap-5 mt-4">
                    {stats.map((stat, index) => (
                        <div key={index} className={`p-4 ${stat.color} rounded shadow w-36`}>
                            <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
                            <p className="text-3xl my-2">{stat.value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReportData;
