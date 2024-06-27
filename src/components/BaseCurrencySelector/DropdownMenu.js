import React from 'react';

const BaseCurrencySelector = ({ baseCurrency, setBaseCurrency }) => {
  return (
    <div>
      <label htmlFor='baseCurrency' className='dropdown-title'>Select Currency:</label>
      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
        className="rounded-dropdown"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="AUD">AUD</option>
        <option value="BGN">BGN</option>
        <option value="BRL">BRL</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="CZK">CZK</option>
        <option value="DKK">DKK</option>
        <option value="GBP">GBP</option>
        <option value="HKD">HKD</option>
        <option value="HUF">HUF</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="INR">INR</option>
        <option value="ISK">ISK</option>
        <option value="JPY">JPY</option>
        <option value="KRW">KRW</option>
        <option value="MXN">MXN</option>
        <option value="MYR">MYR</option>
        <option value="NOK">NOK</option>
        <option value="NZD">NZD</option>
        <option value="PHP">PHP</option>
        <option value="PLN">PLN</option>
        <option value="RON">RON</option>
        <option value="SEK">SEK</option>
        <option value="SGD">SGD</option>
        <option value="THB">THB</option>
        <option value="TRY">TRY</option>
        <option value="ZAR">ZAR</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default BaseCurrencySelector;
