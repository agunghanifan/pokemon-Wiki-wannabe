const initialState = {
    favorites: [],
    loading: false,
    loadingDetails: true,
    error: null,
    loadingCard: false
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'favorites/addFavorites') {
      return { ...state, favorites: [ ...state.favorites, payload]}
    } else if (type === 'favorites/deleteFavorite') {
      return { ...state,
      favorites: state.favorites.filter((favorite) => favorite.id !== payload)
      }
    } else if (type === 'details/setDetails') {
      return { ...state, details: payload}
    } else if (type === 'loading/setLoading') {
      return { ...state, loading: payload}
    } else if (type === 'error/setError') {
      return { ...state, error: payload}
    } else if (type === 'pokemonId/setPokemonId') {
      return { ...state, pokemonId: payload}
    } else if (type === 'loadingDetails/setLoading') {
      return { ...state, loadingDetails: payload}
    } else if (type === 'loadingCards/setLoading') {
      return { ...state, loadingCards: payload}
    }
    return state
}

export default reducer