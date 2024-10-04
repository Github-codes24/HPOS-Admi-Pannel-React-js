import React, { useEffect } from 'react';
import useCandidates from '../../hooks/candidateData';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
import fourth from '../../assets/4.png';
import { useNavigate } from 'react-router-dom';

const CountingData = () => {
    const { fetchCandidateCount, candidateCount } = useCandidates();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCandidateCount('', '');
    }, []);

    const onView = () => {
        console.log('Navigating to /view-dashboard-page'); // Debugging log
        navigate('/view-dashboard-page');
    }

    const stats = [
        { img: first, title: 'Total', value: candidateCount?.totalCount || 0, color: 'bg-white' },
        { img: second, title: 'Sickle Cell', value: candidateCount?.allSickleCellCancerPatients || 0, color: 'bg-white' },
        { img: third, title: 'Breast Cancer', value: candidateCount?.allBreastCancerPatients || 0, color: 'bg-white' },
        { img: fourth, title: 'Cervical Cancer', value: candidateCount?.allCervicalCancerPatients || 0, color: 'bg-white' }
    ];

    return (
        <div className="p-8 bg-gray-100 flex-1">
            <div className="grid grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-4 ${stat.color} rounded shadow w-36 cursor-pointer`} // Added cursor-pointer to show it's clickable
                        onClick={stat.title === 'Total' ? onView : null} // Apply onClick to the whole div for 'Total'
                    >
                        <img className='my-2' src={stat.img} alt={stat.title} />
                        <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
                        <p className="text-3xl my-2">{stat.value.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountingData;
