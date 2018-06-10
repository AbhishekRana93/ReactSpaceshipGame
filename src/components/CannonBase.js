import React from 'react'

export default function CannonBase() {
	
	const cannonBaseStyle = {
		fill: '#a16012',
		stroke: '#75450e',
		strokeWidth: '2px',
	};

	return (
		<g>
			<path d="M -50 70 C -20 -10, 20 -10, 50 70"  style= {cannonBaseStyle} stroke="black" strokeWidth="1"/>
			<line x1={-50} y1={70} x2={50} y2={70} style={cannonBaseStyle} />
		</g>
	);
}


// <path d="M -40 60 Q 0 -20, 40 60"  style= {cannonBaseStyle} stroke="black" strokeWidth="1"/>
 