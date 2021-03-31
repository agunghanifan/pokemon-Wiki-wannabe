
const initialState = {
  favorites: [],
  pokemons: [],
  fetchLink: 'https://pokeapi.co/api/v2/pokemon',
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'favorites/addFavorites') {
    return { ...state, favorites: [ ...state.favorites, payload]}
  } else if (type === 'fetchLink/setFetchLink') {
    return { ...state, fetchLink: payload}
  } else if (type === 'pokemons/setPokemons') {
    return { ...state, pokemons: payload}
  } else if (type === 'favorites/deleteFavorite') {
    return { ...state,
    favorites: state.favorites.filter((favorite) => favorite.id !== payload)
    }
  }
  return state
}

export default reducer