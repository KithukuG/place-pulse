
// // import delete, bedroom and bathroom icons from assets
// import bedIcon from "../assets/svg/bedIcon.svg";
// import bathtubbIcon from "../assets/svg/bathtubIcon.svg";
// import deleteIcon from "../assets/svg/deleteIcon.svg";

// import React from "react";
// import { Link } from "react-router-dom";
// interface ListingItemProps {
//   listing: {
//     id: string;
//     name: string;
//     location: string;
//     regularPrice: number;
//     discountedPrice: number;
//     offer: boolean;
//     imageUrls: string[];
//     type: string;
//     bedrooms: number;
//     bathrooms: number;
//   };
//   id: string;
//   onDelete?: (id: string, name: string) => void;
  
// const ListingItem = ({ listing, id, onDelete }) => {
//   return (
//     <li className="categoryListing">
//       <Link
//         className="categoryListingLink"
//         to={`/category/${listing.type}/${id}`}
//       >
//         <img
//           className="categoryListingImg"
//           src={listing.imageUrls[0]}
//           alt={listing.name}
//         />
//         <div className="categoryListingDetails">
//           <p className="categoryListingLocation">{listing.location}</p>
//           <p className="categoryListingName">{listing.name}</p>
//           <p className="categoryListingPrice">
//             Ksh.{" "}
//             {listing.offer ? listing.discountedPrice : listing.regularPrice}
//             {listing.type === "rent" && "/ month"}
//           </p>
//           <div className="categoryListingInfoDiv">
//             <img src={bedIcon} alt="" />
//             <p className="categoryListingInfoText">
//               {listing.bedrooms > 1
//                 ? `${listing.bedrooms} Bedrooms`
//                 : "1 Bedroom"}
//             </p>
//             <img src={bathtubbIcon} alt="" />
//             <p className="categoryListingInfoText">
//               {listing.bathrooms > 1
//                 ? `${listing.bathrooms} Bathrooms`
//                 : "1 Bathroom"}
//             </p>
//           </div>
//         </div>
//       </Link>
//       {onDelete && (
//         <deleteIcon className="removeIcon" fill="rgb(231, 76, 60)" onClick={()=>onDelete(listing.id, listing.name)} />
//       )}
//     </li>
//   );
// };

// export default ListingItem;
