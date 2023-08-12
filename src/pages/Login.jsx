import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          className="emailInput"
          id="email"
          onChange={handleChange}
        />
        <div className="passwordInputDiv">
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="passwordInput"
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
      </form>
    </div>
  );
};

export default Login;
