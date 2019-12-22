import React, { Component } from 'react';
import HeaderItems from './HeaderItems';
export default class MobileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = { activeMenu: false };
	}
	menuClick = () => {
		console.log('AHH', this.state.activeMenu);
		if (this.state.activeMenu) {
			this.setState({ activeMenu: false });
		} else {
			this.setState({ activeMenu: true });
		}
	};
	render() {
		const clickClass = `ham-container header-R-mobile__btn ${this.state.activeMenu ? 'change' : ''}`;
		const headerActive = `header-dropdown ${this.state.activeMenu ? 'change' : 'unchange'}`;
		return (
			<div className="header-R-mobile">
				<div className={clickClass} onClick={this.menuClick}>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div>
				<div className={headerActive}>
					<HeaderItems active={this.state.activeMenu} />
				</div>
			</div>
		);
	}
}
