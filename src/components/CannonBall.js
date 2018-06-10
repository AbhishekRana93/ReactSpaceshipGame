import React from 'react'


function CannonBall(props) {

	const cannonBallStyle = {
    	fill: '#777',
	    stroke: '#444',
    	strokeWidth: '2px',
  	};

	return (
		<circle cx = {props.position.x} cy = {props.position.y} r="25" style = {cannonBallStyle}/>
	)
}


export default CannonBall