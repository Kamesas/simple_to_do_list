import React, { Component } from 'react';
import DropDown from "./DropDown.js"
import RegistrationForm from "./RegistrationForm.js"
import RefsLesson from "./RefsLesson.js"

class Header extends Component {

	

  render() {

		console.log(this.props.menuItems);
		let mapMenuItems =  this.props.menuItems.map((item, index) => 
													<li key={index}><a href={item.link} target="blanck">{item.label}</a></li>
								        )

    return (
      <div>
        <DropDown itemsFromIndexJS = {mapMenuItems} />
        <RegistrationForm /> 
        <RefsLesson />       
      </div>
    );
  }
}

export default Header;