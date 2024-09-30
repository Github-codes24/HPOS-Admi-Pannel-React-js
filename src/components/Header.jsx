import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { fromDateCountAtom, toDateCountAtom } from '../state/cervicalCancerState';

const Header = ({ activeTab, onSearch}) => {
//     const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
    const [fromDate, setFromDate] = useRecoilState(fromDateCountAtom);
    const [toDate, setToDate] = useRecoilState(toDateCountAtom);
    const [error, setError] = useState('');

    const handleSearch = () => {
        setError('');
        console.log('onSearch', onSearch,fromDate, toDate)
        if (onSearch) {
            onSearch({fromDate, toDate });
        }
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
                    <h1 className="text-sm bg-blue-100 ml-2 rounded-lg p-1">Export Info PDF</h1>
                </div>
            </div>
        </div>
    );
};

export default Header