import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'; 
import './index.css';
import App from './App';

const initialState = {
	tracks: [
	"Smells like spirit",
	"Enter Sandman"
	],
	playlist: [
	"My work playlist",
	"My home playlist"
	]
}

function playlist(state = initialState, action) {
  console.log("action => ", action);
  if (action.type === 'ADD_TRACK') {
    return {
    	...state,
    	tracks: [...state.tracks, action.payload]
    };  
  }
  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
									<Provider store={store}>
										<App />
									</Provider>,
									document.getElementById('root')
								);
