import React from "react";
import { X } from "lucide-react";
const AddressPicker = ({ onClose, onPick }) => {

  const [addresses, setAddresses] = useState([]);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(`https://geocode.maps.co/search?q=${query}`);
      const data = await response.json();
      setAddresses(data);
    };

    if (query.length > 0) {
      fetchLocations();
    }
  }, [query]);
  
  return (
    <div className="bg-black bg-opacity-20 bottom-0 top-0 left-0 right-0 absolute  z-10 flex items-center justify-center">
      <div className="bg-white z-30 shadow-md w-[90%] md:w-[60%] h-fit rounded-md relative">
        <div
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer mb-5 sm:mb-0"
        >
          <X color="#8f8f8f" />
        </div>

        <div className="px-4 sm:px-10">
          <h1 className="text-2xl font-bold text-center mt-5 text-[#8f8f8f]">
            Search available addresses
          </h1>

          <div className="w-full my-5  flex-wrap gap-5 flex-row">
            <input
              type="search"
              placeholder="Search for a location"
              className="bg-[#eaeaea] px-5 py-2 rounded border-0 ring-0 outline-none w-full sm:w-[60%] mb-5 sm:mb-0"
            />
            <button className="bg-[#9c9020] text-white px-5 py-2 rounded-md ml-2">
              Search
            </button>
          </div>

          <div className="flex flex-col  overflow-y-scroll max-h-[200px]">
            {addresses.map((address, index) => (
              <p
                onClick={() => onPick(address)}
                key={index}
                className="text-[#8f8f8f] mb-2 border cursor-pointer rounded-md p-2"
              >
                {address}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPicker;
