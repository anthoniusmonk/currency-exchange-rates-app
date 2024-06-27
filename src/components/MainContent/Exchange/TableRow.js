import React from 'react';
import currencyNames from './currencyNames';

const TableRow = ({ currency, rate }) => {
  const fullName = currencyNames[currency] || currency;

  return (
    <tr>
      <td>{`${fullName} (${currency})`}</td>
      <td>{rate}</td>
    </tr>
  );
};

export default TableRow;