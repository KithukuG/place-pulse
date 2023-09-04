import React from "react";

const CreateListing = () => {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <h1 className="text-[rgb(143,143,143)] text-4xl font-bold mb-10">
        Create a listing
      </h1>
      <form className="mb-20">
        <input
          className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
          type="text"
          placeholder="name"
        />
        <input
          className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
          type="text"
          placeholder="address"
        />
        <div>
          <div>
            <label htmlFor="rental">Rental</label>
            <input
              id="rental"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="radio"
            />
          </div>
          <div>
            <label htmlFor="hostel">Hostel</label>
            <input
              id="hostel"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="radio"
            />
          </div>
        </div>
        <div>
          <div>
            {" "}
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              id="bedrooms"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="radio"
            />
          </div>
          <div>
            {" "}
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              id="bathrooms"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="radio"
            />
          </div>
        </div>
        <input
          className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
          type="number"
          placeholder="price"
        />
        <div>
          {" "}
          <label htmlFor="offer">Offer</label>
          <input
            id="offer"
            className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
            type="checkbox"
          />
        </div>
        <input
          id="bathrooms"
          className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
          type="number"
          placeholder="people"
        />
        <input
          className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
          type="file"
          placeholder="image"
        />
        <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateListing;
