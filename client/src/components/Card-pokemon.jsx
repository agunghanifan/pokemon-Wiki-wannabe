import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card-pokemon.css'


function CardPokemon (props) {
  const [ pokemonsImg, setPokemonsImg ] = useState('')
  const { pokemon } = props
  const cardImage = {
    width: '150px',
    height: '150px',
  }
  const cardWidth = {
    width: '18rem',
  }

  useEffect(() => {
    fetch(pokemon.url)
      .then(res => res.json())
      .then(pokemonData => {
        setPokemonsImg(pokemonData.sprites.other['official-artwork'].front_default)
      })
  }, [pokemon, setPokemonsImg])

  return (
    <>
      <Card className="bg-image hover-zoom card col-2 m-2 border-0 shadow" style={cardWidth}>
        <CardImg className="w-100" top width="100%" src={pokemonsImg} alt="Card image cap" style={cardImage} />
        <CardBody>
          <CardTitle tag="h5">{pokemon.name}</CardTitle>
          <div>
            <Button className="btn-text" onClick={(event) => this.changesPage(event)}>Details..</Button>
          </div>
        </CardBody>
      </Card>
    </>
    )
}

export default CardPokemon;