"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token =localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/user/me", {
            headers:{
                Authorization: `Bearer ${token}`,
                
            }
        //   withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        router.push("/login");
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl text-black font-bold mb-4">User Dashboard</h1>

        <div className="mb-4 text-black">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => router.push("/add-pet")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Pet
          </button>

          <button
            onClick={() => router.push("/pets")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            View Pets
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}