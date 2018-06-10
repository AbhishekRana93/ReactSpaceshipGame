import React from 'react'

export default function Sky() {
	
	const skyStyle = {
		fill: '#30abef'
	}

	const skyWidth = 5000;
	const skyHeight = 1200;

	return (
		<rect width={skyWidth} height={skyHeight} style={skyStyle} x={skyWidth/-2} y={100 - skyHeight}/>
	);
}