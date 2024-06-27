// ExchangeRatesTable.js
import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ExchangeRatesTable = ({ baseCurrency }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then(response => response.json())
      .then(data => setRates(Object.entries(data.rates)));
  }, [baseCurrency]);

  if (!rates.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              Exchange Rates for {baseCurrency}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <TableHeader />
                  <tbody>
                    {rates.map(([currency, rate]) => (
                      <TableRow key={currency} currency={currency} rate={rate} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRatesTable;