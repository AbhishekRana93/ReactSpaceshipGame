
export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};


export function getPositionOnSvg(event) {
  // mouse position on auto-scaling canvas. Reference :
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById('game_canvas');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return {x, y};
};


export function pathFromQuadraticBezierCurve(coord) {
	return `M ${coord.initial.x} ${coord.initial.y} Q ${coord.control.x} ${coord.control.y} , ${coord.end.x} ${coord.end.y}`;
}


export function pathFromCubicBezierCurve(coord) {
	return `M ${coord.initial.x} ${coord.initial.y} C ${coord.control1.x} ${coord.control1.y}, ${coord.control2.x} ${coord.control2.y} , ${coord.end.x} ${coord.end.y}`;
}


export const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

export function getNextPosition(x, y, angle, divisor = 100) {
	
	const realAngle = 90 - angle;

	return {
		x : x + Math.sin(angle)/divisor,
		y : y - Math.cos(angle)/divisor,
	}

}


export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

export const calculateNextPosition = (x, y, angle, divisor = 300) => {
	const realAngle = (angle * -1) + 90;
	const stepsX = radiansToDegrees(Math.cos(degreesToRadian(realAngle))) / divisor;
	const stepsY = radiansToDegrees(Math.sin(degreesToRadian(realAngle))) / divisor;
	return {
		x: x +stepsX,
		y: y - stepsY,
	}
};


export const checkCollision = (rectA, rectB) => (
  rectA.x1 < rectB.x2 && rectA.x2 > rectB.x1 &&
  rectA.y1 < rectB.y2 && rectA.y2 > rectB.y1
);