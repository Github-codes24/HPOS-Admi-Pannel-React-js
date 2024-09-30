import React, { useEffect } from 'react';
import useCandidates from '../../hooks/candidateData';
import fourth from '../../assets/4.png';
import useBreastCancer from '../../hooks/Usebreastcancer';

const CountingData = () => {
    const { fetchBreastCancerCount, breastCancerCount } = useBreastCancer();

    useEffect(() => {
        fetchBreastCancerCount();
    }, []); // Added dependency to avoid lint warnings

    const stats = [
        { img: fourth, title: 'Total Female', value: breastCancerCount?.totalCount || 0, color: 'bg-white' }
    ];

    return (
        <div className="p-8 bg-gray-100 flex-1">
            <div className="grid grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className={`p-4 ${stat.color} rounded shadow w-36`}>
                        <img className='my-2' src={stat.img} alt={stat.title} />
                        <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
                        <p className="text-3xl my-2">{stat.value.toLocaleString()}</p> {/* Format number with commas */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountingData;