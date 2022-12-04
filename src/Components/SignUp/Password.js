import React from "react";
import Button from "../Shared/Button";

const Password = ({ handleSetPassword, handleBackPassword, signUpMessage }) => {
  return (
    <div className="w-full shadow-xl pt-28 px-20 pb-16 font-inter">
      <h4 className="font-semibold text-xl mb-24">SignUp Form</h4>
      <form onSubmit={handleSetPassword} className="font-inter flex flex-col">
        <input
          required
          name="password"
          type="password"
          placeholder="Write Password"
          className="border w-full px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none"
        />
        {signUpMessage ? (
          <p className="text-sm text-red-500 text-left px-2 mb-20">
            {signUpMessage}
          </p>
        ) : (
          <p className="text-sm text-[#7E7E7E] text-left px-2 mb-20">
            Your password must be 8 character
          </p>
        )}
        <div className="flex justify-evenly ml-7">
          <p
            onClick={handleBackPassword}
            className="mt-5 font-bold text-[#767676] cursor-pointer"
          >
            Back
          </p>
          <Button text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default Password;
