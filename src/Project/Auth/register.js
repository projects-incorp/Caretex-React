import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
      email:"",
      confirmpassword:"",
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
    <div className="overflow-auto h-screen flex bg-gradient-to-br from-blue-300 to-pink-200 ">
      <div className="shadow-2xl w-full max-w-md m-auto rounded-lg border border-primaryBorder shadow-default py-10 px-5">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-4xl font-mono">Caretex</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-2 justify-center">
            <h1 className="text-2xl font-mono text-primary mt-1 mb-5">
              Create Your Account
            </h1>
          </div>
          <form>
            <label className="text-left">Username:</label>
            <input
              name="username"
              type="text"
              value={formData.user.username}
              onChange={handleChange}
              placeholder="Username"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm  mb-4"
              }
            />
            <label className="text-left">Email:</label>
            <input
              name="email"
              type="text"
              value={formData.user.email}
              onChange={handleChange}
              placeholder="Email Id"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm  mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm mb-4"
              }
            />
            <label>Confirm Password:</label>
            <input
              name="confirmpassword"
              type="password"
              value={formData.user.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm mb-4"
              }
            />
            
           
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-pink-200 hover:bg-purple-300 py-2 px-4 text-md text-black rounded-full border border-blue "
                }
                value="SignUp"
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <label className={"justify-center text-black-500 "}>
              Great to have you OnBoard!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
