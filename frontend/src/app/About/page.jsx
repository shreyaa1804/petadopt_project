

import React from 'react';
import Navbar from '@/components/Navi';
import { FaPaw, FaHandsHelping, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12 shadow-lg">
        <h1 className="text-center text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-yellow-300">Paws&Claws</span>!
        </h1>
        <p className="text-center mt-3 text-lg font-medium">
          Bringing pets and loving families together.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-6 space-y-12">
        {/* About Us Section */}
        <section className="bg-white p-10 rounded-2xl shadow-2xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center mb-6">
            <FaPaw className="text-blue-600 text-4xl mr-4" />
            <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="font-semibold text-blue-500">Paws&Claws</span> is more than just a platform; it’s a
            mission to provide every pet a loving home. We connect families with pets in need, making the adoption
            process simple, transparent, and rewarding.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-lg">
            We collaborate with shelters and foster homes to create a compassionate and caring environment for every
            animal. Together, we can make a difference in their lives.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-2xl shadow-2xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center mb-6">
            <FaHeart className="text-red-500 text-4xl mr-4" />
            <h2 className="text-4xl font-bold text-purple-700">Our Mission</h2>
          </div>
          <ul className="list-disc pl-8 text-gray-700 leading-relaxed text-lg space-y-2">
            <li>Ensure every pet finds a loving and caring home.</li>
            <li>Make the adoption process seamless and enjoyable.</li>
            <li>Promote awareness about responsible pet ownership.</li>
            <li>Partner with shelters to enhance animal welfare.</li>
          </ul>
        </section>

        {/* Join Us Section */}
        <section className="bg-white p-10 rounded-2xl shadow-2xl transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center mb-6">
            <FaHandsHelping className="text-yellow-500 text-4xl mr-4" />
            <h2 className="text-4xl font-bold text-blue-700">Join Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you’re looking to adopt or contribute, we invite you to join our mission. Help us create a
            better world for pets by volunteering, donating, or simply spreading the word.
          </p>
          <div className="mt-6">
            <a
              href="/contactus"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg font-medium hover:shadow-2xl transform hover:scale-110 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-center md:text-left">
            &copy; 2025 Paws&Claws | All Rights Reserved
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default About;
