"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "Yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

//step4:validation used
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .matches(/[a-z]/, "Password must contain  atleast  one lowercase")
    // .matches(/[A-Z]/, "Password must contain atleast  one uppercase")
    .matches(/\d/, "Password must contain atleast one number")
    .required("Password is required"),
});

const login = () => {

  const router=useRouter();
  // formik is a library to handle the data of a form and yup is used for validation of data
  //step1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();

      axios.post('http://localhost:5000/user/adddetail/',values)
      .then((result) => {
       toast.success('Login successfull');
        console.log(result.data);
        

        // localStorage.setItem('token',result.data.token);
        router.push('/add-pet');
        
        
        }).catch((err) => {
          console.log(err);
          toast.error('Login failed');
         
          
        });

    },
    validationSchema: LoginSchema,
  });
  return (
  <div style={{backgroundImage:`url(https://bruiserdogtrainingcenter.com/wp-content/uploads/2018/10/217256-background.jpg)`, backgroundRepeat:`no-repeat`, backgroundSize:`cover`}}>
    <div  className=" flex justify-center h-screen  items-center w-6/5">
      <div style={{backgroundImage:`url(https://i.pinimg.com/736x/8d/56/b7/8d56b7f2c721d18c6360f6d961eb733f.jpg)`,backgroundPosition:`  bottom `, backgroundRepeat:`no-repeat`,backgroundSize:`cover`}}  className=" border-2 w-1/4 shadow-lg  rounded-lg p-8 bg-white">
        <h3 className="text-center text-black font-bold text-2xl my-4"> LOGIN FORM</h3>
        {/* step2: on submit event used for data handling when submit */}
        <form onSubmit={loginForm.handleSubmit}>
        <label htmlFor="name" className="text-black"> Name</label>
          {/* step3: */}
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="text"
            id="name"
            onChange={loginForm.handleChange}
            value={loginForm.values.name}
          />
          {loginForm.errors.name && loginForm.touched.name? (
            <div className=" text-red-500 text-sm">
              {loginForm.errors.name}
            </div>
          ) : null}
          <label htmlFor="email" className="text-black"> Email address</label>
          {/* step3: */}
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="email"
            id="email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
          />
          {loginForm.errors.email && loginForm.touched.email ? (
            <div className=" text-red-500 text-sm">
              {loginForm.errors.email}
            </div>
          ) : null}
          <label htmlFor="password" className="text-black"> Password</label>
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="password"
            id="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
          />
          {loginForm.errors.password && loginForm.touched.password ? (
            <div className=" text-red-500 text-sm">
              {loginForm.errors.password}
            </div>
          ) : null}
          <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-md w-1/2 mt-5 mb-20">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default login;
