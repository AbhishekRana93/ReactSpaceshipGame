import React from 'react'

export default function FlyingObjectBase(props) {
	
	const flyingObjectBaseStyle = {
		fill: '#979797',
    	stroke: '#5c5c5c',
  	};

	return (
		<ellipse cx = {props.position.x} cy = {props.position.y} rx = "40" ry = "10" style = {flyingObjectBaseStyle}/>
	);
}
