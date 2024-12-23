import React, { Component } from "react";
const SideBarPlayList = (props) => {
  return (
    <div
      className=" w-12 h-12 rounded-sm grid place-items-center bg-cover flex-shrink-0"
      style={{
        backgroundImage: props.PlayListImg
          ? `url(${props.PlayListImg})`
          : "linear-gradient(to bottom right, #490EF3, white)",
      }}
    ></div>
  );
};

export default SideBarPlayList;
