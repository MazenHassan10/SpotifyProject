import React, { Component } from "react";
const SideBarArtist = (props) => {
  return (
    <div
      className={`w-12 h-12 rounded-full grid place-items-center bg-[url(${props.ArtistImg})] bg-cover flex-shrink-0`}
      style={{ backgroundImage: `url(${props.ArtistImg})` }}
    ></div>
  );
};

export default SideBarArtist;
