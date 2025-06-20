/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const checkValidation = () => {
    console.log(emailRef.current.value, passwordRef.current.value);

    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL:
              "https://icons.veryicon.com/png/o/emoticon/bao-qing-bao/smile-41.png",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-10 absolute bg-black text-white my-40 mx-auto right-0 left-0 rounded-2xl  opacity-85"
      >
        <h1 className="text-4xl font-bold pb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            className="my-4 p-3 w-full bold bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter Email"
          className="my-4 p-3 w-full bold bg-gray-700  rounded-lg"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className="my-4 p-3 w-full bold bg-gray-700 rounded-lg"
        />
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={checkValidation}
          className="bg-amber-600 my-6 w-full p-3 rounded-lg cursor-pointer"
        >
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
