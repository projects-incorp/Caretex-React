import React, { useState } from "react";

export default function Trial() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
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
    <div class="flex justify-center items-center w-screen bg-gradient-to-br from-blue-300 to-pink-200">
      <div class="flex-1  max-w-4xl mx-auto bg-white rounded-lg shadow-xl  w-screen justify-center items-center" >
        <div class="flex flex-col md:flex-row sm:flex-col">
          <div class="h-96 md:h-auto md:w-1/2 bg-gradient-to-br from-blue-300 to-pink-200 place-items-center ">
            <img
              src="https://slidro.com/media/2019/12/Login-Illustration.png"
              className="content-center animate-pulse mx-5 my-10 w-40 h-40"
            />
            <blockquote className="text-2xl font-medium items-center 	">
              <p className="text-4xl italic font-mono transition duration-500 ease-in-out text-center ">
                Welcome Back!
              </p>
              <p className="text-sm italic font-mono text-center">
                To keep connected with us please login
              </p>
              <p className="text-sm italic font-mono text-center">
                with your personal info
              </p>
            </blockquote>
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 bg-gradient-to-br from-blue-400 to-pink-200">
            <div class="w-full">
              <h1 class="text-4xl font-mono mb-4 text-center text-black-700">
                Caretex
              </h1>
              <h1 className="text-2xl font-mono text-center text-primary mt-3 mb-5">
                Login to your account
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
                <label class="block mt-4 text-sm">Password:</label>
                <input
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.user.password}
                  onChange={handleChange}
                />
              </div>

              <button class="block w-full px-4 py-2 mt-7 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                Log in
              </button>
              <div className="flex items-center mt-5 justify-center">
                <button
                  className={"justify-center text-black-500 hover:underline"}
                >
                  Don't have an account? Sign up for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
