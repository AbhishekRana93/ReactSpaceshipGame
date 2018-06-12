
import React, { Component } from 'react';
import Canvas from './components/Canvas';
import {getPositionOnSvg} from './utils/formulas';
// import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.shoot = this.shoot.bind(this);

	}

	componentDidMount() {
		const self = this;
		
		this.intervalId = setInterval(() => {
			self.props.moveObjectsDispatcher(self.mousePosition);
		}, 10)

		window.onresize = function() {
			const cnvs = document.getElementById("game_canvas");
			cnvs.style.width = `${window.innerWidth}px`;
			cnvs.style.height = `${window.innerHeight}px`;
		}

		window.onresize();
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	trackMouse(e) {
		this.mousePosition = getPositionOnSvg(e);
	}

	shoot(e) {
		this.clickPosition = getPositionOnSvg(e);
		this.props.shootDispatcher(this.clickPosition);
	}


	render() {
		return (
			<div className="App">
				<Canvas 
					angle = {this.props.angle}
					trackMouse = {event => this.trackMouse(event)}
					gameState = {this.props.gameState}
					handleStart = {e => this.props.startGameDispatcher()}
					shoot = {this.shoot}
				/>
			</div>
		);
	}
}

export default App