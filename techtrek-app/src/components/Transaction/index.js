import React, { useState, useEffect } from "react";
import RenderedList from "./RenderedList";
import { Table } from "./TransactionElements";
import { Col } from "./Container";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        {
          method: "post",
          headers: {
            "x-api-key": "WOaw4WPY1H7Vy7bqAQDoeaa4HX0VWq7b5oYRYzYA",
          },
          body: JSON.stringify({
            accountKey: "b60212f0-46fb-41fb-aa38-2d609a36a419",
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          //   setTransaction(data.transaction);
        });
    };
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
