import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card-pokemon.css'

class CardPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons_img: '',
      changesPageStatus: false,
    }
  }

  getImageFromServer() {
    const { pokemon } = this.props
    fetch(pokemon.url)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({
          ...this.state,
          pokemons_img: res.sprites.other['official-artwork'].front_default,
        })
      })
  }

  componentDidMount() {
    this.getImageFromServer()
  }

  changesPage(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      changesPageStatus: true,
    })
    
    let timing = setInterval(() => {
      console.log(this.state.changesPageStatus)
      clearInterval(timing)
    }, 500);
  }

  render() {
    const { pokemon } = this.props
    const cardImage = {
      width: '150px',
      height: '150px',
    }
    const cardWidth = {
      width: '18rem',
    }
    return (
      <>
        <Card className="bg-image hover-zoom card col-2 m-2 border-0 shadow" style={cardWidth}>
          <CardImg className="w-100" top width="100%" src={this.state.pokemons_img} alt="Card image cap" style={cardImage} />
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
}

export default CardPokemon;