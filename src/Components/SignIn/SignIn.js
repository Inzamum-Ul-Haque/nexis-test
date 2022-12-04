import React from "react";
import bannerImg from "../../Assets/istockphoto-1321277096-612x612 1.png";
import EmailPassword from "./EmailPassword";

const SignIn = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-x-10">
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <EmailPassword />
      </div>
    </div>
  );
};

export default SignIn;
