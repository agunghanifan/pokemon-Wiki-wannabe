import './Home.css';
import React from 'react'
import CardPokemon from '../components/Card-pokemon'
import useFetchData from '../helpers/hooks/useFetchData'
import Navbar from '../components/Navbar'
var Spinner = require('react-spinkit');

function Home () {
  const { loading, pokemons, error, shuffleData } = useFetchData('https://pokeapi.co/api/v2/pokemon/')
  const cardDivWidth = {
    width: '100%'
  }

  if(error) {
    return <h1>We find some errors, here: {error}</h1>
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container">
        <h1 className="text-center ml-5 header-font" >Worlds of<img className="img-header" src="pngaaa.com-14402(1).png" alt='pokemon'></img></h1>
        <div className="mt-3 mb-5 row mx-auto d-flex justify-content-center" style={cardDivWidth}>
          {
            loading ? <div className="d-flex justify-content-center"><Spinner name="ball-spin-fade-loader" /></div> :
            pokemons.map((pokemon) => {
              return <CardPokemon pokemon={pokemon} key={pokemon.name}></CardPokemon>
            })
          }
          <div className="justify-content-center d-flex">
            <button className="btn btn-warning mt-5 btn-text" onClick={(e) => shuffleData(e)}>Lets Shuffle this boxes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;