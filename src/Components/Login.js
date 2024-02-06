import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const naviGate = useNavigate(); 

  // taking value
  const email = useRef(null);
  const password = useRef(null);

  const changeForm = () => {
    return setisSignInForm(!isSignInForm);
  };

  const handelButton = () => {
    //   console.log(email);  >> currect value is - email.current.value
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // if message is null meanse , email and password is valid
    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          naviGate('/browse');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signed in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          naviGate('/browse');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black p-12 text-white w-4/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
        >
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

          {/* Email */}
          <input
            type="email"
            ref={email}
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-200 text-black rounded-lg"
          />

          {/* Password */}
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-200 text-black rounded-lg"
          />

          {/* error message */}
          <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>

          {/* Button */}
          <button
            className="bg-red-600 hover:bg-red-700 p-3 my-6 w-full rounded-lg"
            onClick={handelButton}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* user or not */}
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
