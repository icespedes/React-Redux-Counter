import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navigation/>
				{React.cloneElement(this.props.children)}
			</div>
		);
	}
}


