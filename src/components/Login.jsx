/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;
    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl text-white y-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            ref={name}
            id="name"
            type="text"
            placeholder="User Name"
            className="p-4 my-4 bg-gray-700 rounded-lg w-full"
          ></input>
        )}
        <input
          ref={email}
          id="email"
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 rounded-lg w-full"
        ></input>
        <input
          ref={password}
          id="password"
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 rounded-lg w-full"
        ></input>
        <p className="text-red-400 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer text-white" onClick={toggleSignUp}>
          {isSignUpForm ? "Sign In" : "New to NetFlix? Please Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
