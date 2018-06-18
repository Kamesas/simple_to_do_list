import React, { Component } from 'react';

export default class RegistrationForm extends Component {

	state = {
		email: ''
	}
	
	handleSubmit = (e) => {	
		e.preventDefault();	
		console.log("submit --- ", this.state.email)
	}

	handleEmailChange = (evant) => {
		console.log("change --- ", evant.target.value)
		this.setState({
			email: evant.target.value
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
			<br/>
				<input type="text" placeholder="e-mail" value={this.state.email} onChange={this.handleEmailChange} /><br/>
				<button>Отправить</button>
			</form>
		);
	}
}
