// import React, { useState } from 'react';

// const ReportSickel = () => {
//     const [viewMore, setViewMore] = useState(false);

//     const toggleView = () => {
//         setViewMore(!viewMore);
//     };

//     return (
//         <div className="p-4">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold">Candidates Report</h2>
//                 <button
//                     onClick={toggleView}
//                     className="text-blue-500 hover:underline"
//                 >
//                     {viewMore ? 'View Less' : 'View More'}
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div className="bg-blue-200 p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold">Normal</h3>
//                     <p className="text-2xl font-bold">23,425</p>
//                     {viewMore && <p className="mt-2 text-gray-700">Additional information about Normal.</p>}
//                 </div>
//                 <div className="bg-green-200 p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold">Sickle Cell Trait</h3>
//                     <p className="text-2xl font-bold">989</p>
//                     {viewMore && <p className="mt-2 text-gray-700">Additional information about Sickle Cell Trait.</p>}
//                 </div>
//                 <div className="bg-orange-200 p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold">Sickle Cell Disease</h3>
//                     <p className="text-2xl font-bold">39</p>
//                     {viewMore && <p className="mt-2 text-gray-700">Additional information about Sickle Cell Disease.</p>}
//                 </div>
//                 <div className="bg-teal-200 p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold">Total Card Distributed</h3>
//                     <p className="text-2xl font-bold">39</p>
//                     {viewMore && <p className="mt-2 text-gray-700">Additional information about Total Card Distributed.</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReportSickel;



import React, { useState } from 'react';

const ReportSickel = () => {
    const [viewMore, setViewMore] = useState(false);

    const toggleView = () => {
        setViewMore(!viewMore);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2 bg-white rounded-md border border-gray-300 p-2">
                <h2 className="text-xl font-bold">Candidates Report</h2>
                <button
                    onClick={toggleView}
                    className="text-blue-500 hover:underline"
                >
                    {viewMore ? 'View Less' : 'View More'}
                </button>
            </div>

            {viewMore && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-200 p-3 rounded shadow">
                        <h3 className="text-sm font-semibold">Normal</h3>
                        <p className="text-xl font-bold">23,425</p>
                    </div>
                    <div className="bg-green-200 p-3 rounded shadow">
                        <h3 className="text-sm font-semibold">Sickle Cell Trait</h3>
                        <p className="text-xl font-bold">989</p>
                    </div>
                    <div className="bg-orange-200 p-3 rounded shadow">
                        <h3 className="text-sm font-semibold">Sickle Cell Disease</h3>
                        <p className="text-xl font-bold">39</p>
                    </div>
                    <div className="bg-teal-200 p-3 rounded shadow">
                        <h3 className="text-sm font-semibold">Total Card Distributed</h3>
                        <p className="text-xl font-bold">39</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportSickel;