import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import useCandidates from '../../hooks/candidateData';

const initialData = {
    address: {
        house: '',
        city: '',
        district: '',
        state: '',
        pincode: '',
    },
    personalName: '',
    centerCode: '',
    bloodStatus: 'Pending',
    resultStatus: 'Pending',
    cardStatus: 'Pending',
    aadhaarNumber: '',
    number: '',
    birthYear: '',
    gender: 'Female',
    mobileNumber: '',
    fathersName: '',
    motherName: '',
    maritalStatus: 'Married',
    category: 'OBC',
    caste: '',
    subCaste: '',
    centerName: '',
    isUnderMedication: false,
    isUnderBloodTransfusion: false,
    familyHistory: false,
    isDeleted: false,
};

const validationSchema = Yup.object().shape({
    personalName: Yup.string(),
    centerCode: Yup.string(),
    bloodStatus: Yup.string(),
    resultStatus: Yup.string(),
    cardStatus: Yup.string(),
    aadhaarNumber: Yup.string(),
    mobileNumber: Yup.string().length(10, 'Must be 10 digits'),
    birthYear: Yup.number().min(1900, 'Must be after 1900'),
    gender: Yup.string(),
    fathersName: Yup.string(),
    motherName: Yup.string(),
    maritalStatus: Yup.string(),
    category: Yup.string(),
    caste: Yup.string(),
    subCaste: Yup.string(),
    centerName: Yup.string(),
    address: Yup.object().shape({
        house: Yup.string(),
        city: Yup.string(),
        district: Yup.string(),
        state: Yup.string(),
        pincode: Yup.string(),
    }),
    isUnderMedication: Yup.boolean(),
    isUnderBloodTransfusion: Yup.boolean(),
    familyHistory: Yup.boolean(),
});

const EditDashboardPage = () => {
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState(initialData);
    const { fetchCandidatesById, candidateDetails, updateCandidates, modifyCandidates } = useCandidates();
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate('/dashboard');
    };

    useEffect(() => {
        fetchCandidatesById(id);
    }, [id]);

    const handleUpdate = (values) => {
        console.log('values', values)
        const updatedData = {
            ...values,
            updatedAt: undefined
        };
        updateCandidates(id, updatedData);
        console.log("modifyCandidates", modifyCandidates)
        console.log('Values updated:', updatedData);
    };


    useEffect(() => {
        console.log("candidateDetails=", candidateDetails);
        if (candidateDetails) {
            const address = candidateDetails.address || {};
            setInitialValues({
                ...candidateDetails,
                address: {
                    house: candidateDetails.address.house || '',
                    city: candidateDetails.address.city || '',
                    district: candidateDetails.address.district || '',
                    state: candidateDetails.address.state || '',
                    pincode: candidateDetails.address.pincode || '',
                },
            });
        }
    }, [candidateDetails]);

    const formStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        // backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const fieldContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    };

    const fieldItemStyle = {
        width: '48%', // Two fields per row
        marginBottom: '15px',
    };

    const labelStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color: '#555',
    };

    const inputStyle = {
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    };

    const errorStyle = {
        color: 'red',
        fontSize: '14px',
        marginTop: '5px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
        transition: 'background-color 0.3s',
    };

    const buttonStyle1 = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#595c59',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
        transition: 'background-color 0.3s',
    };

    const checkboxStyle = {
        marginRight: '8px',
    };

    const h2h3Style = {
        textAlign: 'center',
        color: '#333',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
            enableReinitialize={true}
        >
            {({ values, handleChange, handleBlur }) => (
                <Form style={formStyle}>
                    <h2 style={h2h3Style}>Personal Information</h2>
                    <div style={fieldContainerStyle}>
                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Name:
                                <Field
                                    type="text"
                                    name="personalName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.personalName}
                                    style={inputStyle}
                                />
                                <ErrorMessage name="personalName" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Center Code:
                                <Field
                                    type="text"
                                    name="centerCode"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Blood Group:
                                <Field as="select" name="bloodStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
                                    <option value="A+ve">A+ve</option>
                                    <option value="A-ve">A-ve</option>
                                    <option value="B+ve">B+ve</option>
                                    <option value="B-ve">B-ve</option>
                                    <option value="O+ve">O+ve</option>
                                    <option value="O-ve">O-ve</option>
                                    <option value="AB+ve">AB+ve</option>
                                    <option value="AB-ve">AB-ve</option>
                                    <option value="Pending">Pending</option>
                                </Field>
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Result Status:
                                <Field as="select" name="resultStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
                                    <option value="Normal(HbAA)">Normal (HbAA)</option>
                                    <option value="Sickle Cell Trait(HbAS)">Sickle Cell Trait (HbAS)</option>
                                    <option value="Sickle Cell Disease(HbSS)">Sickle Cell Disease (HbSS)</option>
                                    <option value="low Hb">Low Hb</option>
                                    <option value="Repeat">Repeat</option>
                                </Field>
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Card Status:
                                <Field as="select" name="cardStatus" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
                                    <option value="Pending">Pending</option>
                                    <option value="HangOut">HangOut</option>
                                    <option value="Submitted">Submitted</option>
                                </Field>
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <h3 style={h2h3Style}>Address</h3>
                            <label style={labelStyle}>
                                House:
                                <Field
                                    type="text"
                                    name="address.house"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                City:
                                <Field
                                    type="text"
                                    name="address.city"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                District:
                                <Field
                                    type="text"
                                    name="address.district"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                State:
                                <Field
                                    type="text"
                                    name="address.state"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Pincode:
                                <Field
                                    type="text"
                                    name="address.pincode"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Aadhaar Number:
                                <Field
                                    type="text"
                                    name="aadhaarNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                                <ErrorMessage name="aadhaarNumber" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                ABHA Number:
                                <Field
                                    type="text"
                                    name="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                                <ErrorMessage name="number" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Mobile Number:
                                <Field
                                    type="text"
                                    name="mobileNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                                <ErrorMessage name="mobileNumber" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Birth Year:
                                <Field
                                    type="text"
                                    name="birthYear"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={inputStyle}
                                />
                                <ErrorMessage name="birthYear" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Gender:
                                <Field as="select" name="gender" onChange={handleChange} onBlur={handleBlur} style={inputStyle}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Field>
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Father's Name:
                                <Field
                                    type="text"
                                    name="fathersName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="fathersName" component="div" style={errorStyle} />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Mother's Name:
                                <Field
                                    type="text"
                                    name="motherName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="motherName" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Marital Status:
                                <Field as="select" name="maritalStatus">
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                </Field>
                                <ErrorMessage name="maritalStatus" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Category:
                                <Field as="select" name="category">
                                    <option value="General">General</option>
                                    <option value="OBC">OBC</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                </Field>
                                <ErrorMessage name="category" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Caste:
                                <Field
                                    type="text"
                                    name="caste"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="caste" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Sub Caste:
                                <Field
                                    type="text"
                                    name="subCaste"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="subCaste" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Center Name:
                                <Field
                                    type="text"
                                    name="centerName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="centerName" component="div" className="error" />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Is Under Medication:
                                <Field
                                    type="checkbox"
                                    name="isUnderMedication"
                                    checked={values.isUnderMedication}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Is Under Blood Transfusion:
                                <Field
                                    type="checkbox"
                                    name="isUnderBloodTransfusion"
                                    checked={values.isUnderBloodTransfusion}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Family History:
                                <Field
                                    type="checkbox"
                                    name="familyHistory"
                                    checked={values.familyHistory}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div style={fieldItemStyle}>
                            <label style={labelStyle}>
                                Is Deleted:
                                <Field
                                    type="checkbox"
                                    name="isDeleted"
                                    checked={values.isDeleted}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    <button type="submit" style={buttonStyle}>
                        Update
                    </button>
                    <button type="button" style={buttonStyle1} onClick={handleCancel}>Cancel</button>
                </Form>
            )}
        </Formik>
    );
};

export default EditDashboardPage;
