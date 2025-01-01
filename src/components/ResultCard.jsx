import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h2>
        {result.name}, {result.country}
      </h2>
      {result.image && <img src={result.image} alt={`${result.name}`} />}
      <div className="stats">
        <h3>City Statistics:</h3>
        <ul>
          <li>
            <strong>Population:</strong> {result.population.toLocaleString()}
          </li>
          <li>
            <strong>Region:</strong> {result.region}
          </li>
          <li>
            <strong>Latitude:</strong> {result.latitude}
          </li>
          <li>
            <strong>Longitude:</strong> {result.longitude}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
