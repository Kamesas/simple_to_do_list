import React, { Component } from 'react';

class DropDown extends Component {

	state = {
		isOpened: false
	};
	

	toggleState = () => {
		//console.log(this.state.isOpened)
		this.setState({
			isOpened: !this.state.isOpened
		})
	}

  render() {
  	//console.log(this.props.itemsFromIndexJS)

  	let Open; 
  	if (this.state.isOpened) {
  		Open =  <ul >
								{this.props.itemsFromIndexJS}
			        </ul>
  		
  	}
    return (
      <div className="dropDown">
        <button onClick={this.toggleState}>Меню{this.state.isOpened ? " X" : " ↓"}</button>
        {Open}        
      </div>
    );
  }
}

export default DropDown;