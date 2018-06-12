import {calculateAngle} from '../utils/formulas';

export default function shoot(state, action) {

	if(!state.gameState.started || state.gameState.cannonBalls.length >= 4) return state;

	const id = (new Date()).getTime();

	const {x, y} = action.clickPosition;
	const angle = calculateAngle(0, 0, x, y);

	const position = {
		x : 0,
		y : 0,
	}


	return  {
		...state,
		gameState : {
			...state.gameState,
			cannonBalls : [
				...state.gameState.cannonBalls,
				{
					id,
					position,
					angle,
				}	
			],
		}
	}
}