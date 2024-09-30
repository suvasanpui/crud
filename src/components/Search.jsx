import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

function Search({isOpen}) {
  return (
    <div className="flex items-center ">
      <div className="flex relative items-center flex-grow">
        <IoMdSearch className="absolute ml-5 text-3xl text-white" />
        <input
          type="text"
          className="m-4 border h-[40px] rounded-lg border-white bg-transparent flex-grow text-white pl-10"
        />
      </div>
      <FaCirclePlus onClick={isOpen} className="text-white text-4xl cursor-pointer"/>
    </div>
  );
}

export default Search;
