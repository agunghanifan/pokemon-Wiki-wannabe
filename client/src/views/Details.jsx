import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetailsAsync, setLoadingDetails } from '../store/actions/pokemonsAction'
import Navbar from '../components/Navbar'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Details.css'
var Spinner = require('react-spinkit');

export default function DetailsPage() {
  const details = useSelector(state => state.pokemonsReducer.details)
  const error = useSelector(state => state.pokemonsReducer.error)
  const loadingDetails = useSelector(state => state.pokemonsReducer.loadingDetails)
  const { idPokemon } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("masuk useEffect")
    dispatch(setLoadingDetails(true))
    dispatch(fetchDetailsAsync(idPokemon))
  }, [idPokemon, dispatch])

  function foundError () {
    if (error) {
      return <div><h1>Here's error {JSON.stringify(error)}</h1></div>
    }
  }

  if (loadingDetails) {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="d-flex justify-content-center"><Spinner name="ball-spin-fade-loader" /></div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {foundError()}
      {
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
