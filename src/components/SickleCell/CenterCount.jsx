import React, { useState, useEffect } from 'react'
import useSickleCell from '../../hooks/useSickleCell';

const CenterCount = () => {
    const [viewMore, setViewMore] = useState(false);
    const {fetchSickleCellCenterCount, centerCountData} = useSickleCell();
    console.log("SickleCell centerCountData", centerCountData)
    const {
        totalData = [],
        totalCard = 0,
        totalDistributed = 0,
        totalPrinted = 0,
        totalRemaining = 0,
    } = centerCountData || {};

    useEffect(() => {
        fetchSickleCellCenterCount();
    }, [])

    const handleSelectChange = (e) => {
        setViewMore(e.target.value === "View More");
    };

    return (
        <div className="container mx-auto mt-10">
            {/* Main Heading */}
            <h1 className="text-center text-2xl font-bold">Card Distribution</h1>
            
            {/* Summary Data */}
            <div className="grid grid-cols-4 gap-4 mt-8 text-center">
                <div>
                    <h2 className="font-bold">Total Card</h2>
                    <p className="text-xl">{totalCard}</p>
                </div>
                <div>
                    <h2 className="font-bold">Total Printed</h2>
                    <p className="text-xl">{totalPrinted}</p>
                </div>
                <div>
                    <h2 className="font-bold">Total Distributed</h2>
                    <p className="text-xl">{totalDistributed}</p>
                </div>
                <div>
                    <h2 className="font-bold">Distribution Remaining</h2>
                    <p className="text-xl">{totalRemaining}</p>
                </div>
            </div>

            <hr className="border-gray-300 my-8" />

            {/* Center Count Section */}
            <div className="bg-base-100 shadow-xl mt-5 border-2 border-gray-300">
                <div className="flex justify-between my-5 mx-2">
                    <h2 className="font-bold flex items-center">Center Count</h2>
                    <select onChange={handleSelectChange} className="select font-bold text-blue-600 w-32">
                        <option>View Less</option>
                        <option>View More</option>
                    </select>
                </div>

                {/* Table */}
                <table className="table-auto border-none text-sm w-full">
                    <thead>
                        <tr className="text-left">
                            <th>Sr.No</th>
                            <th>Camp Name</th>
                            <th>Date</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalData && totalData
                                .slice(0, viewMore ? totalData.length : 4)
                                .map((item, index) => (
                                    <tr key={`${item.srNo}-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{item.centerName}</td>
                                        <td>{item.date}</td>
                                        <td>{item.totalCount}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CenterCount