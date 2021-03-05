
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Card } from 'react-bootstrap'
import './index.css'
function CurrentPricing() {
  const [currentPrice, setCurrentPrice] = useState({})

  useEffect(() => {
    let data = axios.post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
      {},
      {
        headers: {
          'x-api-key': 'WOaw4WPY1H7Vy7bqAQDoeaa4HX0VWq7b5oYRYzYA'
        }
      }
    )
    .then ( function (res) {
      setCurrentPrice(res.data)
    })
  })
  //   setInterval(() => {
  //     data = axios.post(
  //       'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
  //       {},
  //       {
  //         headers: {
  //           'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
  //         }
  //       }
  //     )
  //     .then (function (res) {
  //       setCurrentPrice(res.data)
  //     })


  //   }, (60 * 1000))
  // }, [])

  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{`$${currentPrice.price}`}</Card.Title>
    <Card.Text>
      {currentPrice.assetSymbol}
    </Card.Text>
  </Card.Body>
</Card>
      
  )
}

export default CurrentPricing