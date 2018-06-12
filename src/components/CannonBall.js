import React from 'react';

export default function CannonBall(props) {

	const cannonBallStyle = {
    	fill: '#777',
	    stroke: '#444',
    	strokeWidth: '2px',
  	};

	return (
		<circle cx = {props.position.x} cy = {props.position.y} r="16" style = {cannonBallStyle}/>
	);
}
