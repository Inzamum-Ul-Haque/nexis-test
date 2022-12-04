import React from "react";
import Button from "../Shared/Button";

const PhoneEmail = ({ handleSetPhoneEmail, handleBackPhoneEmail }) => {
  return (
    <div className="w-full shadow-xl pt-28 px-20 pb-16 font-inter">
      <h4 className="font-semibold text-xl mb-24">SignUp Form</h4>
      <form onSubmit={handleSetPhoneEmail} className="flex flex-col">
        <div className="flex">
          <input
            required
            name="code"
            type="text"
            placeholder="+880"
            className="border w-14 mr-3 px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-14"
          />
          <input
            required
            name="phone"
            type="text"
            placeholder="1XXXXXXXXX"
            className="border px-2 w-full py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-14"
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Write Email Address"
          className="border px-2 py-1 border-x-0 border-t-0 border-b-2 focus:outline-none mb-20"
        />
        <div className="flex justify-evenly ml-7">
          <p
            onClick={handleBackPhoneEmail}
            className="mt-5 font-bold text-[#767676] cursor-pointer"
          >
            Back
          </p>
          <Button text="Next Step" logo={true} />
        </div>
      </form>
    </div>
  );
};

export default PhoneEmail;
