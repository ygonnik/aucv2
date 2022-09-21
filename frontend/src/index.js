import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Card from '../src/components/card.js';
import App from '../src/components/App.js';
import reportWebVitals from './reportWebVitals';

const cardsReact = ReactDOM.createRoot(document.getElementById('cardsReact'));
const app = ReactDOM.createRoot(document.getElementById('app'));

// app.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// );

cardsReact.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
