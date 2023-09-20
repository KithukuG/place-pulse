import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import data from "../data/listings.json";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">Offers</p>
      </header>
      {loading ? (
        <Spinner />
      ) : data.listings && data.listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {data.listings.map((listing) => {
                return (
                  listing.offer === true && <ListingItem listing={listing} />
                );
              })}
            </ul>
          </main>
        </>
      ) : (
        <p>No listings for offers </p>
      )}
    </div>
  );
};

export default Offers;
