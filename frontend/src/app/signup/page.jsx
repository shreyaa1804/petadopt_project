'use client';//add operation of backend
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';


import React, { useState } from 'react'
import toast from 'react-hot-toast';



const signup = () => {
  const router=useRouter();
 
  const [passwordHidden, setPasswordHidden] = useState(true);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      axios.post('http://localhost:5000/user/adddetail',values)
      .then((result) => {
        toast.success('user signedUp successfully');
        router.push('./login');
        

        
        }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message ||'Something went wrong');
       
        });

      resetForm();
      },
    
  })

  return (
    <div className=' flex item-center p-60 bg-white-800 w-full' style={{backgroundImage:`url(https://i.pinimg.com/564x/52/2a/ce/522ace4de4f20d12144f6dd6b38406c8.jpg)`}}>
      <div className='max-w-lg rounded-lg border shadow mx-auto mt-50 py-6 px-10 '
        style={{backgroundImage:`url(https://i.pinimg.com/236x/04/48/13/044813e12d293ba870a6d3b1032f8a63.jpg)` ,backgroundPosition:`bottom`, backgroundRepeat:`no-repeat`,backgroundSize:`cover`}}>
        <h3 className='text-2xl text-center font-bold'>Signup Form</h3>

        <form onSubmit={signupForm.handleSubmit}>

          <div className='mb-5'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
           
          </div>
          <div className='mb-5'>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
            
          </div>
          <div className='mb-5 relative'>
            <label htmlFor="password">Password</label>
            <button type='button' className='absolute right-2 bottom-2'
            onClick={()=>{setPasswordHidden(!passwordHidden)}}
            >{passwordHidden ? 'Show':'Hide'}</button>
           
            <input
              type={passwordHidden ? 'password':'text'}
              id="password"
             onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className='w-full border border-gray-400 rounded-lg px-3 py-2 mt-1'
            />
             
          </div>

          <button type='submit' className='mt-5 bg-violet-500 p-3 w-2/5 text-white rounded-lg'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default signup;