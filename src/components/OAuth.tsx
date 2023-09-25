import React from "react";

import googleIcon from "../assets/svg/googleIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



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
