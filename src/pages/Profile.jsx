import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firestore.config";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (e) {
      toast.error("Error occurred!");
    }
  }
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My profile</p>
        <button onClick={onLogout} type="button" className="logOut">
          Log out
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p
            className="profileDetailsText"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prev) => !prev);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profileCard">
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
      </main>
    </div>
  );
};

export default Profile;
