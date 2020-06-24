import React, { useState, useEffect } from "react";
import Pokemon from "./Components/Pokemon";

//base url that we use to fetch data
const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";

const App = () => {
  //initiate state with useState() hook, 1. parameter is state, 2. is setter that is similar to this.setState({pokemon: ...});
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //by console.log(data) we found out that from API we get and object that contains property results and in it we can find array of pokemons based on our API call
    if (data) {
      setPokemons(data.results);
    } else {
      return null;
    }
  };

  //useEffect() hook kind of replaces the lifecycle methods in the class components and we should fetch data here!
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon App</h1>
      {/**I take my pokemons array iterrate through it and pass the props to the child component Pokemon, each child of an array needs to have the key! */}
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default App;
