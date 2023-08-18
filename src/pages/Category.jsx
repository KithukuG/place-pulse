import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Spinner from "../components/Spinner";
import { db } from "../firestore.config";
import { toast } from "react-toastify";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
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
        toast.error("Failed to fetch");
      }
    };

    fetchListings();
  }, [params.categoryName]);
  console.log(listings);
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for rent"
            : "Places for sale"}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => {
                return <h3 key={listing.id}>{listing.data.name}</h3>;
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
