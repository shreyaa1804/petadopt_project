// pages/contact.js

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 shadow-lg">
        <h1 className="text-center text-5xl font-extrabold tracking-tight">
          Contact <span className="text-yellow-300">Us</span>
        </h1>
        <p className="text-center mt-2 text-lg font-medium">
          We'd love to hear from you! Reach out with your questions or feedback.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details Section */}
          <section className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you have questions about adoption, want to volunteer, or just want to say hello, feel free to
              reach out to us. We’re here to help!
            </p>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-700">
                <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                <span>support@pawsandclaws.com</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
                <span>123 Pet Lane, Animal City, CA 12345</span>
              </li>
            </ul>
          </section>

          {/* Contact Form Section */}
          <section className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow-lg font-medium hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <p className="text-center text-sm md:text-base">
          &copy; 2025 Paws&Claws | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Contact;

