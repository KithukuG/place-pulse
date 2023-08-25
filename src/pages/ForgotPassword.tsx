import React, { useState } from "react";

import { toast } from "react-toastify";
import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent')
    } catch (err) {
      toast.error("Error reseting password!");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader"> Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <Link className="forgotPasswordLink" to="/login">
            Login
          </Link>
          <div className="signInBar">
            <div className="signInText">Send reset link</div>
            <button className="signInButton">
              <ArrowRight fill="#ffffff" width={34} height={34} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
