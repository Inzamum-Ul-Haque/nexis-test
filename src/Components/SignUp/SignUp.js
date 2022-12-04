import React, { useState } from "react";
import { useNavigate } from "react-router";
import bannerImg from "../../Assets/istockphoto-1321277096-612x612 1.png";
import FirstLastName from "./FirstLastName";
import Password from "./Password";
import PhoneEmail from "./PhoneEmail";

const SignUp = () => {
  const [firstLastName, setFirstLastName] = useState(true);
  const [phoneEmail, setPhoneEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");
  const navigate = useNavigate();

  const handleSetFirstLastName = (event) => {
    event.preventDefault();

    // save name values
    const form = event.target;
    setFirstName(form.firstName.value);
    setLastName(form.lastName.value);

    setFirstLastName(false);
    setPhoneEmail(true);
  };

  const handleSetPhoneEmail = (event) => {
    event.preventDefault();

    // save phone and email
    const form = event.target;
    setPhone(form.code.value + form.phone.value);
    setEmail(form.email.value);

    setPhoneEmail(false);
    setPassword(true);
  };

  const handleSetPassword = (event) => {
    event.preventDefault();
    setSignUpMessage("");

    // save password
    const form = event.target;
    if (form.password.value.length < 8) {
      setSignUpMessage("Password should be 8 characters");
      return;
    }

    // make user object
    const user = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      email: email,
      password: form.password.value,
    };

    // fetch here
    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          navigate("/sign-in");
        }
      });
  };

  const handleBackPhoneEmail = () => {
    setPhoneEmail(false);
    setFirstLastName(true);
  };

  const handleBackPassword = () => {
    setPhoneEmail(true);
    setPassword(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-x-10">
        <div>
          <img src={bannerImg} alt="" />
        </div>
        {firstLastName && (
          <FirstLastName handleSetFirstLastName={handleSetFirstLastName} />
        )}
        {phoneEmail && (
          <PhoneEmail
            handleSetPhoneEmail={handleSetPhoneEmail}
            handleBackPhoneEmail={handleBackPhoneEmail}
          />
        )}
        {password && (
          <Password
            handleSetPassword={handleSetPassword}
            handleBackPassword={handleBackPassword}
            signUpMessage={signUpMessage}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
