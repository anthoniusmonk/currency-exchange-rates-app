import React, { useState } from 'react';
import { Element } from 'react-scroll';
import AmountInput from './AmountInput';
import CurrencyDropdown from './CurrencyDropdown';
import SwapButton from './SwapButton';
import ConvertButton from './ConvertButton';
import './CurrencyConverter.css'; // Import custom CSS

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then(response => response.json())
      .then(data => {
        setConvertedAmount(data.rates[toCurrency]);
      });
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="currency-converter-container">
      <div className="currency-converter-title">
        <h2>Currency Converter</h2>
      </div>
      <div className="currency-converter">
        <AmountInput amount={amount} setAmount={setAmount} />
        <CurrencyDropdown selectedCurrency={fromCurrency} setSelectedCurrency={setFromCurrency} />
        <SwapButton handleSwap={handleSwap} />
        <CurrencyDropdown selectedCurrency={toCurrency} setSelectedCurrency={setToCurrency} />
        <ConvertButton handleConvert={handleConvert} />
        {convertedAmount !== null && (
          <div className="result mt-3">
            <p>
              {amount} {fromCurrency} is {convertedAmount} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;