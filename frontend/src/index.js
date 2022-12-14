import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/chat.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import LotStore from './store/LotStore';

export const Context = createContext(null);
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <Context.Provider value={{
    user: new UserStore(),
    lot: new LotStore()
  }}>
    <App />
  </Context.Provider>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
