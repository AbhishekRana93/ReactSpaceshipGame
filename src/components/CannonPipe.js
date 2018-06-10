import React from 'react'

export default function CannonPipe(props) {
	
	const cannonPipeStyle = {
    	fill: '#999',
    	stroke: '#666',
    	strokeWidth: '2px',
  	};

  	const transform = `rotate(${props.rotation})`

	return (
		<g transform = {transform} >
			<path d="M -30 -120 C -80 100, 80 100, 30 -120"  style= {cannonPipeStyle}  strokeWidth="1"/>
			<line x1={-30} y1={-120} x2={30} y2={-120} style={cannonPipeStyle} />
		</g>
	);
}
