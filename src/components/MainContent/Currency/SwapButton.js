import React from 'react';

const SwapButton = ({ handleSwap }) => {
  return (
    <button type="button" className="btn btn-secondary btn-block my-3" onClick={handleSwap}>
      Swap
    </button>
  );
};

export default SwapButton;