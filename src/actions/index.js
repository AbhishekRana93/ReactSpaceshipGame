export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const UPDATE_SCORE = 'UPDATE_SCORE';


export const moveObjects = function(mousePosition) {
	return {
		type: MOVE_OBJECTS,
		mousePosition,
	};
}


export const updateScore = score => ({
	type: UPDATE_SCORE,
	score,
})