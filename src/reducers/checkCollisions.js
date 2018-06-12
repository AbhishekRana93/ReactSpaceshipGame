import {checkCollision} from '../utils/formulas';
import {gameHeight} from '../utils/constants';


export default function checkCollisions(cannonBalls, flyingDiscs) {

	const objectsDestroyed = [];

	flyingDiscs.forEach(function(disc) {
		
		const currentLife = (new Date()).getTime() - disc.createdAt;
		const calculatedPosition = {
			x : disc.position.x,
			y : disc.position.y + (currentLife*gameHeight/4000),
		};

		const rectA = {
			x1 : calculatedPosition.x - 40,
			y1 : calculatedPosition.y - 10,
			x2 : calculatedPosition.x + 40,
			y2 : calculatedPosition.y + 10,
		};

		cannonBalls.forEach(function(ball) {
			const rectB = {
				x1 : ball.position.x - 8,
				y1 : ball.position.y - 8,
				x2 : ball.position.x + 8,
				y2 : ball.position.y + 8,
			}

			if(checkCollision(rectA, rectB)) {
				objectsDestroyed.push({
					cannonBallId : ball.id,
					flyingDiscId : disc.id,
				})
			}

		});


	});

	return objectsDestroyed;
}