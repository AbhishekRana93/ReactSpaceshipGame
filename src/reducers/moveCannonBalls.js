import {getNextPosition, calculateNextPosition} from '../utils/formulas';


export default function moveBalls(cannonBalls) {
	
	return cannonBalls.filter(function(ball) {
		return ball.position.x > -500 && ball.position.x < 500 && ball.position.y > -800
	})
	.map(function(ball) {
		const {x , y} = ball.position;
		const {angle} = ball;

		return {
			...ball,
			position : calculateNextPosition(x, y, angle, 5),
		}
	});

}


// const moveBalls = cannonBalls => (
// 	// if(cannonBalls && cannonBalls[0] && cannonBalls[0].position.x > -500 && cannonBalls[0].position.x < 500 && cannonBalls[0].position.y > -800)
// 	// 	console.log("Inside moveCannonBalls 2 : " + JSON.stringify(calculateNextPosition(0, 0, 90, 5)));
	// cannonBalls
	// .filter(cannonBall => (
	// 	cannonBall.position.y > -800 && cannonBall.position.x > -500 && cannonBall.position.x < 500
	// 	))
	// .map((cannonBall) => {
	// 	const { x, y } = cannonBall.position;
	// 	const { angle } = cannonBall;
	// 	return {
	// 		...cannonBall,
	// 		position: calculateNextPosition(x, y, angle, 5),
	// 	};
	// })
// 	);

// export default moveBalls;