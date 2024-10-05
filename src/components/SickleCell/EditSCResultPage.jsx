import React, { useEffect, useRef, useState } from 'react'
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import useCities from '../../hooks/useCities';
import useSickleCell from '../../hooks/useSickleCell';

const EditSCResultPage = () => {
    const { fetchAllSickleCell, fetchFilterData, deletePatient, deletePatientData, sickleCellData,
        updateSickleCellResult
    } = useSickleCell();
    const [loading, setLoading] = useState(true);
    const { fetchCities, getCities } = useCities();
    console.log('sickleCellData', sickleCellData)

    const dialogRef = useRef(null);
    const navigate = useNavigate();
    const closeDialog = () => {
        dialogRef.current.close();
    };

    useEffect(() => {
        fetchAllSickleCell().finally(() => setLoading(false));
        fetchFilterData({})
        fetchCities();
    }, []);

    const formik = useFormik({
        initialValues: {
            personalName: '',
            resultStatus: '',
            fromDate: '',
            toDate: '',
            centerCode: '',
            bloodStatus: '',
            cardStatus: '',
        },
        validationSchema: Yup.object({
            personalName: Yup.string(),
            resultStatus: Yup.string(),
            fromDate: Yup.date(),
            toDate: Yup.date(),
            centerCode: Yup.string(),
            bloodStatus: Yup.string(),
            cardStatus: Yup.string(),
        }),
        onSubmit: (values) => {
            fetchFilterData(values); // Send form values to your API
            document.getElementById('filterdata').close(); // Close modal after submit
        },
    });

    // Yup validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        maritalStatus: Yup.string(),
        centerCode: Yup.string(),
        age: Yup.number(),
        gender: Yup.string(),
        category: Yup.string(),
        caste: Yup.string(),
        location: Yup.string(),
        bloodGroup: Yup.string(),
        resultStatus: Yup.string(),
        cardStatus: Yup.string(),
    });

    const transformDataForAPI = (data) => {
        return {
            updates: data.map((item) => ({
                id: item._id,
                data: {
                    ...item
                },
            })),
        };
    };

    const handleSubmit = (values, { setSubmitting }) => {
        const transformedData = transformDataForAPI(values.sickleCellData);
        // Update cervical cancer data
        updateSickleCellResult(transformedData)
            .then(() => {
                console.log('Data updated successfully', transformedData);
            })
            .catch((err) => {
                console.error('Failed to update data', err);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const onDelete = (row) => deletePatient(row?._id);

    const cityOptions = getCities?.flat().map(city => ({
        value: city, label: city
    }));

    return (
        <>
            <div className="mx-auto mt-5 p-5 bg-white shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <button onClick={() => navigate(-1)} className="text-xl mr-4">
                            ← {/* Back Arrow */}
                        </button>
                        <h1 className="text-2xl font-bold">Sickle Cell</h1>
                    </div>
                    {/* <div>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mr-2">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div> */}
                    <div
                        onClick={() => document.getElementById('filterdata').showModal()}
                        className="text-blue-500 bg-blue-100 flex items-center px-2 h-5 border-2 border-blue-300 py-2 rounded cursor-pointer">Filter Data
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                        </svg>
                    </div>
                </div>

                <Formik
                    initialValues={{
                        sickleCellData: sickleCellData?.length > 0 ? sickleCellData?.map((item) => ({
                            _id: item._id || null,
                            personalName: item.personalName || '',
                            maritalStatus: item.maritalStatus || 'Single',
                            centerCode: item.centerCode || '',
                            age: item.age || '',
                            gender: item.gender || 'Male',
                            category: item.category || 'General',
                            caste: item.caste || 'OBC',
                            location: item.location || '',
                            bloodGroup: item.bloodGroup || 'A+',
                            resultStatus: item.resultStatus || 'Normal',
                            cardStatus: item.cardStatus || 'Pending'
                        })) : []
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ values, handleChange, isSubmitting }) => (
                        <Form>
                            <table className="table-auto w-full mt-5 border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th>Name</th>
                                        <th>Marital Status</th>
                                        <th>Center Code</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Category</th>
                                        <th>Caste</th>
                                        <th>Location</th>
                                        <th>Blood Group</th>
                                        <th>Result Status</th>
                                        <th>Card Status</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {values.sickleCellData?.map((row, index) => (
                                        <tr key={index} className="border-b">
                                            <td>
                                                <Field
                                                    type="text"
                                                    name={`sickleCellData[${index}].personalName`}
                                                    value={row.personalName}
                                                    onChange={handleChange}
                                                    className="input input-sm w-full"
                                                />
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].maritalStatus`}
                                                    value={row.maritalStatus}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    type="text"
                                                    name={`sickleCellData[${index}].centerCode`}
                                                    value={row.centerCode}
                                                    onChange={handleChange}
                                                    className="input input-sm w-full"
                                                />
                                            </td>
                                            <td>
                                                <Field
                                                    type="text"
                                                    name={`sickleCellData[${index}].age`}
                                                    value={row.age}
                                                    onChange={handleChange}
                                                    className="input input-sm w-full"
                                                />
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].gender`}
                                                    value={row.gender}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].category`}
                                                    value={row.category}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="General">General</option>
                                                    <option value="OBC">OBC</option>
                                                    <option value="SC">SC</option>
                                                    <option value="ST">ST</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].caste`}
                                                    value={row.caste}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="OBC">OBC</option>
                                                    <option value="General">General</option>
                                                    <option value="SC">SC</option>
                                                    <option value="ST">ST</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    option={getCities}
                                                    name={`sickleCellData[${index}].location`}
                                                    // value={row.location}
                                                    value={row.location}
                                                    // onChange={handleChange}
                                                    onChange={(option) => {
                                                        formik.setFieldValue('location', option);
                                                    }}
                                                    className="input input-sm w-full"
                                                />
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].bloodGroup`}
                                                    value={row.bloodGroup}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="A+">A+</option>
                                                    <option value="B+">B+</option>
                                                    <option value="O+">O+</option>
                                                    <option value="AB+">AB+</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].resultStatus`}
                                                    value={row.resultStatus}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="Normal">Normal</option>
                                                    <option value="Sickle Cell Trait">Sickle Cell Trait</option>
                                                </Field>
                                            </td>
                                            <td>
                                                <Field
                                                    as="select"
                                                    name={`sickleCellData[${index}].cardStatus`}
                                                    value={row.cardStatus}
                                                    onChange={handleChange}
                                                    className="select select-sm w-full"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Distributed">Distributed</option>
                                                </Field>
                                            </td>
                                            <td className="border px-4 py-2 flex justify-around gap-4">
                                                <button className="text-orange-500 hover:text-red-600" onClick={() => onDelete(row)}
                                                    type="button"
                                                >
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

                            <div className="mt-5">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>


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
                                <div className="collapse-title text-sm  font-medium">Enter Employee Name</div>
                                <div className="collapse-content">
                                    <label
                                        className="input input-sm w-40 input-bordered flex items-center gap-2">
                                        <input
                                            type="text"
                                            name="personalName"
                                            value={formik.values.personalName}
                                            onChange={formik.handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm font-medium">Result Status</div>
                                <div className="collapse-content">
                                    <select
                                        name="resultStatus"
                                        value={formik.values.resultStatus}
                                        onChange={formik.handleChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="Negative">Negative</option>
                                        <option value="Positive">Positive</option>
                                    </select>
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
                        <div className="flex gap-6 items-center">
                            <div className="collapse collapse-arrow ">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm  font-medium">Enter Center Code</div>
                                <div className="collapse-content">
                                    <label
                                        className="input input-sm w-40 input-bordered flex items-center gap-2">
                                        <input
                                            type="text"
                                            name="centerCode"
                                            value={formik.values.centerCode}
                                            onChange={formik.handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm font-medium">Card Status</div>
                                <div className="collapse-content">
                                    <select
                                        name="cardStatus"
                                        value={formik.values.cardStatus}
                                        onChange={formik.handleChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="HangOut">HangOut</option>
                                        <option value="Submitted">Submitted</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="  items-center">
                            <div className="collapse collapse-arrow w-56">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm  font-medium">Blood Group</div>
                                <div className="collapse-content">
                                    <label
                                        className="input input-sm w-40 input-bordered flex items-center gap-2">
                                        <select
                                            name="bloodStatus"
                                            value={formik.values.bloodStatus}
                                            onChange={formik.handleChange}
                                            className="select select-bordered w-full"
                                        >
                                            <option value="A+ve">A+ve</option>
                                            <option value="A-ve">A-ve</option>
                                            <option value="B+ve">B+ve</option>
                                            <option value="B-ve">B-ve</option>
                                            <option value="O+ve">O+ve</option>
                                            <option value="O-ve">O-ve</option>
                                            <option value="AB+ve">AB+ve</option>
                                            <option value="AB-ve">AB-ve</option>
                                            <option value="Pending">Pending</option>
                                        </select>
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
        </>
    )
}

export default EditSCResultPage