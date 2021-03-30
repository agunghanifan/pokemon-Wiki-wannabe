import { useState, useEffect } from 'react'

const useFetchImage = (url) => {
  const [ pokemonsImg, setPokemonsImg ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(pokemonData => {
        setPokemonsImg(pokemonData.sprites.other['official-artwork'].front_default)
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
    error
  }
}

export default useFetchImage