import React from 'react'
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';


export default function FlyingObject(props) {
	
	return (
		<g>
			<FlyingObjectBase position = {props.position}/>
			<FlyingObjectTop position = {props.position}/>
		</g>
	);
}
