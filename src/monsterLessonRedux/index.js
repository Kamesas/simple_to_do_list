import React from 'react';
import {createStore} from 'redux'; 

function playlist(state = [], action) {
  console.log("action => ", action);
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);
console.log('начальное состояние стора => ', store.getState());

store.subscribe(() => {
  console.log("subscribe/ store.getState => ", store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit'});

//const addTrackBtn = document.getElementsByClassName("addTrack")[0];
// const addTrackBtn =  document.querySelectorAll(".addTrack")[0];
// addTrackBtn.addEventListener('click', () => {
//   const trackName = document.querySelectorAll('.trackInput')[0].value;
//   console.log('track name', trackName);
// });

export default class MonsterLessonRedux extends React.Component {

  state = {
    valueTrackInput: '',
    one: store.getState()
  }

  addTrack = () => {
    
    console.log("addTrack => ", this.state.valueTrackInput);

    if (this.state.valueTrackInput !== "") {
      store.dispatch({ type: 'ADD_TRACK', payload: this.state.valueTrackInput});

      this.setState ({
        one : store.getState().map((item, i) => {         
                return <li key={i}>{item}</li>                   
              })    
      })
               
    }

    this.setState ({
      valueTrackInput: ''
    })

  }

  inputTrackChange = (evant) => {
    console.log("change => ", evant.target.value)
    this.setState({
      valueTrackInput: evant.target.value
    })
  }

  render() {

    return (
      <React.Fragment>

        <h5>
          install Redux => <i>npm install redux --save --save-exact</i>
        </h5>

        <input type="text" value={this.state.valueTrackInput}  onChange={this.inputTrackChange} />
        <button onClick={this.addTrack} >AddTrack</button>
        <ul className='listTrack' >
          {this.state.one}
        </ul>

      </React.Fragment>
    );
  }
}
