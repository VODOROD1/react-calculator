import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import storeCreator from './redux/store'
import scoreboardReducer from './redux/reducers/scoreboard-reducer'
import calculateReducer from './redux/reducers/calculate-reducer'
import Provider from './react-redux/Provider'

const reducers = []
reducers.push(scoreboardReducer)
reducers.push(calculateReducer)

const store = storeCreator(undefined,reducers)

const rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
