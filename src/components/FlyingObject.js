import React from 'react'
import styled, { keyframes } from 'styled-components';
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';
import {gameHeight} from '../utils/constants';



const moveVertically = keyframes`
	0% {
		transform : translateY(0px)
	}
	100% {
		transform : translateY(${gameHeight}px) 
	}
`;

const Move = styled.g`
	animation : ${moveVertically} 4s linear
`;


export default function FlyingObject(props) {
	
	return (
		<Move>
			<FlyingObjectBase position = {props.position}/>
			<FlyingObjectTop position = {props.position}/>
		</Move>
	);
}
