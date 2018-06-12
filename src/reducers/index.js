import {MOVE_OBJECTS, UPDATE_SCORE, START_GAME, SHOOT} from '../actions/index';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';


const initialGameState = {
	started : false,
	lives : 3,
	kills : 0,
	flyingObjects : [],
	lastObjectCreatedAt : new Date(),
	cannonBalls : []
}


const initialState = {
	angle : 60,
	gameState : initialGameState,
}


export default function reducer(state = initialState, action) {
	switch(action.type) {
		
		case MOVE_OBJECTS :
			return moveObjects(state, action);
		
		case START_GAME :
			return startGame(state, initialGameState);
		
		case SHOOT :
			return shoot(state, action);

		default:
			return state;
	}

}
