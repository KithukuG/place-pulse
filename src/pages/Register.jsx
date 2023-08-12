import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          id="name"
          className="nameInput"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          id="email"
          className="emailInput"
          onChange={handleChange}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="passwordInput"
            id="password"
          />
          <img
            src={visibilityIcon}
            alt="show password"
            className="showPassword"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
        </Link>
        <div className="signUpBar">
          <p className="signUpText">Sign Up</p>
          <button className="signUpButton">
            <ArrowRightIcon fill="#ffffff" width={34} height={34} />
          </button>
        </div>
      </form>
      {/* google auth */}
      <Link to="/login" className="registerLink">
        Login Instead
      </Link>
    </div>
  );
};

export default Register;
