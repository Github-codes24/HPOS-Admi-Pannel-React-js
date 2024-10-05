// import React, { useEffect, useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate, useParams } from 'react-router-dom';
// import useSickleCell from '../../hooks/useSickleCell';

// const initialData = {
//     address: {
//         house: '',
//         city: '',
//         district: '',
//         state: '',
//         pincode: '',
//     },
//     personalName: '',
//     centerCode: '',
//     bloodStatus: 'Pending',
//     resultStatus: 'Pending',
//     cardStatus: 'Pending',
//     aadhaarNumber: '',
//     number: '',
//     birthYear: '',
//     gender: 'Female',
//     mobileNumber: '',
//     fathersName: '',
//     motherName: '',
//     maritalStatus: 'Married',
//     category: 'OBC',
//     caste: '',
//     subCaste: '',
//     centerName: '',
//     isUnderMedication: false,
//     isUnderBloodTransfusion: false,
//     familyHistory: false,
//     isDeleted: false,
// };

// const validationSchema = Yup.object().shape({
//     personalName: Yup.string(),
//     centerCode: Yup.string(),
//     bloodStatus: Yup.string(),
//     resultStatus: Yup.string(),
//     cardStatus: Yup.string(),
//     aadhaarNumber: Yup.string(),
//     mobileNumber: Yup.string().length(10, 'Must be 10 digits'),
//     birthYear: Yup.number().min(1900, 'Must be after 1900'),
//     gender: Yup.string(),
//     fathersName: Yup.string(),
//     motherName: Yup.string(),
//     maritalStatus: Yup.string(),
//     category: Yup.string(),
//     caste: Yup.string(),
//     subCaste: Yup.string(),
//     centerName: Yup.string(),
//     address: Yup.object().shape({
//         house: Yup.string(),
//         city: Yup.string(),
//         district: Yup.string(),
//         state: Yup.string(),
//         pincode: Yup.string(),
//     }),
//     isUnderMedication: Yup.boolean(),
//     isUnderBloodTransfusion: Yup.boolean(),
//     familyHistory: Yup.boolean(),
// });

// const EditSickleCellPage = () => {
//     const { id } = useParams();
//     const [initialValues, setInitialValues] = useState(initialData);
//     const { fetchSickleCellById, sickleCellDetails, updateSickleCell, modifySickleCell } = useSickleCell();
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchSickleCellById(id);
//     }, [id]);

//     const handleUpdate = (values) => {
//         console.log('values', values)
//         const updatedData = {
//             ...values,
//             updatedAt: undefined
//         };
//         updateSickleCell(id, updatedData);
//         console.log("modifySickleCell", modifySickleCell)
//         console.log('Values updated:', updatedData);
//     };


//     useEffect(() => {
//         console.log("sickleCellDetails=", sickleCellDetails);
//         if (sickleCellDetails) {
//             const address = sickleCellDetails?.address || {};
//             setInitialValues({
//                 ...sickleCellDetails,
//                 address: {
//                     house: sickleCellDetails?.address.house || '',
//                     city: sickleCellDetails?.address.city || '',
//                     district: sickleCellDetails?.address.district || '',
//                     state: sickleCellDetails?.address.state || '',
//                     pincode: sickleCellDetails?.address.pincode || '',
//                 },
//             });
//         }
//     }, [sickleCellDetails]);

//     const handleCancel = () => {
//         navigate('/sickle-cell');
//     };

//     const formStyle = {
//         maxWidth: '800px',
//         margin: '0 auto',
//         padding: '20px',
//         // backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     };

//     const fieldContainerStyle = {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     };

//     const fieldItemStyle = {
//         width: '48%', // Two fields per row
//         marginBottom: '15px',
//     };

//     const labelStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         fontWeight: 'bold',
//         color: '#555',
//     };

//     const inputStyle = {
//         padding: '10px',
//         marginTop: '5px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         fontSize: '16px',
//     };

//     const errorStyle = {
//         color: 'red',
//         fontSize: '14px',
//         marginTop: '5px',
//     };

//     const buttonStyle = {
//         width: '100%',
//         padding: '12px',
//         backgroundColor: '#4caf50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         marginTop: '20px',
//         transition: 'background-color 0.3s',
//     };

//     const buttonStyle1 = {
//         width: '100%',
//         padding: '12px',
//         backgroundColor: '#595c59',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         marginTop: '20px',
//         transition: 'background-color 0.3s',
//     };

//     const checkboxStyle = {
//         marginRight: '8px',
//     };

//     const h2h3Style = {
//         textAlign: 'center',
//         color: '#333',
//     };

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleUpdate}
//             enableReinitialize={true}
//         >
//             {({ values, handleChange, handleBlur }) => (
//                 <Form style={formStyle}>
//                     <h2 style={h2h3Style}>Personal Information</h2>
//                     <div style={fieldContainerStyle}>
//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Name:
//                                 <Field
//                                     type="text"
//                                     name="personalName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.personalName}
//                                     style={inputStyle}
//                                 />
//                                 <ErrorMessage name="personalName" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Center Code:
//                                 <Field
//                                     type="text"
//                                     name="centerCode"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Blood Group:
//                                 <Field as="select" name="bloodStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
//                                     <option value="A+ve">A+ve</option>
//                                     <option value="A-ve">A-ve</option>
//                                     <option value="B+ve">B+ve</option>
//                                     <option value="B-ve">B-ve</option>
//                                     <option value="O+ve">O+ve</option>
//                                     <option value="O-ve">O-ve</option>
//                                     <option value="AB+ve">AB+ve</option>
//                                     <option value="AB-ve">AB-ve</option>
//                                     <option value="Pending">Pending</option>
//                                 </Field>
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Result Status:
//                                 <Field as="select" name="resultStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
//                                     <option value="Normal(HbAA)">Normal (HbAA)</option>
//                                     <option value="Sickle Cell Trait(HbAS)">Sickle Cell Trait (HbAS)</option>
//                                     <option value="Sickle Cell Disease(HbSS)">Sickle Cell Disease (HbSS)</option>
//                                     <option value="low Hb">Low Hb</option>
//                                     <option value="Repeat">Repeat</option>
//                                 </Field>
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Card Status:
//                                 <Field as="select" name="cardStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
//                                     <option value="Pending">Pending</option>
//                                     <option value="HangOut">HangOut</option>
//                                     <option value="Submitted">Submitted</option>
//                                 </Field>
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <h3 style={h2h3Style}>Address</h3>
//                             <label style={labelStyle}>
//                                 House:
//                                 <Field
//                                     type="text"
//                                     name="address.house"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 City:
//                                 <Field
//                                     type="text"
//                                     name="address.city"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 District:
//                                 <Field
//                                     type="text"
//                                     name="address.district"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 State:
//                                 <Field
//                                     type="text"
//                                     name="address.state"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Pincode:
//                                 <Field
//                                     type="text"
//                                     name="address.pincode"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Aadhaar Number:
//                                 <Field
//                                     type="text"
//                                     name="aadhaarNumber"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                                 <ErrorMessage name="aadhaarNumber" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 ABHA Number:
//                                 <Field
//                                     type="text"
//                                     name="number"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                                 <ErrorMessage name="number" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Mobile Number:
//                                 <Field
//                                     type="text"
//                                     name="mobileNumber"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                                 <ErrorMessage name="mobileNumber" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Birth Year:
//                                 <Field
//                                     type="text"
//                                     name="birthYear"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={inputStyle}
//                                 />
//                                 <ErrorMessage name="birthYear" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Gender:
//                                 <Field as="select" name="gender" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                     <option value="Other">Other</option>
//                                 </Field>
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Father's Name:
//                                 <Field
//                                     type="text"
//                                     name="fathersName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <ErrorMessage name="fathersName" component="div" style={errorStyle} />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Mother's Name:
//                                 <Field
//                                     type="text"
//                                     name="motherName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <ErrorMessage name="motherName" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Marital Status:
//                                 <Field as="select" name="maritalStatus">
//                                     <option value="Single">Single</option>
//                                     <option value="Married">Married</option>
//                                     <option value="Divorced">Divorced</option>
//                                     <option value="Widowed">Widowed</option>
//                                 </Field>
//                                 <ErrorMessage name="maritalStatus" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Category:
//                                 <Field as="select" name="category">
//                                     <option value="General">General</option>
//                                     <option value="OBC">OBC</option>
//                                     <option value="SC">SC</option>
//                                     <option value="ST">ST</option>
//                                 </Field>
//                                 <ErrorMessage name="category" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Caste:
//                                 <Field
//                                     type="text"
//                                     name="caste"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <ErrorMessage name="caste" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Sub Caste:
//                                 <Field
//                                     type="text"
//                                     name="subCaste"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <ErrorMessage name="subCaste" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Center Name:
//                                 <Field
//                                     type="text"
//                                     name="centerName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <ErrorMessage name="centerName" component="div" className="error" />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Is Under Medication:
//                                 <Field
//                                     type="checkbox"
//                                     name="isUnderMedication"
//                                     checked={values.isUnderMedication}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Is Under Blood Transfusion:
//                                 <Field
//                                     type="checkbox"
//                                     name="isUnderBloodTransfusion"
//                                     checked={values.isUnderBloodTransfusion}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Family History:
//                                 <Field
//                                     type="checkbox"
//                                     name="familyHistory"
//                                     checked={values.familyHistory}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>

//                         <div style={fieldItemStyle}>
//                             <label style={labelStyle}>
//                                 Is Deleted:
//                                 <Field
//                                     type="checkbox"
//                                     name="isDeleted"
//                                     checked={values.isDeleted}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>
//                     </div>

//                     <button type="submit" style={buttonStyle}>
//                         Update
//                     </button>
//                     <button type="button" style={buttonStyle1} onClick={handleCancel}>Cancel</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };
// export default EditSickleCellPage

// import React, { useEffect, useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate, useParams } from 'react-router-dom';
// import useSickleCell from '../../hooks/useSickleCell';

// const validationSchema = Yup.object().shape({
//     personalName: Yup.string(),
//     centerCode: Yup.string(),
//     bloodStatus: Yup.string(),
//     resultStatus: Yup.string(),
//     cardStatus: Yup.string(),
//     aadhaarNumber: Yup.string(),
//     mobileNumber: Yup.string().length(10, 'Must be 10 digits'),
//     birthYear: Yup.number().min(1900, 'Must be after 1900'),
//     gender: Yup.string(),
//     fathersName: Yup.string(),
//     motherName: Yup.string(),
//     maritalStatus: Yup.string(),
//     category: Yup.string(),
//     caste: Yup.string(),
//     subCaste: Yup.string(),
//     centerName: Yup.string(),
//     address: Yup.object().shape({
//         house: Yup.string(),
//         city: Yup.string(),
//         district: Yup.string(),
//         state: Yup.string(),
//         pincode: Yup.string(),
//     }),
//     isUnderMedication: Yup.boolean(),
//     isUnderBloodTransfusion: Yup.boolean(),
//     familyHistory: Yup.boolean(),
// });

// const EditSickleCellPage = () => {
//     const { id } = useParams();
//     const { fetchSickleCellById, sickleCellDetails, updateSickleCell } = useSickleCell();
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchSickleCellById(id);
//     }, [id, fetchSickleCellById]);

//     const handleUpdate = (values) => {
//         const updatedData = {
//             ...values,
//             updatedAt: undefined // Adjust this as per your requirements
//         };
//         updateSickleCell(id, updatedData);
//         console.log('Values updated:', updatedData);
//     };

//     const handleCancel = () => {
//         navigate('/sickle-cell');
//     };

//     if (!sickleCellDetails) {
//         return <div>Loading...</div>; // Display a loading state while data is fetched
//     }

//     return (
//         <Formik
//             initialValues={sickleCellDetails} // Use fetched data as initial values
//             validationSchema={validationSchema}
//             onSubmit={handleUpdate}
//             enableReinitialize={true} // Allows Formik to reinitialize if the initialValues change
//         >
//             {({ values, handleChange, handleBlur }) => (
//                 <Form style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//                     <h2 style={{ textAlign: 'center', color: '#333' }}>Personal Information</h2>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//                         <div style={{ width: '48%', marginBottom: '15px' }}>
//                             <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', color: '#555' }}>
//                                 Name:
//                                 <Field
//                                     type="text"
//                                     name="personalName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.personalName}
//                                     style={{ padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
//                                 />
//                                 <ErrorMessage name="personalName" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
//                             </label>
//                         </div>

//                         {/* Other form fields go here... */}

//                         <div style={{ width: '48%', marginBottom: '15px' }}>
//                             <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', color: '#555' }}>
//                                 Center Name:
//                                 <Field
//                                     type="text"
//                                     name="centerName"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     style={{ padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
//                                 />
//                                 <ErrorMessage name="centerName" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
//                             </label>
//                         </div>
//                     </div>

//                     <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '20px', transition: 'background-color 0.3s' }}>
//                         Update
//                     </button>
//                     <button type="button" style={{ width: '100%', padding: '12px', backgroundColor: '#595c59', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '20px', transition: 'background-color 0.3s' }} onClick={handleCancel}>Cancel</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default EditSickleCellPage;
/////////////////////////////////////////////////
// import React, { useEffect } from 'react';
// import useSickleCell from '../../hooks/useSickleCell';
// import Select from 'react-select';
// import useCities from '../../hooks/useCities';

// const EditSickleCellPage = () => {
//     const {
//         fetchAllSickleCell,
//         sickleCellData,
//         loading,
//         deletePatient,
//         modifySickleCell
//     } = useSickleCell();

//     useEffect(() => {
//         fetchAllSickleCell();
//     }, [fetchAllSickleCell]);

//     if (loading) {
//         return <div>Loading...</div>; // Loading state
//     }

//     // Debugging output
//     console.log('Sickle Cell Data:', sickleCellData);
    
//     return (
//         <div className="container">
//             <h1 className="text-xl font-bold">Sickle Cell Data</h1>
//             <div className="mx-auto mt-5 p-5 bg-white shadow-md">
//                 <table className="table-auto w-full border-collapse">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Marital Status</th>
//                             <th>Age</th>
//                             <th>Gender</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(sickleCellData) && sickleCellData.length > 0 ? (
//                             sickleCellData.map((row, index) => (
//                                 <tr key={index}>
//                                     <td>{row.personalName}</td>
//                                     <td>{row.maritalStatus}</td>
//                                     <td>{row.age}</td>
//                                     <td>{row.gender}</td>
//                                     <td>
//                                         <button onClick={() => deletePatient(row.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="text-center">No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default EditSickleCellPage;









// import React from 'react';

// const EditSickleCellPage = () => {
//     // Function declaration
//     const handleClick = () => {
//         console.log("Button clicked!");
//     };

// const EditSickleCellPage = () => {
//   const { fetchSickleCellCenterCount, sickleCellDetails } = useCandidates();
//   const { fetchCities, getCities } = useCities();

//   // State to hold the data for editing
//   const [data, setData] = useState([]);

//   // Fetch candidates and cities when the component mounts
//   useEffect(() => {
//     fetchSickleCellCenterCount();
//       fetchCities();
//   }, []);

//   // Set data when candidates are fetched
//   useEffect(() => {
//       if (sickleCellData && candidates.length > 0) {
//           setData(candidates); // Set the fetched candidates to data
//       }
//   }, [candidates]);

//   const handleInputChange = (index, field, value) => {
//       const updatedData = [...data];
//       // Handle nested properties
//       if (field.includes('.')) {
//           const [mainField, subField] = field.split('.');
//           updatedData[index][mainField] = {
//               ...updatedData[index][mainField],
//               [subField]: value
//           };
//       } else {
//           updatedData[index][field] = value;
//       }
//       setData(updatedData);
//   };

//   const handleDelete = (index) => {
//       const updatedData = [...data];
//       updatedData.splice(index, 1);
//       setData(updatedData);
//   };

//   // Convert city names to options for react-select
//   const cityOptions = getCities?.flat().map(city => ({
//       value: city, 
//       label: city
//   })) || [];

//     return (
//       <div className="container">
//             <div className="Button">
//                 <div className="mx-auto mt-5 p-5 bg-white shadow-md">
//                     <div className="flex justify-between items-center">
//                         <h1 className="text-xl font-bold">Screening Data</h1>
//                         <div className="flex items-center space-x-5">
//                             <button className="btn btn-primary">Filter Data</button>
//                             <div className="flex items-center">
//                                 <label className="mr-2">Number of List</label>
//                                 <input type="checkbox" className="checkbox" />
//                             </div>
//                         </div>
//                     </div>

//                     <table className="table-auto w-full mt-5 border-collapse">
//                         <thead>
//                             <tr className="border-b">
//                                 <th>Select</th>
//                                 <th>Name</th>
//                                 <th>Marital Status</th>
//                                 <th>Center Code</th>
//                                 <th>Age</th>
//                                 <th style={{ width: '100px' }}>Gender</th>
//                                 <th>Category</th>
//                                 <th style={{ width: '100px' }}>Caste</th>
//                                 <th style={{ width: '100px' }}>Location</th>
//                                 <th>Blood Group</th>
//                                 <th>Result Status</th>
//                                 <th>Card Status</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((row, index) => (
//                                 <tr key={index} className="border-b">
//                                     <td>
//                                         <input type="checkbox" className="checkbox" />
//                                     </td>
//                                     <td className="flex items-center">
//                                         <input
//                                             type="text"
//                                             value={row.personalName} 
//                                             onChange={(e) => handleInputChange(index, 'personalName', e.target.value)}
//                                             className="input input-sm w-full"
//                                         />
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.maritalStatus}
//                                             onChange={(e) => handleInputChange(index, 'maritalStatus', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="Single">Single</option>
//                                             <option value="Married">Married</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <input
//                                             type="text"
//                                             value={row.centerCode}
//                                             onChange={(e) => handleInputChange(index, 'centerCode', e.target.value)}
//                                             className="input input-sm w-full"
//                                         />
//                                     </td>
//                                     <td>
//                                         <input
//                                             type="text"
//                                             value={row.age}
//                                             onChange={(e) => handleInputChange(index, 'age', e.target.value)}
//                                             className="input input-sm w-full"
//                                         />
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.gender}
//                                             onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="Male">Male</option>
//                                             <option value="Female">Female</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.category}
//                                             onChange={(e) => handleInputChange(index, 'category', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="General">General</option>
//                                             <option value="OBC">OBC</option>
//                                             <option value="SC">SC</option>
//                                             <option value="ST">ST</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.caste}
//                                             onChange={(e) => handleInputChange(index, 'caste', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="OBC">OBC</option>
//                                             <option value="General">General</option>
//                                             <option value="SC">SC</option>
//                                             <option value="ST">ST</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <Select
//                                             name="location"
//                                             options={cityOptions}
//                                             value={cityOptions.find(option => option.value === row.address?.city) || null} // Match the selected city
//                                             onChange={(selectedOption) => handleInputChange(index, 'address.city', selectedOption?.value)} // Update the city
//                                             placeholder="Select a city..."
//                                             isClearable
//                                             isSearchable
//                                             className="w-full"
//                                         />
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.bloodGroup}
//                                             onChange={(e) => handleInputChange(index, 'bloodGroup', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="A+">A+</option>
//                                             <option value="B+">B+</option>
//                                             <option value="O+">O+</option>
//                                             <option value="AB+">AB+</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.resultStatus}
//                                             onChange={(e) => handleInputChange(index, 'resultStatus', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="Normal">Normal</option>
//                                             <option value="Sickle Cell Trait">Sickle Cell Trait</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <select
//                                             value={row.cardStatus}
//                                             onChange={(e) => handleInputChange(index, 'cardStatus', e.target.value)}
//                                             className="select select-sm w-full"
//                                         >
//                                             <option value="Pending">Pending</option>
//                                             <option value="Distributed">Distributed</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <button onClick={() => handleDelete(index)} className="btn btn-error btn-sm">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
//   }

// export default EditSickleCellPage;

// 

// import React, { useEffect, useState } from 'react';
// import useSickleCell from '../../hooks/useSickleCell';
// import Select from 'react-select';
// import useCities from '../../hooks/useCities';

// const EditSickleCellPage = () => {
//     const {
//         fetchAllSickleCell,
//         sickleCellData, // Assuming this holds the data structure you shared
//         deletePatient,
//         modifySickleCell
//     } = useSickleCell();

//     const { fetchCities, getCities } = useCities();
//     const [data, setData] = useState([]);

//     // Fetch sickle cell data and cities when the component mounts
//     useEffect(() => {
//         fetchAllSickleCell();
//         fetchCities();
//     }, [fetchAllSickleCell]);

//     // Set data when sickle cell data is fetched
//     useEffect(() => {
//         if (sickleCellData && sickleCellData.data && sickleCellData.data.length > 0) {
//             setData(sickleCellData.data); // Ensure accessing the correct structure
//         }
//     }, [sickleCellData]);

//     // Manage the loading state (make sure you implement loading state in the hook)
//     // If loading is true, return loading UI
   
//     const handleInputChange = (index, field, value) => {
//         const updatedData = [...data];
//         // Handle nested properties
//         if (field.includes('.')) {
//             const [mainField, subField] = field.split('.');
//             updatedData[index][mainField] = {
//                 ...updatedData[index][mainField],
//                 [subField]: value
//             };
//         } else {
//             updatedData[index][field] = value;
//         }
//         setData(updatedData);
//     };

//     const handleDelete = (index) => {
//         deletePatient(data[index]._id); // Ensure using the correct ID
//         const updatedData = [...data];
//         updatedData.splice(index, 1);
//         setData(updatedData);
//     };

//     // Convert city names to options for react-select
//     const cityOptions = getCities?.flat().map(city => ({
//         value: city,
//         label: city
//     })) || [];

//     console.log(data); // Check if data is available here

//     return (
//         <div className="container">
//             <div className="mx-auto mt-5 p-5 bg-white shadow-md">
//                 <div className="flex justify-between items-center">
//                     <h1 className="text-xl font-bold">Sickle Cell Screening Data</h1>
//                 </div>

//                 <table className="table-auto w-full mt-5 border-collapse">
//                     <thead>
//                         <tr className="border-b">
//                             <th>Select</th>
//                             <th>Name</th>
//                             <th>Marital Status</th>
//                             <th>Age</th>
//                             <th style={{ width: '100px' }}>Gender</th>
//                             <th style={{ width: '100px' }}>Caste</th>
//                             <th style={{ width: '100px' }}>Location</th>
//                             <th>Blood Group</th>
//                             <th>Result Status</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((row, index) => (
//                             <tr key={row._id} className="border-b"> {/* Use row._id for unique key */}
//                                 <td>
//                                     <input type="checkbox" className="checkbox" />
//                                 </td>
//                                 <td className="flex items-center">
//                                     <input
//                                         type="text"
//                                         value={row.personalName}
//                                         onChange={(e) => handleInputChange(index, 'personalName', e.target.value)}
//                                         className="input input-sm w-full"
//                                     />
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={row.maritalStatus}
//                                         onChange={(e) => handleInputChange(index, 'maritalStatus', e.target.value)}
//                                         className="select select-sm w-full"
//                                     >
//                                         <option value="Single">Single</option>
//                                         <option value="Married">Married</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         value={row.age}
//                                         onChange={(e) => handleInputChange(index, 'age', e.target.value)}
//                                         className="input input-sm w-full"
//                                     />
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={row.gender}
//                                         onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
//                                         className="select select-sm w-full"
//                                     >
//                                         <option value="Male">Male</option>
//                                         <option value="Female">Female</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={row.caste}
//                                         onChange={(e) => handleInputChange(index, 'caste', e.target.value)}
//                                         className="select select-sm w-full"
//                                     >
//                                         <option value="OBC">OBC</option>
//                                         <option value="General">General</option>
//                                         <option value="SC">SC</option>
//                                         <option value="ST">ST</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <Select
//                                         name="location"
//                                         options={cityOptions}
//                                         value={cityOptions.find(option => option.value === row.address?.city) || null}
//                                         onChange={(selectedOption) => handleInputChange(index, 'address.city', selectedOption?.value)}
//                                         placeholder="Select a city..."
//                                         isClearable
//                                         isSearchable
//                                         className="w-full"
//                                     />
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={row.bloodGroup}
//                                         onChange={(e) => handleInputChange(index, 'bloodGroup', e.target.value)}
//                                         className="select select-sm w-full"
//                                     >
//                                         <option value="A+">A+</option>
//                                         <option value="B+">B+</option>
//                                         <option value="O+">O+</option>
//                                         <option value="AB+">AB+</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <select
//                                         value={row.resultStatus}
//                                         onChange={(e) => handleInputChange(index, 'resultStatus', e.target.value)}
//                                         className="select select-sm w-full"
//                                     >
//                                         <option value="Normal">Normal</option>
//                                         <option value="Sickle Cell Trait">Sickle Cell Trait</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDelete(index)} className="btn btn-error btn-sm">Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default EditSickleCellPage;

import React, { useEffect, useState } from 'react';
import useSickleCell from '../../hooks/useSickleCell';
import Select from 'react-select';
import useCities from '../../hooks/useCities';

const EditSickleCellPage = () => {
    const {
        fetchAllSickleCell,
        sickleCellData, // Assuming this holds the data structure you shared
        loading,
        deletePatient,
        modifySickleCell
    } = useSickleCell();

    const { fetchCities, getCities } = useCities();
    const [data, setData] = useState([]);

    // Fetch sickle cell data and cities when the component mounts
    useEffect(() => {
        fetchAllSickleCell();
        fetchCities();
    }, [fetchAllSickleCell]);

    // Set data when sickle cell data is fetched
    useEffect(() => {
        if (sickleCellData && sickleCellData.length > 0) {
            setData(sickleCellData); // Directly set the fetched data to state
        }
    }, [sickleCellData]);

  

    const handleInputChange = (index, field, value) => {
        const updatedData = [...data];
        if (field.includes('.')) {
            const [mainField, subField] = field.split('.');
            updatedData[index][mainField] = {
                ...updatedData[index][mainField],
                [subField]: value
            };
        } else {
            updatedData[index][field] = value;
        }
        setData(updatedData);
    };

    const handleDelete = (index) => {
        deletePatient(data[index]._id); // Ensure using the correct ID
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    // Convert city names to options for react-select
    const cityOptions = getCities?.flat().map(city => ({
        value: city,
        label: city
    })) || [];

    console.log(data); // Check if data is available here

    return (
        <div className="container">
            <div className="mx-auto mt-5 p-5 bg-white shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Sickle Cell Screening Data</h1>
                </div>

                <table className="table-auto w-full mt-5 border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th>Select</th>
                            <th>Name</th>
                            <th>Marital Status</th>
                            <th>Age</th>
                            <th style={{ width: '100px' }}>Gender</th>
                            <th style={{ width: '100px' }}>Caste</th>
                            <th style={{ width: '100px' }}>Location</th>
                            <th>Blood Group</th>
                            <th>Result Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={row._id} className="border-b">
                                <td>
                                    <input type="checkbox" className="checkbox" />
                                </td>
                                <td className="flex items-center">
                                    <input
                                        type="text"
                                        value={row.personalName}
                                        onChange={(e) => handleInputChange(index, 'personalName', e.target.value)}
                                        className="input input-sm w-full"
                                    />
                                </td>
                                <td>
                                    <select
                                        value={row.maritalStatus}
                                        onChange={(e) => handleInputChange(index, 'maritalStatus', e.target.value)}
                                        className="select select-sm w-full"
                                    >
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={row.age}
                                        onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                                        className="input input-sm w-full"
                                    />
                                </td>
                                <td>
                                    <select
                                        value={row.gender}
                                        onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                                        className="select select-sm w-full"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        value={row.caste}
                                        onChange={(e) => handleInputChange(index, 'caste', e.target.value)}
                                        className="select select-sm w-full"
                                    >
                                        <option value="OBC">OBC</option>
                                        <option value="General">General</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                    </select>
                                </td>
                                <td>
                                    <Select
                                        name="location"
                                        options={cityOptions}
                                        value={cityOptions.find(option => option.value === row.address?.city) || null}
                                        onChange={(selectedOption) => handleInputChange(index, 'address.city', selectedOption?.value)}
                                        placeholder="Select a city..."
                                        isClearable
                                        isSearchable
                                        className="w-full"
                                    />
                                </td>
                                <td>
                                    <select
                                        value={row.bloodStatus}
                                        onChange={(e) => handleInputChange(index, 'bloodStatus', e.target.value)}
                                        className="select select-sm w-full"
                                    >
                                        <option value="A+ve">A+ve</option>
                                        <option value="B+ve">B+ve</option>
                                        <option value="O+ve">O+ve</option>
                                        <option value="AB+ve">AB+ve</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        value={row.resultStatus}
                                        onChange={(e) => handleInputChange(index, 'resultStatus', e.target.value)}
                                        className="select select-sm w-full"
                                    >
                                        <option value="Normal(HbAA)">Normal(HbAA)</option>
                                        <option value="Sickle Cell Trait">Sickle Cell Trait</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)} className="btn btn-error btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditSickleCellPage;
