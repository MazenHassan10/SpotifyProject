import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import browse from "../assets/search.png";
import SpotifyIcon from "../assets/social.png";
import MazenPic from "../assets/MyPic.jpg";
const NavBar = () => {
  return (
    <nav className=" flex items-center justify-between bg-black col-span-2">
      <img className="h-9 ml-6" src={SpotifyIcon} alt="Spotify Logo"></img>
      <div className="flex flex-1 justify-end lg:mr-40 md:mr-0 items-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="h-6 w-6 text-white bg-customGray rounded-full p-3"
        />
        <div className="group flex bg-customGray text-customTextGrey rounded-full p-3 w-[28rem] ml-2 has-[:focus]:border-2 border-white ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-6 w-6 text-customTextGrey"
          />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent outline-none ml-3 text-base w-full border-r mr-3 border-customTextGrey"
          />
          <img className="h-6 w-6 opacity-50 invert" src={browse}></img>
        </div>
      </div>
      <div className="flex justify-around items-center w-96">
        <a className="bg-white py-2 px-2 text-sm rounded-full font-semibold w-36 text-center">
          Explore Premium
        </a>
        <span className="text-white flex items-center text-xs font-bold">
          <FontAwesomeIcon
            icon={faCircleDown}
            className="h-4 w-4 text-white mr-1"
          />
          Install App
        </span>
        <FontAwesomeIcon
          icon={faBell}
          className="h-5 w-5 text-customTextGrey"
        />
        <div className="bg-customGray rounded-full p-2">
          <img
            className="h-8 w-8 rounded-full bg-customGray object-cover"
            src={MazenPic}
            alt="Spotify Logo"
          ></img>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
