import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Spotify from "./data/api/SpotifyApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Spotify />
  </StrictMode>
);
