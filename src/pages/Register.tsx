import React from "react";

import { toast } from "react-toastify";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import OAuth from "../components/OAuth";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

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
        <p className="">Welcome to place-pulse</p>
      </header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          id="name"
          className=""
          onChange={handleChange}
        />
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

        <div className="">
          <p className="">Sign Up</p>
          <button type="submit" className="signUpButton">
            <ArrowRightIcon fill="#ffffff" width={34} height={34} />
          </button>
        </div>
      </form>
      {/* google auth */}
      <OAuth />

      <Link to="/login" className="registerLink">
        Login Instead
      </Link>
    </div>
  );
};

export default Register;
