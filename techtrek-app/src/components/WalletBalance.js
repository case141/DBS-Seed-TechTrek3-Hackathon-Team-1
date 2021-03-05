import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {Card } from 'react-bootstrap'


export function WalletBalance() {
  const [walletBalance, setWalletBalance] = useState({})

  useEffect(() => {
    let data = axios.post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance',
      {
        accountKey: 'b60212f0-46fb-41fb-aa38-2d609a36a419'
      },
      {
        headers: {
          'x-api-key':  'WOaw4WPY1H7Vy7bqAQDoeaa4HX0VWq7b5oYRYzYA'
        }
      }
    ).then (function (res) {
      setWalletBalance(res.data)
    })
  })

  return (
    <div style = {{margin:'20px'}}>    
    <h1> Wallet Balance </h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <h2>Asset Balance: {`${walletBalance.assetBalance}`}</h2>
          <h2>Cash Balance: {walletBalance.cashBalance}</h2>
        </Card.Body>
      </Card>
    </div>
  )

}