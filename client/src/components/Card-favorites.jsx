import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Card-favorites.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from '../store/action'

export default function Cardfavorites(props) {
  const { pokemon } = props
  const history = useHistory()
  const dispatch = useDispatch()
  const cardImage = {
    width: '150px',
    height: '150px',
  }
  const cardWidth = {
    width: '18rem',
  }

  function removeFavorites(e, id) {
    e.preventDefault()
    dispatch(deleteFavorite(id))
  }

  function changesPage(e, id) {
    e.preventDefault()
    history.push(`/details/${id}`)
  }

  return (
    <>
      <Card className="bg-image hover-zoom card col-2 m-2 border-0 shadow" style={cardWidth}>
        <CardImg effect="blur" top width="100%" src={pokemon.pokemonImg} alt={pokemon.pokemonName} style={cardImage} />
        <div className="heart-black" onClick={(event) => removeFavorites(event, pokemon.id)}></div>
        <CardBody>
          <CardTitle tag="h5" className="text-title">{pokemon.pokemonName}</CardTitle>
          <div>
            <Button className="btn-text" onClick={(event) => changesPage(event, pokemon.id)}>Details..</Button>
          </div>
        </CardBody>
      </Card>     
    </>
  )
}
