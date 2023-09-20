import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import data from "../data/listings";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setListings(data);
    setLoading(false);
  }, [])

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">Offers</p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-y-20">
              {listings.map((listing) => {
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
