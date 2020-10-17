import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './StateProvider';
import {initialState,reducer} from './Reducer';
import App from './App';

ReactDOM.render(
  <ContextProvider initialState={initialState} reducer={reducer}>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);

if (module.hot) { module.hot.accept(); }
