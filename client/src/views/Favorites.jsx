import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import CardFavorites from '../components/Card-favorites'
var Spinner = require('react-spinkit');


export default function Favorites() {
  let favorites = useSelector(state => state.favorites)
  const [ loading, setLoading ] = useState(false)
  const cardDivWidth = {
    width: '100%'
  }

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [favorites])

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container">
        <h1 className="text-center ml-5 header-font" >Worlds of<img className="img-header" src="pngaaa.com-14402(1).png" alt='pokemon'></img></h1>
        <div className="mt-3 mb-5 row mx-auto d-flex justify-content-center" style={cardDivWidth}>
          {
            favorites.length < 1 || loading ? <div className="d-flex justify-content-center"><Spinner name="ball-spin-fade-loader" /></div> :
            favorites.map((pokemon) => {
              return <CardFavorites pokemon={pokemon} key={pokemon.name}></CardFavorites>
            })
          }
        </div>
      </div>
    </div>
  )
}
