import React, { useState, useEffect } from "react";
import RenderedList from "./RenderedList";
import { Table } from "./TransactionElements";
import { Col } from "./Container";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const accountKey = localStorage.getItem( 'accountKey' );
      fetch(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        {
          method: "post",
          headers: {
            "x-api-key": "dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu",
          },
          body: JSON.stringify({
            accountKey
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
            setTransaction(res);
        });
  }, []);

  return (
    <>
      <Col size={1}>
        <Table>
          <thead>
            <tr>
              <th>Order Type</th>
              <th>Time Stamp</th>
              <th>Asset Amount</th>
              <th>Asset Symbol</th>
              <th>Asset Price</th>
              <th>Cash Amount</th>
              <th>Asset Price</th>
            </tr>
          </thead>
          <tbody>
            <RenderedList items={transaction} />
          </tbody>
        </Table>
      </Col>
    </>
  );
};

export default Transaction;
