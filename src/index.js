import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
//import {createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { HashRouter, Route} from 'react-router-dom';

import './index.css';
import App from './App';

import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
     <div>
       <Route exact path="/" component={App}/>
     </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
