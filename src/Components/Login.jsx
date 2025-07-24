import React, { useState } from "react";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const toggleSignInForm = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="border-2 m-2 p-4 w-1/4  items-center bg-gray-800 rounded-2xl">
        <p className="mt-5 pl-5 pb-2 text-2xl font-bold">
          {!toggleForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="text-center">
          {toggleForm && (
            <div>
              <input
                className="border-2 m-2 p-3 w-[90%] bg-gradient-to-l  from-gray-900 to-pink-800 rounded-lg"
                type="text"
                placeholder="Name"
              />
            </div>
          )}
          <div>
            <input
              className="border-2 m-2 p-3 w-[90%] bg-gradient-to-l  from-gray-900 to-pink-800 rounded-lg"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div>
            <input
              className="border-2 m-2 p-3 w-[90%] bg-gradient-to-r from-gray-900 to-pink-800 rounded-lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="cursor-pointer border-2 mt-8 p-3 w-[90%] bg-gradient-to-t from-gray-900 to-pink-800 rounded-lg">
            {!toggleForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p className="ml-6 mt-3 mb-5 cursor-pointer" onClick={toggleSignInForm}>
          {!toggleForm
            ? "New to Buzzzy? Register here."
            : "Already have an account? Sign in here."}
        </p>
      </div>
    </div>
  );
};

export default Login;
