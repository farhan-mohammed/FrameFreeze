import React, { Component } from 'react';

export default class HeaderItems extends Component {
	constructor(props) {
		super(props);
		this.topics = [
			{ name: 'Tournament', link: '#' },
			{ name: 'Speakers', link: '#' },
			{ name: 'Sponsors', link: '#' },
			{ name: 'FAQ', link: '#' },
			{ name: 'Contact', link: '#' }
		];
	}
	renderList = () =>
		
		this.topics.map((x) => (
			<li className="header-mobile-li" key={x.name}>
				<a className="header-mobile-li_a" href={x.link}>
					{x.name}
				</a>
			</li>
		));
	render() {
		if (this.props.active === true) {
			return(
			<ul className="header-mobile-ul">
				<li className="header-mobile-li-head">
					Frame Freeze
				</li>
				{this.renderList()}
			</ul>
			);
		}
		return <div />;
	}
}
