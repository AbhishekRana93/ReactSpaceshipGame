import React from 'react'

export default function Ground() {
	
	const groundStyle = {
		fill: '#59a941'
	}

	const lineStyle = {
		stroke : "#458232",
		strokeWidth : "3"
	}

	const groundWidth = 5000;
	const groundHeight = 100;

	return (
		<g>
			<rect x={groundWidth/-2} y={0} style={groundStyle} width={groundWidth} height={groundHeight}/>
			<line x1={groundWidth/-2} y1={0} x2={groundWidth/2} y2={0} style={lineStyle}/>
		</g>
	);
}