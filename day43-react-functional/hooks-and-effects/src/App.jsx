import React, { useState, useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonThumbnails, setPokemonThumbnails] = useState([])
  // const pokemonState = useState([])
  // const pokemon = pokemonState[0]
  // const setPokemon = pokemonState[1]

  useEffect(() => {
    getPokemon()
  }, []) // Empty array is the same as componentDidMount (only runs on first render)

  useEffect(() => {
    getPokemonWithThumbnails()
  }, [pokemon])

  const getPokemonWithThumbnails = async () => {
    let pokemonDetailedObjects = []
    for (const poke of pokemon) {
      const response = await fetch(poke.url)
      const data = await response.json()
      pokemonDetailedObjects.push({
        ...data.species,
        thumbnail: data.sprites.front_default,
      })
    }
    setPokemonThumbnails(pokemonDetailedObjects)
  }

  const getPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5')
      const data = await response.json()
      setPokemon(data.results)
    } catch (err) {
      console.log('getPokemon error', err)
    }
  }
  const pokemonElements = pokemonThumbnails.map((poke, index) => {
    return (
      <div key={`pokemon-${index}`} style={{ display: 'flex' }}>
        <img src={poke.thumbnail} alt={poke.name}/>
        <p>{poke.name}</p>
      </div>
    )
  })
  return <div>{pokemonElements}</div>
}

export default App

// constructor(props) {
//   super(props)
//   this.state = {
//     pokemon: []
//   }
// }