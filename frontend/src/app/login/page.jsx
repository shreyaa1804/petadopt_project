"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navi";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/user/login",
          values
        );

        // ✅ store token
        localStorage.setItem("token", res.data.token);

        toast.success("Login successful 🎉");

        // ✅ redirect after login
        // router.push("/add-pet");
        router.push("/dashboard");

        resetForm();
      } catch (err) {
        console.log(err);
        toast.error(
          err?.response?.data?.message || "Login failed ❌"
        );
      }
    },
  });

  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "url(https://bruiserdogtrainingcenter.com/wp-content/uploads/2018/10/217256-background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center h-screen items-center">
          <div
            className="border-2 w-1/4 shadow-lg rounded-lg p-8 bg-white"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/8d/56/b7/8d56b7f2c721d18c6360f6d961eb733f.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-center text-black font-bold text-2xl my-4">
              LOGIN FORM
            </h3>

            <form onSubmit={loginForm.handleSubmit}>
              
              {/* EMAIL */}
              <label className="text-black">Email</label>
              <input
                type="email"
                name="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                className="w-full p-2 border rounded-md mb-2"
              />
              {loginForm.errors.email && loginForm.touched.email && (
                <div className="text-red-500 text-sm mb-2">
                  {loginForm.errors.email}
                </div>
              )}

              {/* PASSWORD */}
              <label className="text-black">Password</label>
              <input
                type="password"
                name="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                className="w-full p-2 border rounded-md mb-2"
              />
              {loginForm.errors.password && loginForm.touched.password && (
                <div className="text-red-500 text-sm mb-2">
                  {loginForm.errors.password}
                </div>
              )}

              <p className="font-bold mt-2">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-500">
                  Signup
                </a>
              </p>

              <button
                type="submit"
                className="bg-blue-500 py-2 px-4 text-white rounded-md w-full mt-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;