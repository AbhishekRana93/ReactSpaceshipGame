import React from 'react';
import { gameWidth } from '../utils/constants';


export default function StartGame(props) {
	const button = {
	    x: gameWidth / -2, // half width
	    y: -280, // minus means up (above 0)
	    width: gameWidth,
	    height: 200,
	    rx: 10, // border radius
	    ry: 10, // border radius
	    style: {
	    	fill: 'transparent',
	    	cursor: 'pointer',
	    },
	    onClick: props.onClick,
	}

	const text = {
		x : 0,
		y : -150,
		textAnchor : "middle",
		style: {
	    	fill: '#d6d33e',
			fontFamily: "Joti One",
    		fontSize: 80,
    		cursor: 'pointer',
	    },
	    onClick : props.onClick,
	}

	return (
		<g filter = "url(#shadow)">
			<rect {...button}/>
			<text {...text} >Tap to start</text>
		</g>
	)
}


//<rect x ="-200" y = "-520" height = "100" width = "400" fill="black" onClick={props.handleClick}> </rect>