import React, { useState } from "react";

export default function Login() {
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
    <div className="h-screen flex bg-gradient-to-br from-blue-300 to-pink-200 ">
      <div className="shadow-2xl w-full max-w-md m-auto rounded-lg border border-primaryBorder shadow-default py-10 px-5">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-4xl font-mono">Caretex</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-2 justify-center">
            <h1 className="text-2xl font-mono text-primary mt-3 mb-5">
              Login to your account
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
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-pink-200 hover:bg-purple-300 py-2 px-4 text-md text-black rounded-full border border-blue "
                }
                value="Login"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <button className={"justify-center text-black-500 hover:underline"}>
              Don't have an account? Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
