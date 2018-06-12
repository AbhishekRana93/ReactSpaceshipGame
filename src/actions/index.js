export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const START_GAME = 'START_GAME';
export const SHOOT = 'SHOOT';


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


export const startGame = () => ({
	type : START_GAME,
	
})


export const shoot = (clickPosition) => ({
	type : SHOOT,
	clickPosition
})