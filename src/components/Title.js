import React from 'react';


export default function Title(props) {

	const textStyle = {
    	fontFamily: "Pacifico",
    	fontSize: 130,
    	fill: '#cbca62',
  	};
	return (
		<g filter = "url(#shadow)">
			<path id = "titlePath" d = "M -600 -600 C -400 -1000, 400 -1000, 600 -600" style = {{fill : 'transparent'}}/>
			<text style={textStyle}>
				<textPath href = "#titlePath" startOffset="50%" textAnchor = "middle">
					Welcome to Rana's Game
				</textPath>
			</text>
		</g>
	)
}


//<text {...text} >Tap to start</text>