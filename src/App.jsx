import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";

const App = () => {
  const [searchResult, setSearchResult] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  const handleSearch = async (query) => {
    try {
      // Fetch city/state data (using a placeholder API)
      const locationResponse = await fetch(
        `https://api.api-ninjas.com/v1/city?name=${query}`,
        {
          headers: { "X-Api-Key": apiKey },
        },
      );
      const locationData = await locationResponse.json();

      if (locationData.length === 0) {
        setSearchResult(null);
        return alert("No results found.");
      }

      const location = locationData[0];

      // Fetch random image for the city/state
      const unsplashResponse = await fetch(
        `https://api.unsplash.com/photos/random?query=${location.name}&client_id=${unsplashApiKey}`,
      );
      const unsplashData = await unsplashResponse.json();

      setSearchResult({
        name: location.name,
        country: location.country,
        image: unsplashData.urls?.regular,
        population: location.population, // Example statistic
        region: location.region, // Example statistic
        latitude: location.latitude, // Example statistic
        longitude: location.longitude, // Example statistic
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <h1>City Snapshot</h1>
      <Searchbar onSearch={handleSearch} />
      {searchResult && <ResultCard result={searchResult} />}
    </div>
  );
};

export default App;
