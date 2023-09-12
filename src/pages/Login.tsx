import React from "react";
import { toast } from "react-toastify";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

import OAuth from "../components/OAuth";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <header>
        <p className="">Welcome back</p>
      </header>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          className=""
          onChange={handleChange}
        />

        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className=""
            id="password"
          />
          <img
            src={visibilityIcon}
            alt="show password"
            className=""
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <Link to="/reset" className="">
          Forgot Password
        </Link>
        <div className="">
          <p className="">Sign In</p>
          <button className="">
            <ArrowRightIcon fill="#ffffff" width={34} height={34} />
          </button>
        </div>
      </form>
      {/* google auth */}
      <OAuth />
      <Link to="/register" className="registerLink">
        Sign Up Instead
      </Link>
    </div>
  );
};

export default Login;
