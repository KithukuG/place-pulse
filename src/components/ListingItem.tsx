import React from "react";
import { Link } from "react-router-dom";

import { Bed, Users, ShowerHead } from "lucide-react";

// interface ListingItemProps {
//   listing: {
//     id: number;
//     img: string;
//     name: string;
//     location: string;
//     type: string;
//     offer: boolean;
//     discountedPrice: number;
//     regularPrice: number;
//     bedrooms: number;
//     people: number;
//     bathrooms: number;
//   };
// }

const ListingItem = ({ listing }) => {
  return (
    <li className="houseListing">
      {" "}
      {/* Renamed class */}
      <Link
        className="houseListingLink"
        to={`/house/${listing.id}`} // Corrected typo
      >
        <img className="houseListingImg" src={listing.img} alt={listing.name} />
        <div className="houseListingDetails">
          <p className="houseListingLocation">{listing.location}</p>
          <p className="houseListingName">{listing.name}</p>
          <p className="houseListingPrice">
            {listing.type === "rental" ? "Rent: " : "Hostel: "}
            Ksh.{" "}
            {listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rental" && "/ month"}
          </p>
          <div className="houseListingInfoDiv">
            <div>
              <Bed />
              <p className="houseListingInfoText">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : "1 Bedroom"}
              </p>
            </div>
            <div>
              <ShowerHead />
              <p className="houseListingInfoText">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : "1 Bathroom"}
              </p>
            </div>
            <div>
              <Users />
              <p className="houseListingInfoText">
                {listing.people > 1
                  ? `Shared with ${listing.people} people`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListingItem;
