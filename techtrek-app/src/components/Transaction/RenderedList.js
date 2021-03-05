import React from "react";

const RenderedList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((prop) => (
        <tr key={prop.transactionId}>
          <td>{prop.orderType}</td>
          <td>{prop.timestamp}</td>
          <td>{prop.assetAmount}</td>
          <td>{prop.assetSymbol}</td>
          <td>{prop.assetPrice}</td>
          <td>{prop.cashAmount}</td>
        </tr>
      ))}
    </>
  );
};

export default RenderedList;
