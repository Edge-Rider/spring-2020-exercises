import React, { useState, useEffect } from "react";
import Country from "../components/Country.jsx";
import Search from "../components/Search.jsx";

const allCountriesAPI = "https://restcountries.eu/rest/v2/all";
const searchByNameCountriesAPI = "https://restcountries.eu/rest/v2/name/";

const Homepage = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //useEffect() can stand for componentDidmount if you pass empty array as a second parameter, if you dont it will stand fot componentDidMount and also componentDidUpdate
  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = async () => {
    const resp = await fetch(allCountriesAPI);
    const data = await resp.json();
    setAllCountries(data);
  };

  const handleSetSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearchByName();
  };

  const handleSearchByName = async () => {
    console.log(searchValue);
    const resp = await fetch(`${searchByNameCountriesAPI}${searchValue}`);
    const data = await resp.json();
    setAllCountries(data);
  };

  return (
    <>
      {allCountries.length ? (
        <>
          <h1>All Countries:</h1>
          <Search
            onSubmit={handleSearchByName}
            onChange={handleSetSearchValue}
            handleKeyPress={handleKeyPress}
          />
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
