import React, { Component } from 'react';
import thumbnail from './media/thumbnail.png';
import MobileHeader from './mobile-header';
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { scrolled: false };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	componentDidMount() {
		window.addEventListener('scroll', this.listenToScroll);
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
		window.addEventListener('resize', this.updateWindowDimensions);
		window.removeEventListener('scroll', this.listenToScroll);
	}
	listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		const scrolled = winScroll / clientHeight;
		if (this.state.scrolled === true && scrolled < 0.5) {
			this.setState({
				scrolled: false
			});
		} else if (this.state.scrolled === false && scrolled > 0.5) {
			this.setState({
				scrolled: true
			});
		}
	};
	render = () => {
		const headerClass = `header ${this.state.scrolled ? 'header-scrolled' : ''}`;
		const headerConClass = `header-con ${this.state.scrolled ? 'header-scrolled' : ''}`;
		return (
			<header className={headerConClass}>
				<div className={headerClass}>
					<div className="header-L">
						<div className="h-logo">
							<img src={thumbnail} alt="" />
							<img className="h-logo-title" src="media/ff.png" alt="" />
						</div>
					</div>
					<MobileHeader className="header-R-mobile" />
					<div className="header-R">
						<div className="h-nav">
							<ul className="h-nav-ul">
								<li className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										Tournament
									</a>
								</li>
								<li className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										Speakers
									</a>
								</li>
								<li className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										Sponsors
									</a>
								</li>
								<li className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										FAQ
									</a>
								</li>
								<li className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	};
}
