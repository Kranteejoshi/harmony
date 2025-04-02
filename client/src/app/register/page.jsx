'use client'
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^[a-z0-9_.]+$/, 'Invalid username format'),
  gender: Yup.string().oneOf(['Male', 'Female', 'Other']),
  dateOfBirth: Yup.date(),
  address: Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, 'Invalid phone number'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

export const Register = () => {
  const [loading, setLoading] = useState(false)
  const handleRegister = async (values)=>{
    try{
      setLoading(true)
      const {data} = await axios.post(`http://localhost:3000/register`,values);
      console.log(data);
      if(data){
       setLoading(false)
       alert(data.msg)}
    }catch(err){
      setLoading(false)
      alert(err.message)
    }
  }
  
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          fullName: '',
          userName: '',
          gender: '',
          dateOfBirth: '',
          address: '',
          email: '',
          phoneNumber: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          handleRegister(values);

        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="fullName">Full Name</label>
            <Field name="fullName" />
            {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
            <br />

            <label htmlFor="userName">User Name</label>
            <Field name="userName" />
            {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}
            <br />

            <label htmlFor="gender">Gender</label>
            <Field as="select" name="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </Field>
            {errors.gender && touched.gender ? <div>{errors.gender}</div> : null}
            <br />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Field type="date" name="dateOfBirth" />
            {errors.dateOfBirth && touched.dateOfBirth ? <div>{errors.dateOfBirth}</div> : null}
            <br />

            <label htmlFor="address">Address</label>
            <Field name="address" />
            {errors.address && touched.address ? <div>{errors.address}</div> : null}
            <br />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />

            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" />
            {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
            <br />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <br />


            <button type="submit">{loading ? '...': 'Submit'}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register