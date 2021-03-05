import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {Card } from 'react-bootstrap'


export function WalletBalance() {
  const [walletBalance, setWalletBalance] = useState({})
  const address = localStorage.getItem( 'address' );
  const email = localStorage.getItem( 'email' );
  const firstName = localStorage.getItem( 'firstName' );
  const lastName = localStorage.getItem( 'lastName' );
  const nric = localStorage.getItem( 'nric' );
  const phoneNumber = localStorage.getItem( 'phoneNumber' );
  const username = localStorage.getItem( 'username' );

  useEffect(() => {
    // : 'b60212f0-46fb-41fb-aa38-2d609a36a419'
    const accountKey = localStorage.getItem( 'accountKey' );
    let data = axios.post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance',
      {
        accountKey 
      },
      {
        headers: {
          'x-api-key':  'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
        }
      }
    ).then (function (res) {
      setWalletBalance(res.data)
    })
  }, [])

  return (
    <div style = {{margin:'20px'}}>    
    <h1> Wallet Balance </h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <h2>Asset Balance: {`${walletBalance.assetBalance}`}</h2>
          <h2>Cash Balance: {walletBalance.cashBalance}</h2>
        </Card.Body>
      </Card>
      <h1>Account Profile</h1>
      <h5>Address: { address }</h5>
      <h5>Email: { email }</h5>
      <h5>First Name: { firstName }</h5>
      <h5>Last Name: { lastName }</h5>
      <h5>NRIC: { nric }</h5>
      <h5>Phone Number: { phoneNumber }</h5>
      <h5>Username: { username }</h5>
    </div>
  )

}