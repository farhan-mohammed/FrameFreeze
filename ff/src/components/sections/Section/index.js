import React, { Component } from 'react';
import SectionTwo from '../Section_2/';
import SectionThree from '../Section_3/';
import SectionFour from '../Section_4/';
import SectionFive from '../Section_5/';
import SectionSix from '../Section_6/';
import SectionOne from '../Section_1';
// To do: refactor this so that there is a Section Componenet that displays each section
// Need to make a Wrapper component
export default class Section extends Component {
	render() {
		// num = this.props.num;
		// sectionsBodyClass = `sections-body s${num}`;
		// sectionsbackgroundClass = `sections-background s${num}-background`;

		return (
			<div className="frame">
				<div className="sections s1">
					<SectionOne />
					<div className="sections-background s1-background" />
				</div>
				<div className="sections s2">
					<SectionTwo />
					<div className="sections-background s2-background" />
				</div>
				<div className="sections s3">
					<div className="sections-body s3-body" />
					<SectionThree />
				</div>
				<div className="sections s4">
					<SectionFour />
					<div className="sections-background s4-background" />
				</div>
				<div className="sections s5 s5-dark">
					<SectionFive />
					<div className="sections-background s5-background  s5-dark" />
				</div>
				<div className="s6-bridge" style={{ height: '70px' }} />
				<div className="sections s6">
					<SectionSix />
					<div className="sections-background s6-background" />
				</div>
			</div>
		);
	}
}
