import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'


import combineReducers from './store/reducers'
import rootSaga from './store/side-effects/rootSaga'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers,
    compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
>>>>>>> a314b2fec1db587fca1e489b15fef15cf5fd9d60

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
