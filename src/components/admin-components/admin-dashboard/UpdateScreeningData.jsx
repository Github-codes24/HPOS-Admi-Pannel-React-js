import React from 'react';
import person from '../../assets/1.png';

const UpdateScreeningData = () => {
    const data = [
        { 
            name: 'Sahil Khan', 
            maritalStatus: 'Married', 
            age: 26, 
            bloodStatus: 'Submitted', 
            resultStatus: 'Submitted', 
            cardStatus: 'Handout', 
            location: 'Hingna' },
        { 
            name: 'Rahul Khan', 
            maritalStatus: 'Single', 
            age: 45, 
            bloodStatus: 'Pending', 
            resultStatus: 'Pending', 
            cardStatus: 'Handout', 
            location: 'Koradi' },
        // Add more data objects here
    ];

    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold">Screening Data</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Marital Status</th>
                            <th>Center Code</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>Category</th>
                            <th>Caste</th>
                            <th>Location</th>
                            <th>Result Status</th>
                            <th>Card Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className='flex gap-2 items-center'>
                                    <input type="checkbox" className="checkbox" />
                                    <img src={person} className='bg-blue-200 rounded-md p-1' alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <select className="select select-sm select-bordered w-full max-w-xs">
                                        <option>Married</option>
                                        <option>Single</option>
                                    </select>
                                </td>
                                <td>Center Code</td>
                                <td>{item.age}</td>
                                <td>
                                    <select className="select select-sm select-bordered w-full max-w-xs">
                                        <option>Submitted</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="select select-sm select-bordered w-full max-w-xs">
                                        <option>Submitted</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="select select-sm select-bordered w-full max-w-xs">
                                        <option>Submitted</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                                <td>{item.location}</td>
                                <td>
                                    <select className="select select-sm select-bordered w-full max-w-xs">
                                        <option>Submitted</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                                <td>
                                    <button className="btn btn-outline btn-xs">Handout</button>
                                </td>
                                <td>
                                    <button className=" text-yellow-600 btn-xs">
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

            {/* <div className="flex justify-end mt-4">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-primary ml-2">Save</button>
            </div> */}
        </div>
    );
};

export default UpdateScreeningData;
