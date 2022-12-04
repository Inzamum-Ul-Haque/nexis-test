import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, logo }) => {
  return (
    <button
      type="submit"
      className="bg-[#1678CB] p-3 rounded-xl text-white shadow-lg mb-24 w-max border border-[#1678CB] hover:bg-white hover:text-[#1678CB] mx-auto py-4 px-7 flex items-center"
    >
      <span>{text}</span>
      {logo && <BsArrowRight className="ml-2" />}
    </button>
  );
};

export default Button;
