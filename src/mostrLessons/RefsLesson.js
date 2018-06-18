import React from 'react';

export default class RefsLesson extends React.Component {

	handlerClick = () => {
		console.log("Click")
		console.log("input --- ", this.testInput.value)
	}

	render() {
		return (
			<div>
				<br/><strong>RefsLessons</strong><br/>
				<input type="text" ref={(input) => this.testInput = input} />
				<button onClick={this.handlerClick} >Клик</button>
			</div>
		);
	}
}
