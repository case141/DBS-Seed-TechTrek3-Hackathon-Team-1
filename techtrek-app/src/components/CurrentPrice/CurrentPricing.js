
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Card } from 'react-bootstrap'
import './index.css'

function getCurrentPrice()
{
  axios.post(
    'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
    {},
    {
      headers: {
        'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
      }
    }
  )
  .then ( function (res) {
    return res.data
  })
}

function CurrentPricing() {
  const [currentPrice, setCurrentPrice] = useState({})

  useEffect(() => {
    let data = axios.post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
      {},
      {
        headers: {
          'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
        }
      }
    )
    .then ( function (res) {
      setCurrentPrice(res.data)
    })
    
    const timeInterval = setInterval(() => {
      let data = axios.post(
        'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
        {},
        {
          headers: {
            'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
          }
        }
      )
      .then ( function (res) {
        setCurrentPrice(res.data)
      })
    }, (10000000000000000000000000000000000 * 1000)) // 60 * 1000
    return () => clearInterval(interval);
  }, [])

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