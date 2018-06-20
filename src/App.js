import React, { Component } from 'react';
//import MonsterLessons from './mostrLessons/index';
//import MonsterLessonRedux from './monsterLessonRedux/index';
import {connect} from 'react-redux';

class App extends Component {

	addTrack() {
		if (this.trackInput.value !== '') {
			console.log("add track btn => ", this.trackInput.value);
			this.props.onAddTrack(this.trackInput.value);
			this.trackInput.value = '';
		}
  }

  render() {
  	console.log("testStore => ", this.props.tracks)
    return (
      <div className="App">
        {/*<MonsterLessons />*/}
        {/*<MonsterLessonRedux />*/}

        <React.Fragment>      

	        <input type="text" ref={(input) => {this.trackInput = input}}/>
	        <button onClick={this.addTrack.bind(this)}>AddTrack</button>
	        <ul>
	        	{this.props.tracks.map((item, index) => 
	        		<li key={index}>{item}</li>
	        	)}
	        </ul>

      </React.Fragment>

      </div>
    );
  }
}

export default connect(
	state => ({
		tracks: state.tracks
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			dispatch({type: 'ADD_TRACK', payload: trackName})
		}
	})
)(App);
