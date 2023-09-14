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
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">
          Welcome to place-pulse
        </p>
      </header>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 mb-20 max-w-[500px]  "
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          id="name"
          className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
          onChange={handleChange}
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            id="password"
          />
          <img
            src={visibilityIcon}
            alt="show password"
            className="text-[#8f8f8f] w-6 h-6 cursor-pointer absolute right-[2%] bottom-[16%]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold">
            Sign Up
          </button>
          <Link to="/login" className="text-[#d85555] font-semibold self-end">
            Login Instead
          </Link>
        </div>
      </form>
      {/* google auth */}
    </div>
  );
};

export default Register;
