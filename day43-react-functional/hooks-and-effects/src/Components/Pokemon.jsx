import React, { useState, useEffect } from "react";

const Pokemon = ({ pokemon }) => {
  //we want some more info about our pokemon that we store in the state
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    //we use tha url that we got from api to fetch more info about pokemon
    const fetchData = async () => {
      //from props.pokemon we can access two other props url and name, url is the API to get more info so we use it to fetch data
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonInfo(data);
    };
    fetchData();
  }, [pokemon]);

  console.log(pokemonInfo);
  return (
    <div style={{ display: "flex", margin: "8px" }}>
      {pokemonInfo && (
        <img src={pokemonInfo.sprites.back_default} alt={pokemon.alt} />
      )}
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default Pokemon;
