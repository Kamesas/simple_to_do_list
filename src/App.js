import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

	addTrack() {
		if (this.trackInput.value !== '') {			
			this.props.onAddTrack(this.trackInput.value);
			this.trackInput.value = '';
		}
  }

  findTrack() {
  	console.log(this.searchInput.value);
  	this.props.onFindTrack(this.searchInput.value);
  }

  render() {
  	console.log("testStore => ", this.props.tracks)
    return (
        <React.Fragment>      

	        <div>
	        	<input type="text" ref={(input) => {this.trackInput = input}}/>
	        	<button onClick={this.addTrack.bind(this)}>AddTrack</button>
	        </div>
						<br/>
	         <div>
	        	<input type="text" ref={(input) => {this.searchInput = input}}/>
	        	<button onClick={this.findTrack.bind(this)}>Find track</button>
	        </div>

	        <ul>
	        	{this.props.tracks.map((item, index) => 
	        		<li key={index}>{item.name}</li>
	        	)}
	        </ul>

      </React.Fragment>     
    );
  }
}

export default connect(
	state => ({
		tracks: state.tracks
	}),
	dispatch => ({
		onAddTrack: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			}
			dispatch({type: 'ADD_TRACK', payload})
		},
		onFindTrack: (name) => {
			dispatch({ type: 'FIND_TRACK', payload: name})
		}
	})
)(App);
