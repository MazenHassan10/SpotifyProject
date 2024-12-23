import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Player from "./components/Player";
const App = () => {
  return (
    <>
      <main className="grid grid-cols-[5.5rem_1fr] grid-rows-[4rem_1fr_5rem] h-screen gap-0 bg-black">
        <NavBar />
        <SideBar />
        <Home />
        <Player />
      </main>
    </>
  );
};

export default App;
