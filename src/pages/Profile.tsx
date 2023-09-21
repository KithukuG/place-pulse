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
    <div className="">
      <header className="">
        <p className="">My profile</p>
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
          <form>
            <input
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
            />
            <input
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
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
