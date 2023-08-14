import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { db } from "../firestore.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

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
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDatacopy = { ...formData };

      delete formDatacopy.password;
      formDatacopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDatacopy);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome to place-pulse</p>
      </header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          id="name"
          className="nameInput"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          className="emailInput"
          onChange={handleChange}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
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
          <button type="submit" className="signUpButton">
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
