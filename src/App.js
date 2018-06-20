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
  	console.log("testStore => ", this.props.testStore)
    return (
      <div className="App">
        {/*<MonsterLessons />*/}
        {/*<MonsterLessonRedux />*/}

        <React.Fragment>      

	        <input type="text" ref={(input) => {this.trackInput = input}}/>
	        <button onClick={this.addTrack.bind(this)}>AddTrack</button>
	        <ul>
	        	{this.props.testStore.map((item, index) => 
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
		testStore: state
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			dispatch({type: 'ADD_TRACK', payload: trackName})
		}
	})
)(App);
