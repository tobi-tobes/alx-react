import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { ConnectedApp as App } from './App/App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import uiReducer from './reducers/uiReducer';
import thunk from 'redux-thunk';

const store = createStore(uiReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
