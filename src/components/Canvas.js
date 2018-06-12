import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';



export default function Canvas(props) {
	const gameHeight = 1200;
	const viewBox = [window.innerWidth/-2, 100 - gameHeight, window.innerWidth, gameHeight];	
	

	const flyingObjectList = props.gameState.flyingObjects.map(flyingObject => (
		<FlyingObject key={flyingObject.id} position={flyingObject.position}/>
	));

  	// console.log(JSON.stringify(props.gameState.cannonBalls) + "Canvas");

	const ballList = props.gameState.cannonBalls.map(ball => (
		<CannonBall key={ball.id} position={ball.position} />
	));

	const lives = [];
	for(let i = 0; i < props.gameState.lives; i++) {
		lives.push(
			<Heart key = {i} position = {{x : -800 - i*80, y : 65}} />
		)
	}

	return (
		<svg id="game_canvas"  viewBox={viewBox} preserveAspectRatio="xMidYMid meet" onMouseMove={props.trackMouse} onClick = {props.shoot}>
			
			<defs>
				<filter id="shadow">
					<feDropShadow dx="4" dy="8" stdDeviation="4"/>
				</filter>
			</defs>
			
			<Sky />
			<Ground />
			{
				props.gameState.started && ballList
			}

			<CannonPipe rotation = {props.angle} />
			<CannonBase />
			<CurrentScore kills={props.gameState.kills} />

			{
				!props.gameState.started && (
					<g>
						<StartGame onClick = {props.handleStart}/>
						<Title/>
					</g>
				)
			}

			{
				props.gameState.started && flyingObjectList
			}
			{
				props.gameState.started && lives
			}

		</svg>
	);
	
}

/*
	<CannonBall cannonBalls = {props.cannonState}/>
	
	<Heart position = {{x : -600, y : 65}} />
*/