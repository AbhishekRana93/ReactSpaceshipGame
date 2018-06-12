import React from 'react'
import {pathFromCubicBezierCurve} from '../utils/formulas';

export default function Heart(props) {
	
	const heartStyle = {
		fill: '#da0d15',
    	stroke: '#a51708',
    	strokeWidth: '2px',
  	};

  	const x = props.position.x; // -400
  	const y = props.position.y; // 50

  	const leftCoord = {
  		initial : {
  			x : x,
  			y : y
  		},
  		
  		control1 : {
  			x : x-50,
  			y : y-15
  		},
  		
  		control2 : {
  			x : x - 20,
  			y : y - 50
  		},

  		end : {
  			x : x,
  			y : y - 30
  		}
  	}

  	  const rightCoord = {
  		initial : {
  			x : x,
  			y : y
  		},
  		
  		control1 : {
  			x : x + 50,
  			y : y-15
  		},
  		
  		control2 : {
  			x : x + 20,
  			y : y - 50
  		},

  		end : {
  			x : x,
  			y : y - 30
  		}
  	}

  	const leftCurve = pathFromCubicBezierCurve(leftCoord);
  	const rightCurve = pathFromCubicBezierCurve(rightCoord);


	return (
		<g>
			<path d = {leftCurve} style = {heartStyle}/>
			<path d = {rightCurve} style = {heartStyle}/>
		</g>
	);
}


/*
			<path d = "M -400 50 C -450 35, -420 0, -400 20" style = {heartStyle}/>
			<path d = "M -400 50 C -350 35, -380 0, -400 20" style = {heartStyle}/>

*/