import React, { useState, useEffect } from "react";

const FilmCharacter = ({ characterOfTheFilm }) => {
  // In functional components seting state with useState equals to this.state.showAllInfo; this.setState({showAllInfo: false}); in the class Component;
  // for each new state you have to write their own useState() hook;
  const [showAllInfo, setShowAllInfo] = useState(false);
  const [starship, setStarship] = useState(null);

  //useEffect() replaces the life cycle methods you fetch the data here in this case we fetch the data for the starship of the character, in case the character changes we fetch the new data
  useEffect(() => {
    fetch(characterOfTheFilm.starships[0])
      .then((response) => response.json())
      .then((data) => setStarship(data));
  }, [characterOfTheFilm]);

  console.log(starship);
  const { name, height } = characterOfTheFilm;
  return (
    <div>
      Film Character
      {/**Object.values() takes the object as a parameter and interates through the object value there is another method called Object.keys() you can iterate through all the object keys */}
      {Object.values(characterOfTheFilm).map((prop, index) => (
        <p
          key={index}
          className={index > 5 && !showAllInfo ? "hidden" : "shown"}
        >
          {prop}
        </p>
      ))}
      {/**By clicking the button we change state and show either all the properties or just some of them */}
      <button onClick={() => setShowAllInfo(!showAllInfo)}>CLICK ME</button>
    </div>
  );
};

export default FilmCharacter;
