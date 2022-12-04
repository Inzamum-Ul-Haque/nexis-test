import React, { useState } from "react";
import { useNavigate } from "react-router";
import bannerImg from "../../Assets/istockphoto-1321277096-612x612 1.png";
import EmailPassword from "./EmailPassword";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    setErrorMessage("");
    event.preventDefault();
    const form = event.target;

    const userCredential = {
      email: form.email.value,
      password: form.password.value,
    };
    // console.log(userCredential);

    // fetch here
    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCredential),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          // console.log(data);
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("refreshToken", data.refresh_token);
          navigate("/");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-x-10">
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <EmailPassword
          handleSignIn={handleSignIn}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default SignIn;
