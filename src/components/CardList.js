import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	
	const cardArray = robots.map((user,idx) =>{
		return (
			<Card 	
					key={idx} 
					id={robots[idx].id} 
					name={robots[idx].name} 
					email={robots[idx].email}
				/>
				)
		// important: this is the best way to loop, use the 'map function'
		// when looping in react we also need to define a 'key' value so react know where appears in the virtual dom
	})

	return (
		<div>
			{cardArray}
		</div>
		)
}

export default CardList;