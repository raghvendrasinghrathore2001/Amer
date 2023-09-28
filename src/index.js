import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaymentPage from './Paymentpage';
import App from './App';
import Details from './Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Details /> */}
    <PaymentPage />
  </React.StrictMode>
);


reportWebVitals();
