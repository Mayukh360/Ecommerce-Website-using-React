import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { FaPercent, FaTimes } from "react-icons/fa";

const Heading = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideHeader = () => {
    setIsVisible(false);
  };

  return (
    <>
    {isVisible && (<Transition  timeout={300}>
      {(state) => (
        <header
          className={`bg-gradient-to-r from-purple-500 to-pink-300 text-white flex items-center justify-between p-4 transition-opacity duration-300 ${
            state === "exiting" ? "opacity-0 h-0" : "opacity-100 h-auto"
          }`}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">E-Commerce Website</h1>
            <div className="ml-4 flex items-center">
              <FaPercent className="mr-2" />
              <p className="font-semibold">50% OFF ON ALL ITEMS</p>
            </div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={hideHeader}
          >
            <FaTimes />
          </button>
         
        </header>
      )}
    </Transition>)}
    </>
  );
};

export default Heading;
