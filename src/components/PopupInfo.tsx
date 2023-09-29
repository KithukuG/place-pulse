import React from "react";
import { Link } from "react-router-dom";

//component for showing listing information in a popup
const PopupInfo = ({ listing }) => {
  const { name, type, regularPrice, offer, discountedPrice, location } =
    listing;

  return (
    <div className="w-fit">
      <div className="flex flex-col">
        <div className="flex gap-5">
          <span className="bg-[#8f8f8f] text-white w-fit p-1 rounded font-semibold">
            {offer ? "On Offer!" : ""}
          </span>
          <span className="bg-[#8f8f8f] text-white w-fit p-1 rounded font-semibold">
            {type}
          </span>
        </div>
        <h2 className="text-[#8f8f8f] font-semibold text-xl">{name}</h2>
        <div className="">
          <p>{offer ? discountedPrice : regularPrice} /= month</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#8f8f8f] text-sm font-light">{location}</p>
        <Link to="/offers" className="text-[#575050] text-sm font-light">
          View
        </Link>
      </div>
    </div>
  );
};

export default PopupInfo;
