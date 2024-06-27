import React from 'react';

const AmountInput = ({ amount, setAmount }) => {
  return (
    <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        className="form-control"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

export default AmountInput;