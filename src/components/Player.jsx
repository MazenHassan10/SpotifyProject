import React, { Component } from "react";
import cirlePlusIcon from "../assets/add.png";
import microphone from "../assets/microphone.png";
import queue from "../assets/play.png";
import linkToDevice from "../assets/link-to-device.png";
import mediumVolume from "../assets/medium-volume.png";
import lowVolume from "../assets/low-volume.png";
import muteVolume from "../assets/volume-mute.png";
import fullScreen from "../assets/fullscreen.png";
import {
  faShuffle,
  faCirclePause,
  faForwardStep,
  faBackwardStep,
  faRepeat,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let player = new Audio("../src/data/Wicked-THESOUNDTRACK/Defying Gravity.mp3");
let playing = false;
const PlayPause = () => {
  playing ? player.pause() : player.play();
  playing = !playing;
};
const Player = () => {
  return (
    <div className="bg-black col-span-2 p-3 justify-between flex">
      <div className="flex gap-4 items-center">
        <img
          className="h-14 rounded-md"
          src="https://i.pinimg.com/474x/ae/2e/c7/ae2ec7d5bcb6bbd41804ecfc9c550b2c.jpg"
        ></img>
        <div className="flex flex-col">
          <h3 className="text-white">LIFETIMES</h3>
          <p className="text-customTextGrey text-sm">Katy Perry</p>
        </div>
        <img className=" opacity-70 invert h-4" src={cirlePlusIcon}></img>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-center items-center gap-6">
          <FontAwesomeIcon
            icon={faShuffle}
            className="text-customTextGrey h-4"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faBackwardStep}
            className="text-customTextGrey h-5"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => PlayPause()}
            icon={faCirclePause}
            className="text-white h-8"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faForwardStep}
            className="text-customTextGrey h-5"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faRepeat}
            className="text-customTextGrey h-4"
          ></FontAwesomeIcon>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-customTextGrey text-xs">0:27</p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="w-[35rem] h-[3px] bg-customTextGrey rounded-lg appearance-none cursor-pointer"
          />
          <p className="text-customTextGrey text-xs">3:12</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img className="h-4 opacity-70 invert" src={microphone}></img>
        <img className="h-5 opacity-70 invert" src={queue}></img>
        <img className="h-5 opacity-70 invert" src={linkToDevice}></img>
        <div className="flex gap-2 items-center">
          <img className="h-5 opacity-70 invert" src={mediumVolume}></img>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="w-[5rem] h-[3px] bg-customTextGrey rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <img className="h-5 opacity-70 invert" src={fullScreen}></img>
      </div>
    </div>
  );
};

export default Player;
