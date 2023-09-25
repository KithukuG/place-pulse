import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import homeIcon from "../assets/svg/homeIcon.svg";

const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const { name, email } = formData;
  function onLogout() {}
  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  async function onSubmit() {}
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header className="">
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">My profile</p>
        <button onClick={onLogout} type="button" className="">
          Log out
        </button>
      </header>

      <main>
        <div className="">
          <p className="">Personal Details</p>
          <p
            className=""
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prev) => !prev);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="">
          <form className="flex flex-col gap-5 mb-20 max-w-[500px]">
            <input
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
              type="text"
              id="name"
              className={
                !changeDetails
                  ? "profileName"
                  : "px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
              }
            />
            <input
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
              type="text"
              id="email"
              className={
                !changeDetails
                  ? "profileEmail"
                  : "px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
              }
            />
          </form>
        </div>

        <Link to="/create" className="">
          <img src={homeIcon} alt="" />
          <p>Sell or rent your home</p>
        </Link>
      </main>
    </div>
  );
};

export default Profile;
