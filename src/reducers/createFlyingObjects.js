import {createInterval, maxFlyingObjects, flyingObjectsStarterYAxis, flyingObjectsStarterPositions} from '../utils/constants';


export default function createFlyingObjects(state) {
	if(!state.gameState.started) return state;
	
	const {flyingObjects, lastObjectCreatedAt} = state.gameState;
	const currentTime = (new Date()).getTime();

	if(flyingObjects.length >= maxFlyingObjects || (currentTime - lastObjectCreatedAt.getTime()) <= createInterval) return state;
	
	
	const newFlyingObject = {
		id: currentTime,
		position : {
			x : flyingObjectsStarterPositions[Math.floor(Math.random()*maxFlyingObjects)],
			y : flyingObjectsStarterYAxis,
		},
		createdAt : currentTime,
	}

	return {
		...state,
		gameState : {
			...state.gameState,
			flyingObjects : [
				...state.gameState.flyingObjects,
				newFlyingObject
			],
			lastObjectCreatedAt : new Date(),
		}
	}

}