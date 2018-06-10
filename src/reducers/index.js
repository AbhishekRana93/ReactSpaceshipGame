import {MOVE_OBJECTS, UPDATE_SCORE} from '../actions/index';
import moveObjects from './moveObjects';
import updateScore from './updateScore';


const initialState = {
	angle : 60,
	score : 0,
}

export default function reducer(state = initialState, action) {
	switch(action.type) {
		
		case MOVE_OBJECTS :
			return moveObjects(state, action)
		
		case UPDATE_SCORE :
			return updateScore(state, action)
		default:
			return state;
	}

}