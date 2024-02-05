import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const changeForm = () => {
    return setisSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="baground"
          />
        </div>
        
        <form className="absolute bg-black p-12 text-white w-4/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className="font-bold text-4xl py-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="p-4 my-4 w-full bg-gray-200 text-black rounded-lg"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-200 text-black rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-200 rounded-lg"
          />
          <button className="bg-red-600 hover:bg-red-700 p-3 my-6 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={changeForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already Register? Sign In Now."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
