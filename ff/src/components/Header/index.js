import React, { Component } from 'react';
import thumbnail from './media/thumbnail.png';

export default class Header extends Component {
	render() {
		return (
			<header className="header-con">
				<div className="header">
					<div className="header-L">
						<div className="h-logo">
							<img src={thumbnail} alt="" />
							<img className="h-logo-title" src="media/ff.png" alt="" />
						</div>
					</div>
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
								<li id="contact" className="h-nav-ul__li">
									<a href="#" className="hi-nav-ul__li-a">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
