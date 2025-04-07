"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[a-z0-9_.]+$/, "Invalid username format"),
  gender: Yup.string().oneOf(["Male", "Female", "Other", "Prefer not to say"]),
  dateOfBirth: Yup.date(),
  address: Yup.string(),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
    "Invalid phone number"
  ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:3000/register`,
        values
      );
      console.log(data);
      if (data) {
        setLoading(false);
        alert(data.msg);
      }
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo.svg"
          alt="Harmony Logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              fullName: "",
              userName: "",
              gender: "",
              dateOfBirth: "",
              address: "",
              email: "",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              handleRegister(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <div className="mt-1">
                      <Field
                        name="fullName"
                        id="fullName"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.fullName && touched.fullName
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.fullName && touched.fullName ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.fullName}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Username */}
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username *
                    </label>
                    <div className="mt-1">
                      <Field
                        name="userName"
                        id="userName"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.userName && touched.userName
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.userName && touched.userName ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.userName}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <div className="mt-1">
                      <Field
                        as="select"
                        name="gender"
                        id="gender"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.gender && touched.gender
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </Field>
                      {errors.gender && touched.gender ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.gender}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Birth
                    </label>
                    <div className="mt-1">
                      <Field
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.dateOfBirth && touched.dateOfBirth
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.dateOfBirth && touched.dateOfBirth ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.dateOfBirth}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.email && touched.email
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.email && touched.email ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <Field
                        name="phoneNumber"
                        id="phoneNumber"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.phoneNumber && touched.phoneNumber
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.phoneNumber}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <Field
                        name="address"
                        id="address"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.address && touched.address
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.address && touched.address ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.address}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={`appearance-none block w-full px-3 py-2 border ${errors.password && touched.password
                            ? "border-red-300"
                            : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      />
                      {errors.password && touched.password ? (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
