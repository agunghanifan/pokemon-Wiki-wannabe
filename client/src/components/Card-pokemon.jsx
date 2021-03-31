import React, { useState, useEffect } from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Card-pokemon.css'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites } from '../store/action'
var Spinner = require('react-spinkit');


function CardPokemon (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const { pokemon } = props
  const [ pokemonImg, setPokemonImg ] = useState('')
  const [ pokemonId, setPokemonId ] = useState()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(pokemon.url)
      .then(res => res.json())
      .then(pokemonData => {
        setPokemonImg(pokemonData.sprites.other['official-artwork'].front_default)
        setPokemonId(pokemonData.id)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(_ => {
        setLoading(false)
      })
  }, [pokemon.url])

  const cardImage = {
    width: '150px',
    height: '150px',
  }
  const cardWidth = {
    width: '18rem',
  }

  if(error) {
    return <h1>We find some errors, here: {error}</h1>
  }

  function loadingPict () {
    if (loading) {
      return <div className="d-flex justify-content-center"><Spinner name="circle" /></div>
    } else {
      return <CardImg effect="blur" top width="100%" src={pokemonImg} alt={pokemon.name} style={cardImage} />
    }
  }

  function addFavorites(e, payload) {
    e.preventDefault()
    let flag = true
    favorites.forEach(favorite => {
      if (favorite.id === payload.id) {
        flag = false
        history.push('/')
      }
    })
    if (flag) dispatch(addToFavorites(payload))
  }

  function changesPage(e, id) {
    e.preventDefault()
    console.log(id)
    history.push(`/details/${id}`)
  }

  return (
    <>
      <Card className="bg-image hover-zoom card col-2 m-2 border-0 shadow" style={cardWidth}>
        {loadingPict()}
        <div className="heart" onClick={(event) => addFavorites(event, { pokemonImg: pokemonImg, pokemonName: pokemon.name, id: pokemonId})}></div>
        <CardBody>
          <CardTitle tag="h5" className="text-title">{pokemon.name}</CardTitle>
          <div>
            <Button className="btn-text" onClick={(event) => changesPage(event, pokemonId)}>Details..</Button>
          </div>
        </CardBody>
      </Card>
    </>
    )
}

export default CardPokemon;