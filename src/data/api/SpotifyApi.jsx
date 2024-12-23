import axios from "axios";
import { decode, encode } from "base-64";
import { useEffect, useState } from "react";
const clientID = "f79c26a017694364b9f01be984d7b9b6";
const clientSecret = "2eccb96d2c0e4465a4662dbe80a57cb8";

const Spotify = () => {
  const [token, setToken] = useState(null);

  const GetTocken = async () => {
    const authString = `${clientID}:${clientSecret}`;
    const encodedAuthString = encode(authString);

    const url = "https://accounts.spotify.com/api/token";
    const headers = {
      Authorization: "Basic " + encodedAuthString,
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const data = new URLSearchParams({ grant_type: "client_credentials" });
    try {
      const result = await axios.post(url, data, { headers: headers });
      setToken(result.data.access_token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };
  const GetAuthHeader = () => {
    GetTocken();
    return { Authoriation: "Bearer " + token };
  };

  const SearchForArtist = async (ArtistName) => {
    const url = "http://api.spotify.com/v1/search";
    const headers = GetAuthHeader();
    const query = `?q=${ArtistName}&type=artist&limit=1`;

    const queryUrl = url + query;
    try {
      const result = await axios.get(queryUrl, { headers: headers });
      console.log(result.data);
    } catch (error) {
      console.error("Erro Getting the Artist: ", error);
    }
  };
  return <div>Spotify Access Token: {token ? token : "Loading..."}</div>;
};

export default Spotify;
