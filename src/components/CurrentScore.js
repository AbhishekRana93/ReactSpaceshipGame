import React from 'react'

function CurrentScore(props) {

	const scorePosition = {
		x : (window.innerWidth/2 - 100),
		y : 70,
	}

	const scoreStyle = {
		fill: '#d6d33e',
		fontFamily: "Pacifico",
    	fontSize: 80,
	}

	return (
	<g filter="url(#shadow)">a
		<text x = {scorePosition.x} y = {scorePosition.y} style = {scoreStyle}>
			{props.kills}
		</text>
	</g>
	);
}


export default CurrentScore