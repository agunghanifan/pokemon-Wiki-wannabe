// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardPokemon from './components/Card-pokemon'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      fetchLink: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }

  shuffleData(event) {
    event.preventDefault()
    let startById = Math.round(Math.random() * 878)
    this.setState({
      ...this.state,
      fetchLink: `https://pokeapi.co/api/v2/pokemon/?offset=${startById}&limit=20`,
    })
    let timing = setInterval(() => {
      this.getDataFromServer()
      clearInterval(timing)
    }, 300);
  }

  getDataFromServer() {
    fetch(this.state.fetchLink)
      .then(res => res.json())
      .then(res => {
        // console.log(res.results);
        this.setState({
          ...this.state,
          pokemons: res.results
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getDataFromServer()
  }

  render () {
    const { pokemons } = this.state
    const cardDivWidth = {
      width: '100%'
    }
    return (
      <div className="container">
        <h1 className="text-center ml-5 header-font" >Worlds of<img className="img-header" src="pngaaa.com-14402(1).png" alt='pokemon'></img></h1>
        <div className="mt-3 mb-5 row mx-auto d-flex justify-content-center" style={cardDivWidth}>
          {
            pokemons.map((pokemon) => {
              // return <li>{pokemon.name} - {pokemon.url}</li>
              return <CardPokemon pokemon={pokemon} key={pokemon.name}></CardPokemon>
            })
          }
          <div>
            <button className="btn btn-warning mt-5" onClick={(event) => this.shuffleData(event)}>Lets Shuffle this boxes</button>
          </div>
        </div>
      </div>
    )
      
  }
}

export default App;
