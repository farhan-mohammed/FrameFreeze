import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import ffne from './media/ffne.png';

export default class SectionTwo extends Component {
	render() {
		const title = "Toronto's First ESports Conference";
		const bodyText =
			'Frame Freeze is an annual conference/ tournament that aims to bring together coaches/recruiters from universities across Ontario as well as students in both high school and university to learn more about Esports and compete in a simulated professional tournament. We plan to bring keynote speakers to inspire our participants to make their dreams come true.';
		return (
			<div className="sections-body s2-body">
				<div className="s2-absolute">
					<div className="s2-con">
						<ScrollAnimation animateIn="fadeInLeftBig" offset={0} animateOnce={true}>
							<div className="s2-con-text">
								<div className="s2-con-text__title">{title}</div>
								<div className="s2-con-text__body">{bodyText}</div>
							</div>
						</ScrollAnimation>
						<div className="s2-con-image">
							<img src={ffne} className="s2-con-image__cn" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
