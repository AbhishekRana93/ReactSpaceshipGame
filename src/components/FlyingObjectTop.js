import React from 'react';
import {pathFromQuadraticBezierCurve} from '../utils/formulas';

export default function FlyingObjectTop(props) {
	
	const style = {
		fill: '#b6b6b6',
    	stroke: '#5c5c5c',
  	};

  	const ellipseX = props.position.x; // -400
  	const ellipseY = props.position.y; // -800

  	const coord = {
  		initial : {
  			x : ellipseX - 20,
  			y : ellipseY
  		},
  		control : {
  			x : ellipseX,
  			y : ellipseY - 50
  		},
  		end : {
  			x : ellipseX + 20,
  			y : ellipseY
  		}
  	}

  	const curve = pathFromQuadraticBezierCurve(coord);

	return (
		<g>
			<path d = {curve} style = {style}/>
		</g>
	);
}


//		<ellipse cx = "-400" cy = "-800" rx = "40" ry = "10" style = {style}/>
