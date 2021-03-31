import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDetails } from '../store/action'
import Navbar from '../components/Navbar'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Details.css'
var Spinner = require('react-spinkit');

export default function DetailsPage() {
  const details = useSelector(state => state.details)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((details) => {
        dispatch(setDetails(details))
      })
      .catch((error) => setError(error))
      .finally((_) => setLoading(false))
  }, [id, dispatch])

  function foundError () {
    if (error) {
      return <div><h1>Here's error {error}</h1></div>
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {foundError()}
      {
        loading ? <div className="d-flex justify-content-center"><Spinner name="ball-spin-fade-loader" /></div> :
        <div className="container">
          <h1 className="text-center mt-5 mb-3">{details.forms[0].name}</h1>
          <div>
            <Row className="justify-content-center">
              <Col sm="6">
                <img className="sticky" src={details.sprites.other['official-artwork'].front_default} alt="pokemon"></img>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">Body</CardTitle>
                  <CardText>height: {details.height}0 cm</CardText>
                  <CardText>weight: {details.weight}0 gram</CardText>
                  <CardTitle tag="h5">Types</CardTitle>
                  <ul>
                  <CardText>
                    {
                      details.types.map((type) => {
                        return <li key={type.type.name}>{type.type.name}</li>
                      })
                    }
                  </CardText>
                  </ul>
                  <CardTitle tag="h5">Stats</CardTitle>
                  <ul>
                  <CardText>
                    {
                      details.stats.map((stat) => {
                        return <li key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</li>
                      })
                    }
                  </CardText>
                  </ul>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm="6">
                <Card body>
                  <CardTitle className="sticky" tag="h5">Abilities</CardTitle>
                  <ul>
                  <CardText>
                    {
                      details.abilities.map((ability) => {
                        return <li key={ability.ability.name}>{ability.ability.name}</li>
                      })
                    }
                  </CardText>
                  </ul>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">Moves</CardTitle>
                  <ul>
                  <CardText>
                    {
                      details.moves.map((move) => {
                        return <li key={move.move.name}>{move.move.name}</li>
                      })
                    }
                  </CardText>
                  </ul>
                </Card>
              </Col>
            </Row>
          </div>
      </div>
      }
    </div>
  )
}
