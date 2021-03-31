import { useState, useEffect } from 'react'

const useFetchDetails = (id) => {
  const [ details, setDetails ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((details) => {
        setDetails(JSON.stringify(details))
      })
      .catch((error) => setError(error))
      .finally((_) => setLoading(false))
  }, [id])

  return {
    details,
    loading,
    error
  }
}

export default useFetchDetails