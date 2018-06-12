import {connect} from 'react-redux';
import App from '../App';
import {moveObjects, startGame, shoot} from '../actions/index';



const mapStateToProps = state => ({
	angle: state.angle,
	score : state.score,
	gameState : state.gameState
});

const mapDispatchToProps = dispatch => ({
	moveObjectsDispatcher: (mousePosition) => {
		dispatch(moveObjects(mousePosition));
	},

	startGameDispatcher : () => {
		dispatch(startGame());
	},

	shootDispatcher : (clickPosition) => {
		dispatch(shoot(clickPosition));
	},
});


const Game = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)


export default Game