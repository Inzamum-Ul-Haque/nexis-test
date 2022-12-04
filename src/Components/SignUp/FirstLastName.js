import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const FirstLastName = ({ handleSetFirstLastName }) => {
  return (
    <div className="w-full shadow-xl pt-28 px-20 pb-16 font-inter">
      <h4 className="font-semibold text-xl mb-24">SignUp Form</h4>
      <form onSubmit={handleSetFirstLastName} className="flex flex-col">
        <input
          required
          name="firstName"
          type="text"
          placeholder="Write First Name"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-14"
        />
        <input
          required
          name="lastName"
          type="text"
          placeholder="Write Last Name"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-20"
        />
        <Button text="Next Step" logo={true} />
      </form>

      <p className="text-sm text-gray-400 text-right">
        Already have an account? {"   "}
        <Link
          to="/sign-in"
          className="text-[#1678CB] uppercase underline font-semibold"
        >
          Login Here!
        </Link>
      </p>
    </div>
  );
};

export default FirstLastName;
