import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const toggleSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl text-white y-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            id="name"
            type="text"
            placeholder="User Name"
            className="p-4 my-4 bg-gray-700 rounded-lg w-full"
          ></input>
        )}
        <input
          id="email"
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 rounded-lg w-full"
        ></input>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 rounded-lg w-full"
        ></input>
        <div>
          <button className="p-4 my-6 bg-red-700 w-full left-20">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>
          <p className="py-4 cursor-pointer text-white" onClick={toggleSignUp}>
            {isSignUpForm ? "Sign In" : "New to NetFlix? Please Sign Up Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
