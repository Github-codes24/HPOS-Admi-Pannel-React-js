import React from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '../../hooks/useSignIn';
// import admin from '../../assets/admin';
import validator from 'validator'; // Assuming you are using validator library

const AdminSignIn = () => {
  const navigate = useNavigate();
  const { signIn, signInResponse, loading } = useSignIn();

  const handleAdminSubmit = async (values) => {
    try {
      const sanitizedUsername = validator.trim(values.userName);
      const sanitizedPassword = validator.trim(values.password);

      if (!sanitizedUsername.startsWith('admin')) {
        await signIn(sanitizedUsername, sanitizedPassword);
      } else {
        console.log('Admins must log in through the admin form.');
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required.'),
    password: Yup.string()
    //   .min(8, 'Must be 8 characters or more')
    //   .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    //   .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one symbol')
    //   .matches(/\d/, 'Must contain at least one number')
      .required('Password is required.'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema,
    onSubmit: handleAdminSubmit,
  });

  console.log(formik.values)

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl">
        <div className="bg-blue-500 p-10 flex flex-col items-center justify-center w-96">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-3xl font-bold my-4">Admin Sign In</h2>
            <div className="w-52 h-52 bg-yellow-400 rounded-full mb-4">
              {/* <img src={admin} alt="Admin" /> */}
            </div>
          </div>
        </div>

        <div className="p-12 w-1/2 ">
          <div className="m-5">
            <div className="">
              <button className="text-blue-500 border-b-2 pb-2 border-blue-500 focus:outline-none">
                Sign In
              </button>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <FormikProvider value={formik}>
                  <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                      <label className="block text-gray-600">Username</label>
                      <input
                        type="text"
                        name="userName"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Username"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.userName && formik.errors.userName ? (
                        <div className="text-red-500 text-sm">{formik.errors.userName}</div>
                      ) : null}
                    </div>

                    <div>
                      <label className="block text-gray-600">Create Password</label>
                      <input
                        type="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                      ) : null}
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <div className="form-control flex-none">
                          <label className="flex gap-2 cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                          </label>
                        </div>
                        <div>
                          <h1>Forget Your Password</h1>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
                      disabled={loading}
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                  </form>
                </FormikProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;

