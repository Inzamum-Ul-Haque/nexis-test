import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const EmailPassword = ({ handleSignIn, errorMessage }) => {
  return (
    <div className="w-full shadow-xl pt-28 px-20 pb-16 font-inter">
      <h4 className="font-semibold text-xl mb-24">Log in Form</h4>
      <form onSubmit={handleSignIn} className="flex flex-col">
        <input
          name="email"
          type="email"
          placeholder="Write Email Address"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-14"
        />
        <input
          name="password"
          type="password"
          placeholder="Write Password"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-20"
        />
        <p className="text-sm text-red-500 text-left mx-2">{errorMessage}</p>
        <Button text="Login" />
      </form>
      <p className="text-sm text-gray-400 text-right">
        Don't have an account? {"   "}
        <Link
          to="/sign-up"
          className="text-[#1678CB] uppercase underline font-semibold"
        >
          SignUp Here!
        </Link>
      </p>
    </div>
  );
};

export default EmailPassword;
