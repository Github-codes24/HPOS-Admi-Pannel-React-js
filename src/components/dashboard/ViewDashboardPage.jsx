import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useCandidates from '../../hooks/candidateData';
import useCities from '../../hooks/useCities';
import Select from 'react-select';

const ViewDashboardPage = () => {
  const { fetchSubmiitedCandidates, submittedCandidates, fetchSubmittedFilterData } = useCandidates();
  const { fetchCities, getCities } = useCities();
  console.log("submittedCandidates", submittedCandidates, "getCities", getCities)
  const dialogRef = useRef(null);
  const closeDialog = () => {
    dialogRef.current.close();
  };
  const cityOptions = getCities?.map(city => ({ value: city, label: city }));
  useEffect(() => {
    fetchSubmiitedCandidates();
    fetchCities();
  }, [])

  const formik = useFormik({
    initialValues: {
      location: '',
      centerName: '',
      fromDate: '',
      toDate: '',
      age: '',
    },
    validationSchema: Yup.object({
      location: Yup.string(),
      centerName: Yup.string(),
      fromDate: Yup.date(),
      toDate: Yup.date(),
      age: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log('values', values)
      const data = {
        ...values, 
        // location:address.city,
      }
      fetchSubmittedFilterData(data);
      document.getElementById('filterdata').close();
    },
  });

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex gap-4 mb-4">
          <div className="flex gap-4 items-center">
            <div
              onClick={() => document.getElementById('filterdata').showModal()}
              className="text-blue-500 bg-blue-100 flex items-center px-2 h-5 border-2 border-blue-300 py-2 rounded cursor-pointer">Filter Data
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
            </div>
            <div className="text-blue-500 bg-blue-100 flex items-center px-2 h-5 border-2 border-blue-300 py-2 rounded "
              onClick={() => console.log('click')}>
              Export into Excel
            </div>
          </div>
        </div>
        <table className="table w-full ">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sr No</th>
              <th className="border px-4 py-2">Unique Id</th>
              <th className="border px-4 py-2">Center Name</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>

            {submittedCandidates?.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.UID}</td>
                <td className="border px-4 py-2">{item.centerName}</td>
                <td className="border px-4 py-2">{`${item?.address.city}, ${item?.address.state}`}</td>
                <td className="border px-4 py-2">{item.gender}</td>
                <td className="border px-4 py-2">{item.age}</td>
                <td className="border px-4 py-2">{new Date(item.createdAt).toLocaleDateString('en-GB')}</td>
              </tr>
            ))}
            {submittedCandidates.length === 0 && (
              <tr>
                <td colSpan="7" className="border px-4 py-2 text-center">No candidates submitted.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Filter Modal Start */}

      <dialog ref={dialogRef} id="filterdata" className="modal">
        <div className="modal-box" style={{ width: '900px', height: '400px' }}>
          <div className="flex justify-between">
            <h1 className="font-bold">Filters</h1>
            <div className="flex gap-2 text-sm font-bold">
              <span onClick={closeDialog}
                className="cursor-pointer">Cancel</span>
              <span className="text-blue-500 cursor-pointer"
                onClick={formik.handleSubmit}
              >Save View</span>
            </div>
          </div>

          <div>
            <div className="flex gap-6 items-center">
              <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-sm  font-medium">Search Location</div>
                <div className="collapse-content">
                  <Select
                    name="location"
                    options={cityOptions}
                    value={formik.values.location}
                    onChange={(option) => formik.setFieldValue('location', option)}
                    placeholder="Select a city..."
                    isClearable
                    isSearchable
                    className="w-full"
                  />
                </div>
              </div>
              <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-medium">Center Name</div>
                <div className="collapse-content">
                  <label
                    className="input input-sm w-40 input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="centerName"
                      value={formik.values.centerName}
                      onChange={formik.handleChange}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-sm  font-medium">Select Date</div>
                <div className="collapse-content">
                  <div>
                    <label>
                      Start Date
                      <input
                        type="date"
                        name="fromDate"
                        value={formik.values.fromDate}
                        onChange={formik.handleChange}
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label>
                      End Date
                      <input
                        type="date"
                        name="toDate"
                        value={formik.values.toDate}
                        onChange={formik.handleChange}
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ViewDashboardPage;
