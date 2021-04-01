import './Home.css';
import React, { useEffect } from 'react'
import CardPokemon from '../components/Card-pokemon'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, fetchPokemonsAsync, shuffleDatas } from '../store/actions/pokemonsAction'
var Spinner = require('react-spinkit');

function Home () {
  const fetchLink = useSelector(state => state.pokemonsReducer.fetchLink)
  const pokemons = useSelector(state => state.pokemonsReducer.pokemons)
  const loading = useSelector(state => state.pokemonsReducer.loading)
  const error = useSelector(state => state.pokemonsReducer.error)
  const dispatch = useDispatch()
  const cardDivWidth = {
    width: '100%'
  }

  function shuffleData (e) {
    e.preventDefault()
    dispatch(shuffleDatas())
  }

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(fetchPokemonsAsync())
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
            pokemons.map((pokemon, index) => {
              return <CardPokemon pokemon={pokemon} index={index} key={index}></CardPokemon>
            })
          }
          <div className="justify-content-center d-flex">
            <button className="btn btn-warning mt-5 btn-text btn-shake" onClick={(e) => shuffleData(e)}>Lets Shuffle this boxes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;