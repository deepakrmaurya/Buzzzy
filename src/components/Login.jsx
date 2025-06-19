import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div>
        <img
          className="w-400 absolute"
          src="https://wallpapers.com/images/high/grey-texture-background-3tbude3nyrxyh2be.webp"
          alt=""
        />
      </div>

      <form className="w-3/12 p-10 absolute bg-black text-white my-40 mx-auto right-0 left-0 rounded-2xl  opacity-85">
        <h1 className="text-4xl font-bold pb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="my-4 p-3 w-full bold bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email"
          className="my-4 p-3 w-full bold bg-gray-700  rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="my-4 p-3 w-full bold bg-gray-700 rounded-lg"
        />
        <button className="bg-amber-600 my-6 w-full p-3 rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Buzzzy? Sign up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
