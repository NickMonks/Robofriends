import React from 'react';
// using props.children we can wrap and handle anything that this inside of the component, in our case the cardlist
const Scroll =(props) => {
	//return props.children // this child is type CardList
return(
	<div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
	{props.children}
	</div>
	);
};

export default Scroll;