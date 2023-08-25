import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";

import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const listing = [];

        querySnap.forEach((doc) => {
          listing.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listing);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch");
      }
    };

    fetchListings();
  }, []);
  console.log(listings);

  return (
    <div className="offers">
      <header>
        <p className="pageHeader">
         Offers
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => {
                return (
                  <ListingItem
                    listing={listing.data}
                    key={listing.id}
                    id={listing.id}
                  />
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
