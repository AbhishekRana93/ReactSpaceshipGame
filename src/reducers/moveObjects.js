import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import moveBalls from './moveCannonBalls';
import checkCollisions from './checkCollisions';


export default function moveObjects(state, action) {
	if (!state.gameState.started) return state;
	
	action.mousePosition = action.mousePosition || {
		x : 0,
		y : 0,
	}

	const {x , y} = action.mousePosition;

	//1
	const angle = calculateAngle(0, 0, x, y);
	
	//2
	const newState = createFlyingObjects(state);
	const now = (new Date()).getTime();
	let flyingObjects = newState.gameState.flyingObjects.filter(function(obj){
		return (now - obj.createdAt) < 4000
	});


	const lostLife = state.gameState.flyingObjects.length > flyingObjects.length;
	let lives = state.gameState.lives;
	if(lostLife) {
		--lives;
	}

	const started = lives > 0;

	if(!started) {
		flyingObjects = [];
		cannonBalls = [];
		lives = 3;
	}

	let cannonBalls = moveBalls(state.gameState.cannonBalls);

	const objectsDestroyed = checkCollisions(cannonBalls, flyingObjects);
	const cannonBallsDestroyed = objectsDestroyed.map(function(obj){
		return obj.cannonBallId;
	});

	const flyingObjectsDestroyed = objectsDestroyed.map(function(obj){
		return obj.flyingDiscId;
	});

	const kills = state.gameState.kills + flyingObjectsDestroyed.length;

	cannonBalls = cannonBalls.filter( x => (cannonBallsDestroyed.indexOf(x.id) < 0))
	flyingObjects = flyingObjects.filter( x => (flyingObjectsDestroyed.indexOf(x.id) < 0))


	return {
		...newState,
		angle,
		gameState : {
			...newState.gameState,
			flyingObjects,
			cannonBalls : [...cannonBalls],
			lives,
			started,
			kills
		}
	}
}