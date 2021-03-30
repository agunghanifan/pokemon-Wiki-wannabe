import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Card-pokemon.css'
import useFetchImage from '../helpers/hooks/useFetchImage'
var Spinner = require('react-spinkit');


function CardPokemon (props) {
  const { pokemonsImg, loading, error } = useFetchImage(props.pokemon.url)
  const { pokemon } = props
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
      return <CardImg effect="blur" top width="100%" src={pokemonsImg} alt={pokemon.name} style={cardImage} />
    }
  }

  function addToFavorites() {

  }

  function changesPage() {

  }

  return (
    <>
      <Card className="bg-image hover-zoom card col-2 m-2 border-0 shadow" style={cardWidth}>
        {loadingPict()}
        <div className="heart" onClick={(event) => addToFavorites(event, pokemon.name)}></div>
        <CardBody>
          <CardTitle tag="h5" className="text-title">{pokemon.name}</CardTitle>
          <div>
            <Button className="btn-text" onClick={(event) => changesPage(event, pokemon.url)}>Details..</Button>
          </div>
        </CardBody>
      </Card>
    </>
    )
}

export default CardPokemon;