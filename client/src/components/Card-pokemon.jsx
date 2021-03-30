import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './Card-pokemon.css'
import useFetchImage from '../helpers/hooks/useFetchImage'

function CardPokemon (props) {
  // const [ pokemonsImg, setPokemonsImg ] = useState('')
  const { pokemonsImg, loading, error } = useFetchImage(props.pokemon.url)
  const { pokemon } = props
  const cardImage = {
    width: '150px',
    height: '150px',
  }
  const cardWidth = {
    width: '18rem',
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>We find some errors, here: {error}</h1>
  }

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