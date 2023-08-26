import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as PersonIcon } from "../assets/svg/personOutlineIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string): boolean => {

    if (route === location.pathname) {
      return true;
    }
    return false;
  };
  return (
    <header className="w-full justify-center items-center py-4 bg-white bottom-0 absolute">
      <nav className="w-full justify-center items-center mx-auto ">
        <ul className="flex justify-around text-lg font-semibold text-[#8f8f8f]">
          <li
            onClick={() => navigate("/")}
            className=" justify-center sm:items-center flex sm:flex-row flex-col"
          >
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              height={36}
              width={36}
            />
            <p
              className={
                pathMatchRoute("/") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }
            >
              Explore
            </p>
          </li>
          <li
            onClick={() => navigate("/offers")}
            className="justify-center sm:items-center flex sm:flex-row flex-col"
          >
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
              height={36}
              width={36}
            />
            <p
              className={
                pathMatchRoute("/offers") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }
            >
              Offer
            </p>
          </li>
          <li
            onClick={() => navigate("/profile")}
            className="justify-center sm:items-center flex sm:flex-row flex-col"
          >
            <PersonIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              height={36}
              width={36}
            />
            <p
              className={
                pathMatchRoute("/profile") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
