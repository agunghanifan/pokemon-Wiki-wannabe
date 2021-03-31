import { useState, useEffect } from 'react'

const useFetchData = (url) => {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [fetchLink, setFetchLink] = useState(url)
  const [error, setError] = useState(null)

  function shuffleData (e) {
    e.preventDefault()
    let startById = Math.round(Math.random() * 878)
    setFetchLink(`https://pokeapi.co/api/v2/pokemon/?offset=${startById}&limit=20`)
  }

  useEffect(() => {
    setLoading(true)
    fetch(fetchLink)
      .then(res => res.json())
      .then(pokemonsData => {
        setPokemons(pokemonsData.results)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(_ => {
        setLoading(false)
      })
  }, [fetchLink, setPokemons])
  
  return {
    loading,
    pokemons,
    error,
    shuffleData
  }
}


export default useFetchData
