// const verifyOtp = async () => {
//   const email = localStorage.getItem("email");

//   const res = await axios.post(
//     "http://localhost:5000/user/verify-otp",
//     { email, otp }
//   );

//   toast.success("Login successful");
//   router.push("/add-pet");
// };
'use client';

import React, { useState } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("userId");

  const verifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      await axios.post("http://localhost:5000/user/verify-otp", {
        userId,
        otp,
      });

      toast.success("OTP verified successfully 🎉");

      // ✅ redirect to login after verification
      router.push("/login");

    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.message || "Invalid or expired OTP ❌"
      );
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/52/2a/ce/522ace4de4f20d12144f6dd6b38406c8.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-400 rounded-lg px-3 py-2 mb-4"
        />

        <button
          onClick={verifyOtp}
          className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg"
        >
          Verify OTP
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Didn’t receive OTP?{" "}
          <span className="text-blue-500 cursor-pointer">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;