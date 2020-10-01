import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

 
const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()	)
	}
}

class App extends React.Component{


	componentDidMount(){
		this.props.onRequestRobots();
	}


	render() {
		
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
      	return robot.name.toLowerCase().includes(searchField.toLowerCase());
    	})

		return isPending ?
			<h1>Loading</h1> :
					(
					<div className='tc'>
						<h1 className='f1'> RoboFriends</h1>
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filteredRobots}/>
							</ErrorBoundary>
						</Scroll>
					</div>
						);
				}
			}	
export default connect(mapStateToProps, mapDispatchToProps)(App);
// CONNECT is a HOF, which means that takes as an input a function
// and provides as an output another function. We add two functions that are standard in the Redux industry
// but could be named anything we want