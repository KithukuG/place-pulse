import React from "react";
import { toast } from "react-toastify";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import visibilityIcon from "../assets/svg/visibilityIcon.svg";

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
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">Welcome back</p>
      </header>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 mb-20 max-w-[500px]"
      >
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
          {showPassword ? (
            <EyeOff
            color="#8f8f8f"
            className="text-[#8f8f8f] w-6 h-6 cursor-pointer absolute right-[2%] bottom-[16%]"
            onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
              <Eye color="#8f8f8f" 
            className="text-[#8f8f8f] w-6 h-6 cursor-pointer absolute right-[2%] bottom-[16%]"
            onClick={() => setShowPassword(!showPassword)}/>
          )
          }
          
        </div>

        <div className="flex justify-between items-center">
          <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold">
            Sign In
          </button>
          <Link to="/reset" className="text-[#d85555] font-semibold self-end">
            Forgot Password
          </Link>
        </div>
      </form>
      {/* google auth */}

      <Link to="/register" className="text-[#d85555] font-semibold">
        Sign Up Instead
      </Link>
    </div>
  );
};

export default Login;
