import React, { useState, useEffect } from "react";
import axios from "axios";
import LibraryImage from "../assets/album.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarPlayList from "./SideBarPlayList";
import SideBarArtist from "./SideBarArtist";
const SideBar = () => {
  const [data, setData] = useState(null); // For storing API data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState([]);
  const clientId = "f79c26a017694364b9f01be984d7b9b6"; // Replace with your Spotify client ID
  const clientSecret = "2eccb96d2c0e4465a4662dbe80a57cb8"; // Replace with your Spotify client secret

  useEffect(() => {
    // Function to fetch the access token
    const fetchToken = async () => {
      const authString = `${clientId}:${clientSecret}`;
      const base64Auth = btoa(authString); // Convert clientId:clientSecret to Base64 format
      console.log(base64Auth, mazen);
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials",
          {
            headers: {
              Authorization: `Basic ${base64Auth}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setToken(response.data.access_token); // Save the token in state
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/artist/6rqhFgbbKwnb9MLmUQDhG6",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
        console.log(setData); // Set the data
      } catch (err) {
        setError(err); // Set the error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);
  return (
    <aside className="h-full bg-customGray rounded-lg mx-2 flex flex-col items-center space-y-5 overflow-y-auto scrollbar-track-customGray scrollbar-thin  scrollbar-thumb-gray-300 scrollbar-track-none scrollbar-none">
      <div className="sticky top-0 bg-customGray h-14 w-full flex justify-center shrink-0 items-center pb-0">
        <img src={LibraryImage} className="h-6 w-6 opacity-65 invert"></img>
      </div>
      <div className=" w-12 h-12 rounded-sm grid place-items-center bg-gradient-to-br from-customPurple to-white flex-shrink-0">
        <FontAwesomeIcon
          icon={faHeart}
          className="h-4 w-4 text-white"
        ></FontAwesomeIcon>
      </div>
      <SideBarPlayList PlayListImg="https://i.pinimg.com/474x/29/83/18/2983180a301c24aa8868c8143d5fac07.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/78/f7/97/78f797264c48c15d950a2f187dad02e1.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/c2/0c/ca/c20cca368d0f4303e1e533213f64546f.jpg" />
      <SideBarPlayList PlayListImg="https://i.pinimg.com/236x/e1/94/51/e1945156ce0d31056a0cc23ffa81c79b.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/9c/5b/ad/9c5bad9f6d6b687a6b36d982682ee771.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/e3/f1/78/e3f178df1ae906248c8e33128925577b.jpg" />
      <SideBarPlayList PlayListImg="https://i.pinimg.com/474x/29/83/18/2983180a301c24aa8868c8143d5fac07.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/78/f7/97/78f797264c48c15d950a2f187dad02e1.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/c2/0c/ca/c20cca368d0f4303e1e533213f64546f.jpg" />
      <SideBarPlayList PlayListImg="https://i.pinimg.com/236x/e1/94/51/e1945156ce0d31056a0cc23ffa81c79b.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/9c/5b/ad/9c5bad9f6d6b687a6b36d982682ee771.jpg" />
      <SideBarArtist ArtistImg="https://i.pinimg.com/736x/e3/f1/78/e3f178df1ae906248c8e33128925577b.jpg" />
    </aside>
  );
};

export default SideBar;
