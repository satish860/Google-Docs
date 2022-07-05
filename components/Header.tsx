import { Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="flex items-center 
    px-4 py-4 shadow-md 
    sticky top-0 z-50 "
    >
      <div className="flex cursor-pointer">
        <span className="material-icons-round cursor-pointer">menu</span>
        <Image src="/Docs.png" width={30} height={30} 
        className="rounded-lg cursor-pointer" />
        <h3 className="text-xl px-2 text-gray-600">Docs</h3>
      </div>

      {/*Search bar*/}
      <div
        className="flex flex-grow bg-gray-100
      rounded-lg items-center px-5 py-2 mx-5 md:mx-20 
      hover:shadow-md focus-within:bg-white"
      >
        <span className="material-icons-round">search</span>
        <input
          className="w-full px-5 
          bg-transparent outline-none
           text-gray-600"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center ">
        <span className="material-icons-round">apps</span>
        <Image
          src="/satish.jpg"
          width={30}
          height={30}
          className="cursor-pointer h-12 w-12 rounded-full ml-6"
        />
      </div>
    </div>
  );
};

export default Header;
