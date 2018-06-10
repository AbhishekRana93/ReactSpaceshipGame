
import React, { Component } from 'react';
import Canvas from './components/Canvas';
import {getPositionOnSvg} from './utils/formulas';
// import './App.css';

class App extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.trackMouse = this.trackMouse.bind(this);
	// }

	componentDidMount() {
		const self = this;
		
		this.intervalId = setInterval(() => {
			self.props.moveObjectsDispatcher(self.mousePosition);
		}, 10)
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	trackMouse(e) {
		this.mousePosition = getPositionOnSvg(e);
	}


	render() {
		return (
			<div className="App">
				<Canvas 
					angle = {this.props.angle}
					trackMouse = {event => this.trackMouse(event)}
					score = {this.props.score}
				/>
			</div>
		);
	}
}

export default App