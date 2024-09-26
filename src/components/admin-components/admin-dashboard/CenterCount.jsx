import React, { useState } from 'react'

const CenterCount = () => {
    const [viewMore, setViewMore] = useState(false);

    const handleSelectChange = (e) => {
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

    return <>
        <div className=" w-72 bg-base-100 shadow-xl mt-5 border-2 border-gray-300 ">
            <div className=" ">
                <div className='flex justify-between my-5 mx-2'>
                    <h1 className='font-bold flex items-center'>Center Count</h1>
                    <select onChange={handleSelectChange} className="select font-bold text-blue-600 w-32">
                        <option className='font-bold'>Less</option>
                        <option >View More</option>
                    </select>
                </div>
                <table className='table border-none text-sm '>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Camp Name</th>
                            <th>Date</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data
                                .slice(0, viewMore ? data.length : 4)
                                .map((item, index) => {
                                    console.log(`Rendering item with key: ${item.srNo}-${index}`); // Log key for debugging
                                    return (
                                        <tr key={`${item.srNo}-${index}`}>
                                            <td>{item.srNo}</td>
                                            <td>{item.campName}</td>
                                            <td>{item.date}</td>
                                            <td>{item.count}</td>
                                        </tr>
                                    );
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default CenterCount