import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";

import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import data from "data/listings";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    if (params.categoryName === "rental") {
      setListings(data.filter((listing) => listing.type === "rental"));
    } else if (params.categoryName === "hostel") {
      setListings(data.filter((listing) => listing.type === "hostel"));
    }
    setLoading(false);
  }, [params.categoryName]);
  console.log(listings);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">
          {params.categoryName === "rental"
            ? "Places for rent"
            : "Hostels available"}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-y-20">
              {listings.map((listing) => {
                return <ListingItem listing={listing} key={listing.id} />;
              })}
            </ul>
          </main>
        </>
      ) : (
        <p>No listings for {params.categoryName} </p>
      )}
    </div>
  );
};

export default Category;
