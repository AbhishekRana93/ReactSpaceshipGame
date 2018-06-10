import {calculateAngle} from '../utils/formulas';


export default function moveObjects(state, action) {
	if(!action.mousePosition) return state;

	const {x , y} = action.mousePosition;
	const angle = calculateAngle(x, y, 0, 0);
	
	return {
		...state,
		angle
	}
}