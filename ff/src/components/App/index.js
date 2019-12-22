import React, { Component } from 'react';
import '../../css/style.css';
import 'animate.css/animate.min.css';
import Header from '../Header/';
import Section from '../sections/Section/';
export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Header />
				<Section />
			</div>
		);
	}
}
