import React from "react";

import googleIcon from "../assets/svg/googleIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (e) {
      toast.error("Error occurred");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname == "/login" ? "In" : "Up"} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="" />
      </button>
    </div>
  );
};

export default OAuth;
