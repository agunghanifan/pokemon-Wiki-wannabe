import React from 'react'
import useFetchDetails from '../helpers/hooks/useFetchDetails'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
var Spinner = require('react-spinkit');

export default function DetailsPage() {
  const { id } = useParams()
  const { details, loading, error } = useFetchDetails(id)
  
  function loadingDetails () {
    if (loading) {
      return <div className="d-flex justify-content-center"><Spinner className="mt-5" name="ball-spin-fade-loader" /></div>
    }
  }

  function foundError () {
    if (error) {
      return <div><h1>Here's error {error}</h1></div>
    }
  }
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Hello ini Details</h1>
      {loadingDetails()}
      {details}
      {foundError()}
    </div>
  )
}
