import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
      email: "",
      confirmpassword: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div class="flex items-center min-h-screen bg-gradient-to-br from-blue-300 to-pink-200">
      <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2 bg-gradient-to-br from-blue-300 to-pink-200 place-items-center ">
            <img
              src="https://www.pinclipart.com/picdir/big/159-1590304_sign-up-illustration-illustration-sign-up-clipart.png"
              className="justify-center animate-pulse mx-20 my-10 w-40 h-40"
            />
            <blockquote className="text-2xl font-medium items-center	">
              <p className="text-4xl italic font-mono transition duration-500 ease-in-out text-center ">
                Hello,Friend!
              </p>
              <p className="text-sm italic font-mono text-center">
                Enter your personal details and start
              </p>
              <p className="text-sm italic font-mono text-center">
                your journey with us
              </p>
            </blockquote>
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2  bg-gradient-to-br from-blue-400 to-pink-200">
            <div class="w-full">
              <h1 class="text-4xl font-mono mb-4 text-center text-black-700">
                Caretex
              </h1>
              <h1 className="text-2xl font-mono text-center text-primary mt-3 mb-5">
                Create Your Account
              </h1>
              <div>
                <label class="block text-sm">Username:</label>
                <input
                  name="username"
                  type="text"
                  value={formData.user.username}
                  onChange={handleChange}
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Username"
                />
              </div>
              <div>
                <label class="block mt-4 text-sm">Email:</label>
                <input
                  name="email"
                  type="text"
                  value={formData.user.email}
                  onChange={handleChange}
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email:"
                />
              </div>

              <div>
                <label class="block mt-4 text-sm">Password:</label>
                <input
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="password"
                  placeholder="Password:"
                  type="password"
                  value={formData.user.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label class="block mt-4 text-sm">Confirm Password:</label>
                <input
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="confirmpassword"
                  placeholder="Confirm Password:"
                  type="password"
                  value={formData.user.confirmpassword}
                  onChange={handleChange}
                />
              </div>

              <button class="block w-full px-4 py-2 mt-7 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
