"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "Yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

//step4:validation used
const adoptionschema = Yup.object().shape({
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

const adoption = () => {

  const router = useRouter();
  // formik is a library to handle the data of a form and yup is used for validation of data
  //step1: formik initialization
  const adoptionForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();

      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          toast.success(' success');
          console.log(result.data);

        }).catch((err) => {
          toast.error(' failed');
          console.log(err);

        });

    },
    validationSchema: adoptionschema,
  });
  return (
    <div className=" flex justify-center h-screen  items-center">
      <div className=" border-2 w-1/5  shadow-lg  rounded-lg p-8 bg-white">
        <h3 className="text-center font-bold text-2xl my-4"> ADOPTION FORM</h3>
        {/* step2: on submit event used for data handling when submit */}
        <form onSubmit={adoptionForm.handleSubmit}>
          <label htmlFor="email"> Email address</label>
          {/* step3: */}
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="email"
            id="email"
            onChange={adoptionForm.handleChange}
            value={adoptionForm.values.email}
          />
          {adoptionForm.errors.email && adoptionForm.touched.email ? (
            <div className=" text-red-500 text-sm">
              {adoptionForm.errors.email}
            </div>
          ) : null}
          <label htmlFor="password"> Password</label>
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="password"
            id="password"
            onChange={adoptionForm.handleChange}
            value={adoptionForm.values.password}
          />
          {adoptionForm.errors.password && adoptionForm.touched.password ? (
            <div className=" text-red-500 text-sm">
              {adoptionForm.errors.password}
            </div>
          ) : null}
          <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-md w-full mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default adoption;
