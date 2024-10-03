import React, { useState, useEffect } from 'react'
import useBreastCancer from '../../hooks/useBreastCancer';

const CenterCount = () => {
    const [viewMore, setViewMore] = useState(false);
    const {fetchBreastCancerCenterCount, centerCountData} = useBreastCancer();
    console.log("Breast centerCountData", centerCountData)

    useEffect(() => {
        fetchBreastCancerCenterCount();
    }, [])

    const handleSelectChange = (e) => {
        setViewMore(e.target.value === "View More");
    };

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
                            centerCountData && centerCountData
                                .slice(0, viewMore ? centerCountData.length : 4)
                                .map((item, index) => {
                                    return (
                                        <tr key={`${index}`}>
                                             <td>{index + 1}</td> 
                                            <td>{item?.centerName}</td>
                                            <td>{item?.date}</td>
                                            <td>{item?.totalCount}</td>
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