import { useState, useEffect } from 'react'

const useFetchImage = (url) => {
  const [ pokemonsImg, setPokemonsImg ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ pokemonId, setPokemonId ] = useState()

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(pokemonData => {
        setPokemonsImg(pokemonData.sprites.other['official-artwork'].front_default)
        setPokemonId(pokemonData.id)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(_ => {
        setLoading(false)
      })
  }, [ setPokemonsImg, url ])

  return {
    pokemonsImg,
    loading,
    error,
    pokemonId
  }
}

export default useFetchImage