import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import storeCreator from './redux/store'

const store = storeCreator()
const state = store.getState()

export const Context = React.createContext()

ReactDOM.render(
    <Context.Provider store={state}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
