import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED} from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data   }))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}
// we are returning a function, and redux itself wont understand. thanks to redux thunk
// this can run, after being implemented as a HOF as a middleware (which means that in the action
// pipeline redux thunk will be listening and if it sees a function it would treat it accordingly )