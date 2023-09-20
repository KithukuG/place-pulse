import React from "react";
import { MoonLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] z-10">
      <div className="mx-auto my-auto flex justify-center items-center gap-10">
        <MoonLoader color="#8f8f8f" size={50} />

        <p className="text-[#8f8f8f]">Please wait ...</p>
      </div>
    </div>
  );
};

export default Spinner;
