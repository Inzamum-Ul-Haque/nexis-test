import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const EmailPassword = () => {
  return (
    <div className="w-full shadow-xl pt-28 px-20 pb-16">
      <h4 className="font-inter font-semibold text-xl mb-24">Log in Form</h4>
      <div className="flex flex-col font-inter">
        <input
          type="email"
          placeholder="Write Email Address"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-14"
        />
        <input
          type="password"
          placeholder="Write Password"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-20"
        />
        <Button text="Login" />
      </div>
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
