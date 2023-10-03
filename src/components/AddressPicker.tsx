import React from "react";
import { X } from "lucide-react";
const AddressPicker = ({onClose}) => {
  return (
    <div className="bg-black bg-opacity-20 bottom-0 top-0 left-0 right-0 absolute  z-10 flex items-center justify-center">
      
          <div className="bg-white z-30 shadow-md  w-[80%] md:w-[60%] h-[60%] rounded-md relative">
              <div onClick={onClose} className="absolute top-5 right-5 cursor-pointer">
                  <X color="#8f8f8f" />
              </div>
              
          </div>
          
    </div>
  );
};

export default AddressPicker;
