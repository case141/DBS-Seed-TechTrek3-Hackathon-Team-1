
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export function BuySellAsset() {
  const [orderType, setOrderType] = useState('');
  const [assetAmount, setAssetAmount] = useState(0);

  function handleTypeChange(e) {
    e.preventDefault();
    setOrderType(e.target.value);
  }

  

  function handleAmountChange(e) {
    e.preventDefault();
    setAssetAmount(e.target.value)
  }


  async function callAPI() {
    let data = await axios.post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
      {
        accountKey: 'b60212f0-46fb-41fb-aa38-2d609a36a419',
        orderType,
        assetAmount
      },
      {
        headers: {
          'x-api-key':  'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
        }
      }
    )

    console.log(data);

  }


  function handleSubmit(e) {
    e.preventDefault();
    callAPI();
    console.log(orderType, assetAmount);
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='transaction-type'>
          <Form.Label>Transaction Type</Form.Label>
          <Form.Control onChange={handleTypeChange} value={orderType} type='text' placeholder="Enter type">
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='asset-amount'>
          <Form.Label>Asset Amount</Form.Label>
          <Form.Control onChange={handleAmountChange} value={assetAmount} type='float' placeholder="Enter type"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit Transaction</Button>
      </Form>
    </div>
  )

}