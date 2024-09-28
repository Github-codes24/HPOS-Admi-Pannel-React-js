import React, { useEffect } from 'react'
import useCandidates from '../../hooks/candidateData';

const CountingData = () => {
    const{fetchCandidateCount, candidateCount} = useCandidates();
    console.log(candidateCount);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    useEffect(() => {
        fetchCandidateCount();
    }, []);

  return (
    <div className="p-8 bg-gray-100 flex-1">
    <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Total</h2>
            <p className="text-3xl">{candidateCount?.totalCount || 0}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Sickle Cell</h2>
            <p className="text-3xl">{candidateCount?.allSickleCellCancerPatients || 0}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Breast Cancer</h2>
            <p className="text-3xl">{candidateCount?.allBreastCancerPatients || 0}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Cervical Cancer</h2>
            <p className="text-3xl">{candidateCount?.allCervicalCancerPatients || 0}</p>
        </div>
    </div>
</div>

  )
}

export default CountingData