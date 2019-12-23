import React, { Component } from 'react';
import layer1 from './media/layer-1.png';
import layer2 from './media/layer-2.png';
import layer3 from './media/layer-3.png';
export default class SectionOne extends Component {
	render() {
		return (
			<div className="sections-body s1-body">
				<div className="intro intro-1" />
				<img className="intro intro-2" src={layer1} alt="" />
				<div className="intro intro-3" />
				<img className="intro intro-4" src={layer3} alt="" />
				<div className="intro-text">
					<div className="intro-text-h1">Frame Freeze</div>
					<div className="intro-text-date">July 27, 2990</div>
					<div className="intro-text-location">Toronto, Canada</div>
				</div>
				<img className="intro intro-5" src={layer2} alt="" />
			</div>
		);
	}
}
