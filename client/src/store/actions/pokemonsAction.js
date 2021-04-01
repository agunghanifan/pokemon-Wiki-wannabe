export function setFetchLink(payload) {
    return { type: "fetchLink/setFetchLink", payload }
}
export function setPokemons(payload) {
    return { type: "pokemons/setPokemons", payload}
}
export function setDetails(payload) {
    return { type: "details/setDetails", payload }
}
export function setLoading(payload) {
    return { type: "loading/setLoading", payload}
}
export function setError(payload) {
    return { type: "error/setError", payload }
}
export function setPokemonId(payload) {
  return { type: "pokemonId/setPokemonId", payload }
}
export function setLoadingDetails(payload) {
  return { type: "loadingDetails/setLoading", payload}
}
export function setLoadingCards(payload) {
  return { type: "loadingCards/setLoading", payload}
}

export function fetchPokemonsAsync() {
    return (dispatch, getState) => {
        const { pokemonsReducer } = getState()
        fetch(pokemonsReducer.fetchLink)
          .then(res => res.json())
          .then(pokemonsData => {
              dispatch(setPokemons(pokemonsData.results))
          })
          .catch(err => {
              console.log(err)
              dispatch(setError(err))
          })
          .finally(_ => {
              dispatch(setLoading(false))
          })
    }
}

export function shuffleDatas () {
  return (dispatch) => {
    let startById = Math.round(Math.random() * 878)
    dispatch(setFetchLink(`https://pokeapi.co/api/v2/pokemon/?offset=${startById}&limit=20`))
  }
}

export function fetchDetailsAsync(id) {
  return (dispatch) => {  
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((details) => {
        dispatch(setDetails(details))
      })
      .catch((error) => dispatch(setError(error)))
      .finally((_) => dispatch(setLoadingDetails(false)))
  }
}

