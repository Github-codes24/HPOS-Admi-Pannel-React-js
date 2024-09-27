import React, { useState } from 'react';

const CenterCountSickel = () => {
    const [viewMore, setViewMore] = useState(false);

    const handleSelectChange = (e) => {
        // Check if the selected value is "View More"
        setViewMore(e.target.value === "View More");
    };

    const data = [
        { srNo: 1, campName: 'Camp 1', date: '2024-09-01', count: 10 },
        { srNo: 2, campName: 'Camp 2', date: '2024-09-02', count: 20 },
        { srNo: 3, campName: 'Camp 3', date: '2024-09-03', count: 30 },
        { srNo: 4, campName: 'Camp 4', date: '2024-09-04', count: 40 },
        { srNo: 5, campName: 'Camp 5', date: '2024-09-05', count: 50 },
        { srNo: 6, campName: 'Camp 6', date: '2024-09-06', count: 60 },
        { srNo: 7, campName: 'Camp 7', date: '2024-09-07', count: 70 },
        { srNo: 8, campName: 'Camp 8', date: '2024-09-08', count: 80 },
        { srNo: 9, campName: 'Camp 9', date: '2024-09-09', count: 90 },
        { srNo: 10, campName: 'Camp 10', date: '2024-09-10', count: 100 },
        { srNo: 11, campName: 'Camp 11', date: '2024-09-11', count: 110 },
        { srNo: 12, campName: 'Camp 12', date: '2024-09-12', count: 120 },
        { srNo: 13, campName: 'Camp 13', date: '2024-09-13', count: 130 },
        { srNo: 14, campName: 'Camp 14', date: '2024-09-14', count: 140 },
        { srNo: 15, campName: 'Camp 15', date: '2024-09-15', count: 150 },
        { srNo: 16, campName: 'Camp 16', date: '2024-09-16', count: 160 },
        { srNo: 17, campName: 'Camp 17', date: '2024-09-17', count: 170 },
        { srNo: 18, campName: 'Camp 18', date: '2024-09-18', count: 180 },
        { srNo: 19, campName: 'Camp 19', date: '2024-09-19', count: 190 },
        { srNo: 20, campName: 'Camp 20', date: '2024-09-20', count: 200 },
    ];

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5 border border-gray-300">
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <h1 className="text-xl font-bold text-gray-800">Center Count</h1>
                    <div className="relative">
                        <select
                            onChange={handleSelectChange}
                            className="font-bold text-blue-600 w-[120px] h-[30px] appearance-none bg-transparent border-none pr-[25px]"
                        >
                            <option value="View Less">View Less</option>
                            <option value="View More">View More</option>
                        </select>
                       
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-[5px] top-[50%] transform -translate-y-[50%] text-blue-600"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path fill="currentColor" d="M7.41,8.59L12,13.17l4.59,-4.58L18.01,10l-6,6l-6,-6z" />
                        </svg>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr.No</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Camp Name</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            data.slice(0, viewMore ? data.length : 4).map((item) => (
                                <tr key={item.srNo}>
                                    <td className="px-2 py-3 whitespace-nowrap">{item.srNo}</td>
                                    <td className="px-2 py-3 whitespace-nowrap">{item.campName}</td>
                                    <td className="px-2 py-3 whitespace-nowrap">{item.date}</td>
                                    <td className="px-2 py-3 whitespace-nowrap">{item.count}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CenterCountSickel;