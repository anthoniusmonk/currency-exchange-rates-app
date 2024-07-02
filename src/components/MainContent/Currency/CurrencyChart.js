// src/components/CurrencyChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const CurrencyChart = ({ fromCurrency, toCurrency }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const response = await fetch(`https://api.frankfurter.app/${startDate}..${endDate}?from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();
      const dates = Object.keys(data.rates);
      const rates = dates.map(date => data.rates[date][toCurrency]);

      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: `Exchange Rate ${fromCurrency}/${toCurrency}`,
              data: rates,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                },
              },
            ],
          },
        },
      });
    };

    fetchExchangeRates();
  }, [fromCurrency, toCurrency]);

  return (
    <div>
      <h2>Exchange Rate Chart</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default CurrencyChart;