import React, { useState } from 'react';
import SiteName from './components/Header/SiteName';
import NavLinks from './components/Header/NavLinks';
import BaseCurrencySelector from './components/BaseCurrencySelector/DropdownMenu';
import ExchangeRatesTable from './components/MainContent/Exchange/ExchangeRatesTable';
import CurrencyConverter from './components/MainContent/Currency/CurrencyConverter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('USD');

  console.log('App component rendered');

  return (
    <div className="app">
      <header>
        <SiteName />
        <NavLinks />
      </header>
      <BaseCurrencySelector baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} />
      <main>
        <ExchangeRatesTable baseCurrency={baseCurrency} />
        <CurrencyConverter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
