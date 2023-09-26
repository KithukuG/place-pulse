import React from "react";
import { Link } from "react-router-dom";

import { Bed, Users, ShowerHead } from "lucide-react";

const ListingItem = ({ listing }) => {
  return (
    <li className="">
      <Link
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 "
        to={`/house/${listing.id}`}
      >
        <div className="h-full max-h-[200px] max-w-[300px] w-full">
          <img
            className="w-full h-full  object-cover rounded-md"
            src={listing.img}
            alt={listing.name}
          />
        </div>
        <div className="flex flex-col gap-5 text-[#8f8f8f]">
          <p className="font-semibold text-xl">{listing.name}</p>
          <p className="">{listing.location}</p>
          <p className="">
            {listing.type === "rental" ? "Rent: " : "Hostel: "}
            Ksh.{" "}
            {listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rental" && "/ month"}
          </p>
          <div className="flex gap-5">
            <div>
              <Bed />
              <p className="">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : "1 Bedroom"}
              </p>
            </div>
            <div>
              <ShowerHead />
              <p className="">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : "1 Bathroom"}
              </p>
            </div>
            
          </div>
          {listing.type === "hostel" && (
              <div>
                <Users />
                <p className="">
                  {listing.people > 1
                    ? `Shared with ${listing.people} people`
                    : ""}
                </p>
              </div>
            )}
        </div>
      </Link>
    </li>
  );
};

export default ListingItem;
