import React, { useState, useEffect } from "react";
import Country from "../components/Country";

const Homepage = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [nameOfTheCountry, setNameOfTheCountry] = useState("");

  //useEffect() can stand for componentDidmount if you pass empty array as a second parameter, if you dont it will stand fot componentDidMount and also componentDidUpdate
  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = async () => {
    const resp = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await resp.json();
    setAllCountries(data);
  };
  return (
    <>
      {allCountries.length ? (
        <>
          <h1>All Countries:</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {allCountries.map((c, i) => (
              <Country country={c} key={i} />
            ))}
          </div>
        </>
      ) : (
        <h1>No Countries Available</h1>
      )}
    </>
  );
};

export default Homepage;
