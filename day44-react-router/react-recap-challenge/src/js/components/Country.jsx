import React from "react";

const Country = ({ country }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 0 30%",
      }}
    >
      <img
        src={country.flag}
        alt={country.name}
        style={{ maxWidth: "120px" }}
      />
      <h2>{country.name}</h2>
    </div>
  );
};

export default Country;
