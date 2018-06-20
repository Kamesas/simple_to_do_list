import React, { Component } from 'react';
//import MonsterLessons from './mostrLessons/index';
//import MonsterLessonRedux from './monsterLessonRedux/index';
import {connect} from 'react-redux';

class App extends Component {
  render() {
  	console.log("testStore => ", this.props.testStore)
    return (
      <div className="App">
        {/*<MonsterLessons />*/}
        {/*<MonsterLessonRedux />*/}

      </div>
    );
  }
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(App);
