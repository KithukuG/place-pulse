import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { Home } from "lucide-react";

import conversations from "data/conversations";
import Conversation from "components/Conversations";

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
      <header className="flex items-center justify-between flex-wrap">
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">My profile</p>

        <span className="flex flex-wrap gap-5">
          <Link
            to="/create"
            className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold flex gap-4"
          >
            <Home color="#fff" />
            <p>Create a listing</p>
          </Link>
          <button
            onClick={onLogout}
            type="button"
            className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold"
          >
            Log out
          </button>
        </span>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="max-w-[500px]">
          <div className="flex items-center justify-between py-5">
            <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
              Personal Details
            </p>
            <p
              className="text-[#d85555] font-semibold self-end cursor-pointer underline"
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
        </div>
        <div>
          <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
            My listings
          </p>
        </div>

        <div>
          <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
            My Latest Conversations
          </p>
          <div className="bg-[#8f8f8f] bg-opacity-5 p-5 rounded-md flex flex-col gap-5">
            {conversations.map((conversation) => (
              <Conversation conversation={conversation} key={conversation.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
