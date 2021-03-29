import React from 'react';

class CardPokemon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { pokemon } = this.props
    return (
      <>
        <li>{pokemon.name} - {pokemon.url}</li>
      </>
    )
  }
}

export default CardPokemon;