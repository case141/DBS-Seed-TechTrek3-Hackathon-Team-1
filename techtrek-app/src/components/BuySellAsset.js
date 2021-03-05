
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export function BuySellAsset() {
  const [orderType, setOrderType] = useState('BUY');
  const [assetAmount, setAssetAmount] = useState(0);

  function handleTypeChange(e) {
    e.preventDefault();
    setOrderType(e.target.value);
  }

  

  function handleAmountChange(e) {
    e.preventDefault();
    setAssetAmount(e.target.value);
    if (isNaN(e.target.value)) {
      console.log('not a number');
    }
  }


  async function callAPI() {
    try {
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
      alert('transaction successful ' + data.data.orderType + ' ' + data.data.assetAmount + ' ' + data.data.assetSymbol)
    } catch (error) {
      console.log(error);
      alert('Transaction has failed. ' + error.body);
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.checkValidity() !== false) {
      callAPI();
    }
  }


  return (
    <div style={{margin:'20px'}}>
      <Form validated={false} onSubmit={handleSubmit}>
        <Form.Group controlId='transaction-type'>
          <Form.Label>Transaction Type</Form.Label>
          <Form.Control as='select' onChange={handleTypeChange} value={orderType} type='text' placeholder="Enter type">
            <option value="BUY">Buy</option>
            <option value="SELL">Sell</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='asset-amount'>
          <Form.Label>Asset Amount</Form.Label>
          <Form.Control onChange={handleAmountChange} value={assetAmount} type='number' step='0.01' placeholder="Enter amount"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit Transaction</Button>
      </Form>
    </div>
  )

}