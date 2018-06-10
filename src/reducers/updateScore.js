
export default function updateScore(state, action) {
	if(!action.score) return state;

	const score = action.score;
	
	return {
		...state,
		score
	}
}