import React from "react";
import {
  FaUserAlt,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Panel
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Sign in to access your dashboard
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">
              Email
            </label>
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg">
              <FaUserAlt className="ml-3 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700">
              Password
            </label>
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg">
              <FaLock className="ml-3 text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent border-none outline-none focus:outline-none "
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-[#ff6c3a] rounded-lg shadow-md hover:bg-[#be502c] focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between mt-6 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Create an Account
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500">Or sign in with</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="button"
              className="p-3 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              className="p-3 text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="p-3 text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
