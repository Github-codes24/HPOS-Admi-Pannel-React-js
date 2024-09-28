import React from 'react';

const SickleCellPage = () => {
  return (
    <>
    <div className="container mx-auto p-4">
    <div className="flex gap-4 mb-4">
        <h1 className="text-2xl font-bold">Screening Data</h1>
        <div className="flex gap-4 items-center">
            <div
                onClick={() => document.getElementById('filterdata').showModal()}
                className="text-blue-500 bg-blue-100 flex items-center px-2 h-5 border-2 border-blue-300 py-2 rounded cursor-pointer">Filter Data
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                </svg>
            </div>
            <div className="text-blue-500 bg-blue-100 flex items-center px-2 h-5 border-2 border-blue-300 py-2 rounded ">Edit Result</div>
        </div>
    </div>
    <table className="table w-full ">
        <thead>
            <tr>
                <th className="border px-4 py-2">Select</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Center Code</th>
                <th className="border px-4 py-2">Blood Status</th>
                <th className="border px-4 py-2">Result Status</th>
                <th className="border px-4 py-2">HPLC</th>
                <th className="border px-4 py-2">Card Status</th>
                <th className="border px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {candidates.map((item, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2 text-center">
                        <input type="checkbox" />
                    </td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.date}</td>
                    <td className="border px-4 py-2">{item.centerCode}</td>
                    <td className={`border px-4 py-2 ${item.bloodStatus === 'Pending' ? 'text-red-500' : 'text-blue-500'}`}>
                        {item.bloodStatus}
                    </td>
                    <td className={`border px-4 py-2 ${item.resultStatus === 'Pending' ? 'text-red-500' : 'text-blue-500'}`}>
                        {item.resultStatus}
                    </td>
                    <td className={`border px-4 py-2 ${item.hplc === 'Pending' ? 'text-red-500' : 'text-blue-500'}`}>
                        {item.hplc}
                    </td>
                    <td className={`border px-4 py-2 ${item.cardStatus === 'Pending' ? 'text-red-500' : 'text-blue-500'}`}>{item.cardStatus}</td>
                    <td className="border px-4 py-2 flex justify-around gap-4">
                        <button className="text-black hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </button>
                        <button className="text-black hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>
                        <button className="text-orange-500 hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

{/* Filter Modal Start */}

<dialog id="filterdata" className="modal">
    <div className="modal-box" style={{ width: '900px', height: '400px' }}>
        <div className="flex justify-between">
            <h1 className="font-bold">Filters</h1>
            <div className="flex gap-2 text-sm font-bold">
                <span
                    onClick={() => document.getElementById('filterdata').close()}
                    className="cursor-pointer">Cancel</span>
                <span className="text-blue-500 cursor-pointer">Save View</span>
            </div>
        </div>

        <div>
            <div className="flex gap-6 items-center">
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm  font-medium">Enter Employee Name</div>
                    <div className="collapse-content">
                        <label
                            className="input input-sm w-40 input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Enter Employee Name" />
                        </label>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium">Result Status</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm  font-medium">Select Date</div>
                    <div className="collapse-content">
                        <div>
                            <h1>To</h1>
                            <label
                                className="input input-sm w-40 input-bordered flex items-center gap-2">
                                <input type="date" className="grow" placeholder="Search" />
                            </label>
                            <h1>From</h1>
                            <label
                                className="input input-sm w-40 input-bordered flex items-center gap-2">
                                <input type="date" className="grow" placeholder="Search" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium">HPLC Status</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

            </div>
            <div className="flex gap-6 items-center">
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm  font-medium">Enter Center Code</div>
                    <div className="collapse-content">
                        <label
                            className="input input-sm w-40 input-bordered flex items-center gap-2">
                            <input
                                type="text" className="grow"
                                placeholder="Enter Center Code" />
                        </label>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium">Card Status</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div className="  items-center">
                <div className="collapse collapse-arrow w-56">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm  font-medium">Blood Status</div>
                    <div className="collapse-content">
                        <label
                            className="input input-sm w-40 input-bordered flex items-center gap-2">
                            <input
                                type="text" className="grow"
                                placeholder="Enter Center Code" />
                        </label>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
{/* Filter Modal end */}
</>
  );
};

export default SickleCellPage;
