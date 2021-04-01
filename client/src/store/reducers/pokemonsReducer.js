const initialState = {
    pokemons: [],
    fetchLink: 'https://pokeapi.co/api/v2/pokemon',
    details: {
      forms: [{
        name: ''
      }]
    },
    loading: false,
    loadingDetails: true,
    error: null,
    loadingCard: false
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    if (type === 'fetchLink/setFetchLink') {
      return { ...state, fetchLink: payload}
    } else if (type === 'pokemons/setPokemons') {
      return { ...state, pokemons: payload}
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