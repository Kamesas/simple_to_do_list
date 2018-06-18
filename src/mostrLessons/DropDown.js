import React, { Component } from 'react';
//import "./monsterLessons.css"

class DropDown extends Component {

	state = {
		isOpened: false
	};
	

	toggleState = () => {
		console.log(this.state.isOpened)
		this.setState({
			isOpened: !this.state.isOpened
		})
	}

  render() {
  	let Open; 
  	if (this.state.isOpened) {
  		Open = <ul >
					<li>Item 1</li>
					<li>Item 2</li>
        </ul>
  		
  	}
    return (
      <div className="dropDown">
        <h2 >DropDown</h2>
        <button onClick={this.toggleState}>Меню{this.state.isOpened ? " X" : " ↓"}</button>
        {Open}        
      </div>
    );
  }
}

export default DropDown;