// import React, { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { fromDateCountAtom, toDateCountAtom } from '../state/cervicalCancerState';
// import useCandidates from '../hooks/candidateData';
// import useBreastCancer from '../hooks/useBreastCancer';
// import useCervicalCancer from '../hooks/useCervicalCancer';
// import useSickleCell from '../hooks/useSickleCell';

// const Header = ({ activeTab, onSearch }) => {
//     const { fetchCandidateCount } = useCandidates();
//     const { fetchBreastCancerCount } = useBreastCancer();
//     const { fetchCervicalCancerCount } = useCervicalCancer();
//     const { fetchSickleCellCount } = useSickleCell();
//     const [fromDate, setFromDate] = useRecoilState(fromDateCountAtom);
//     const [toDate, setToDate] = useRecoilState(toDateCountAtom);
//     const [error, setError] = useState('');

//     const handleSearch = () => {
//         setError('');
//         fetchCandidateCount(fromDate, toDate);
//         fetchBreastCancerCount(fromDate, toDate)
//         fetchCervicalCancerCount(fromDate, toDate);
//         fetchSickleCellCount(fromDate, toDate)
//         // if (onSearch) {
//         //     onSearch({fromDate, toDate });
//         // }
//         setFromDate(fromDate);
//         setToDate(toDate);
//     };
//     return (
//         <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">{activeTab}</h1>
//             <div>
//                 <h1 className="text-lg">Generate Dashboard</h1>
//                 {error && <p className="text-red-500">{error}</p>}
//                 <div className="flex gap-2 mt-2">
//                     <h1 className="font-bold my-1">From</h1>
//                     <input
//                         className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg"
//                         type="date"
//                         value={fromDate}
//                         onChange={(e) => setFromDate(e.target.value)}
//                     />
//                     <h1 className="font-bold my-1">To</h1>
//                     <input
//                         className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg"
//                         type="date"
//                         value={toDate}
//                         onChange={(e) => setToDate(e.target.value)}
//                     />
//                     <button
//                         onClick={handleSearch}
//                         className="text-sm bg-blue-500 text-white ml-2 rounded-lg p-1"
//                     >
//                         Search
//                     </button>
//                     <h1 className="text-sm bg-blue-100 ml-2 rounded-lg p-1">Export Info PDF</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import jsPDF from 'jspdf';  // PDF export functionality
import { fromDateCountAtom, toDateCountAtom } from '../state/cervicalCancerState'; // State management
import useCandidates from '../hooks/candidateData';
import useBreastCancer from '../hooks/useBreastCancer';
import useCervicalCancer from '../hooks/useCervicalCancer';
import useSickleCell from '../hooks/useSickleCell';

// Original Header component with extended functionality
const Header = ({ activeTab, onSearch }) => {
    const { fetchCandidateCount, candidateCount } = useCandidates();
    const { fetchBreastCancerCount, breastCancerCount } = useBreastCancer();
    const { fetchCervicalCancerCount, cervicalCancerCount } = useCervicalCancer();
    const { fetchSickleCellCount, sickleCellCount } = useSickleCell();
    
    const [fromDate, setFromDate] = useRecoilState(fromDateCountAtom);
    const [toDate, setToDate] = useRecoilState(toDateCountAtom);
    const [error, setError] = useState('');

    // Updated handleSearch function
    const handleSearch = () => {
        setError('');
        try {
            fetchCandidateCount(fromDate, toDate); // General Cancer data
            fetchBreastCancerCount(fromDate, toDate); // Breast Cancer data
            fetchCervicalCancerCount(fromDate, toDate); // Cervical Cancer data
            fetchSickleCellCount(fromDate, toDate); // Sickle Cell data
        } catch (err) {
            console.error('Error fetching data', err);
            setError('Failed to fetch data');
        }
        // If additional search handling needed, call the onSearch prop
        if (onSearch) {
            onSearch({ fromDate, toDate });
        }
        setFromDate(fromDate);
        setToDate(toDate);
    };

    // New PDF export function
    const exportToPDF = () => {
        let dataToExport = null;
        if (activeTab === 'Sickle Cell') {
            dataToExport = sickleCellCount;
        } else if (activeTab === 'Breast Cancer') {
            dataToExport = breastCancerCount;
        } else if (activeTab === 'Cervical Cancer') {
            dataToExport = cervicalCancerCount;
        } else {
            dataToExport = candidateCount;
        }
    
        if (!dataToExport) {
            setError('No data to export. Please search first.');
            return;
        }
    
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(`Dashboard Data Export - ${activeTab}`, 10, 10); // Use backticks here
        doc.setFontSize(12);
        doc.text(`From Date: ${fromDate || 'N/A'}`, 10, 20); // Use backticks here
        doc.text(`To Date: ${toDate || 'N/A'}`, 10, 30); // Use backticks here
    
        // Data summary based on activeTab
        if (activeTab === 'Sickle Cell') {
            const { totalCount, allMalePatientsCount, allFemalePatientCount } = sickleCellCount;
            doc.text(`Total Patients: ${totalCount}`, 10, 50); // Use backticks here
            doc.text(`Male Patients: ${allMalePatientsCount}`, 10, 60); // Use backticks here
            doc.text(`Female Patients: ${allFemalePatientCount}`, 10, 70); // Use backticks here
        } else if (activeTab === 'Breast Cancer') {
            const { totalCount } = breastCancerCount;
            doc.text(`Total Breast Cancer Patients: ${totalCount}`, 10, 50); // Use backticks here
        } else if (activeTab === 'Cervical Cancer') {
            const { totalCount } = cervicalCancerCount;
            doc.text(`Total Cervical Cancer Patients: ${totalCount}`, 10, 50); // Use backticks here
        } else {
            const { totalCount, allSickleCellCancerPatients, allBreastCancerPatients, allCervicalCancerPatients } = candidateCount;
            doc.text(`Total Candidates: ${totalCount}`, 10, 50); // Use backticks here
            doc.text(`Sickle Cell Patients: ${allSickleCellCancerPatients}`, 10, 60); // Use backticks here
            doc.text(`Breast Cancer Patients: ${allBreastCancerPatients}`, 10, 70); // Use backticks here
            doc.text(`Cervical Cancer Patients: ${allCervicalCancerPatients}`, 10, 80); // Use backticks here
        }
    
        doc.save(`${activeTab}-info.pdf`); // Use backticks here
    };
    return (
        <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{activeTab}</h1>
            <div>
                <h1 className="text-lg">Generate Dashboard</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex gap-2 mt-2">
                    <h1 className="font-bold my-1">From</h1>
                    <input
                        className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <h1 className="font-bold my-1">To</h1>
                    <input
                        className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className="text-sm bg-blue-500 text-white ml-2 rounded-lg p-1"
                    >
                        Search
                    </button>
                    <h1
                        className="text-sm bg-blue-100 ml-2 rounded-lg p-1 cursor-pointer"
                        onClick={exportToPDF}
                    >
                        Export Info PDF
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;