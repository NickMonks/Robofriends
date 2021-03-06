import React from 'react';

const Card = (props) => {
	const {name, email} = props;
	return (//We can only return one thing, so we return the div component
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}test?200x200`}/>
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
		);
}

export default Card;