import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { HashRouter, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './About';

import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
     <div>
       <Route exact path="/" component={App}/>
       <Route exact path="/about" component={About}/>
     </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
