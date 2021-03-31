import './Home.css';
import React, { useState, useEffect } from 'react'
import CardPokemon from '../components/Card-pokemon'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { setFetchLink, setPokemons } from '../store/action'
var Spinner = require('react-spinkit');

function Home () {
  const fetchLink = useSelector(state => state.fetchLink)
  const pokemons = useSelector(state => state.pokemons)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const cardDivWidth = {
    width: '100%'
  }

  function shuffleData (e) {
    e.preventDefault()
    let startById = Math.round(Math.random() * 878)
    dispatch(setFetchLink(`https://pokeapi.co/api/v2/pokemon/?offset=${startById}&limit=20`))
  }

  useEffect(() => {
    setLoading(true)
    fetch(fetchLink)
      .then(res => res.json())
      .then(pokemonsData => {
        dispatch(setPokemons(pokemonsData.results))
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(_ => {
        setLoading(false)
      })
  }, [fetchLink, dispatch])

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