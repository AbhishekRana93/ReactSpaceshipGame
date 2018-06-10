import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';


export default function Canvas(props) {
	const viewBox = [window.innerWidth/-2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
	
	const cannonBallPosition = {
		x : 0,
		y : -100,
	}

	return (
		<svg id="game_canvas"  viewBox={viewBox} preserveAspectRatio="xMidYMid meet" onMouseMove={props.trackMouse}>
			
			<defs>
				<filter id="shadow">
					<feDropShadow dx="4" dy="8" stdDeviation="4"/>
				</filter>
			</defs>
			
			<Sky/>
			<Ground/>
			<CannonPipe rotation = {props.angle}/>
			<CannonBase/>
			<CannonBall position = {cannonBallPosition}/>
			<CurrentScore score={props.score}/>
			<FlyingObject position = {{x : -400, y : -800}}/>
			<FlyingObject position = {{x : 400, y : -800}}/>

		</svg>
		);
	
}