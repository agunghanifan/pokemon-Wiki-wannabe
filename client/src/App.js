// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import CardPokemon from './components/Card-pokemon'


function App () {
  const [pokemons, setPokemons] = useState([])
  const [fetchLink, setFetchLink] = useState('https://pokeapi.co/api/v2/pokemon/')
  const cardDivWidth = {
    width: '100%'
  }

  function shuffleData (e) {
    e.preventDefault()
    let startById = Math.round(Math.random() * 878)
    setFetchLink(`https://pokeapi.co/api/v2/pokemon/?offset=${startById}&limit=20`)
  }

  useEffect(() => {
    console.log('masuk effect')
    fetch(fetchLink)
      .then(res => res.json())
      .then(pokemonsData => {
        console.log(pokemonsData)
        setPokemons(pokemonsData.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchLink, setPokemons])


  return (
    <div className="container">
      <h1 className="text-center ml-5 header-font" >Worlds of<img className="img-header" src="pngaaa.com-14402(1).png" alt='pokemon'></img></h1>
      <div className="mt-3 mb-5 row mx-auto d-flex justify-content-center" style={cardDivWidth}>
        {
          pokemons.map((pokemon) => {
            return <CardPokemon pokemon={pokemon} key={pokemon.name}></CardPokemon>
          })
        }
        <div className="justify-content-center d-flex">
          <button className="btn btn-warning mt-5 btn-text" onClick={(e) => shuffleData(e)}>Lets Shuffle this boxes</button>
        </div>
      </div>
    </div>
  )
}

export default App;
