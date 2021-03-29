// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardPokemon from './components/Card-pokemon'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: []
    }
  }

  getDataFromServer() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
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
    return (
      <div>
        <h1>Hello WOrlds</h1>
        <ol>
          {
            pokemons.map((pokemon) => {
              // return <li>{pokemon.name} - {pokemon.url}</li>
              return <CardPokemon pokemon={pokemon} key={pokemon.name}></CardPokemon>
            })
          }
        </ol>
      </div>
    )
      
  }
}

export default App;
