'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '@/lib/features/user/userSlice';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Required'),
});


const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleLogin = async (values: any) => {
    try {
      const { data } = await axios.post('https://fakestoreapi.com/auth/login', values)
      dispatch(addUserDetails({username:values.username, token: data.token }))
      if (data.token) {
        router.push('/')
      }
    } catch (err) {
      toast((err as any).response?.data)
    }


  }
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          handleLogin(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col gap-4'>
            <Field name="username" placeholder="username" className="bg-red-200 p-4" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}

            <Field name="password" placeholder="password" type="password" className="bg-red-200 p-4" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login





// invalid password
// username is too short
// password special char
// image less than 5mb
// frontend validation
