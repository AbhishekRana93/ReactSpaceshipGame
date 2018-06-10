// export const pathFromBezierCurve = (cubicBezierCurve) => {
//   const {
//     initialAxis, initialControlPoint, endingControlPoint, endingAxis,
//   } = cubicBezierCurve;
//   return `
//     M${initialAxis.x} ${initialAxis.y}
//     c ${initialControlPoint.x} ${initialControlPoint.y}
//     ${endingControlPoint.x} ${endingControlPoint.y}
//     ${endingAxis.x} ${endingAxis.y}
//   `;
// };


export function calculateAngle(x1, y1, x2, y2) {
	if(x1 >=0 && y1>=0 ) return 90;
	else if(x1 < 0 && y1 >=0 ) return -90;
	else {
		const num = y2 - y1;
		const denom = x2 - x1;
		var result = Math.atan(denom/num)*-1*180/Math.PI;
		return result;
	}

}

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


export function pathFromBezierCurve(coord) {
	return `M ${coord.initial.x} ${coord.initial.y} Q ${coord.control.x} ${coord.control.y} , ${coord.end.x} ${coord.end.y}`;
}