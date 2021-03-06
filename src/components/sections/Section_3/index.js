import React, { Component } from 'react';
import cavernBack from './media/cavernback.png';
import cavernMid from './media/cavernmid.png';
import cavernFront from './media/cavernfront.png';
export default class SectionThree extends Component {
	constructor(props) {
		super(props);
		this.state = { hidden: true };
	}
	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			if (this.state.hidden === true && this.props.scroll > this.props.clientHeight) {
				this.setState({ hidden: false });
			} else if (this.state.hidden === false && this.props.scroll < this.props.clientHeight) {
				this.setState({ hidden: true });
			}
		});
	}
	render() {
		const title = 'Passion Rules';
		const bodyText =
			'Our mission is to provide aspiring individuals with opportunities to pursue a career in the Esports industry. Frame Freeze will be a bridge between potential employers / coaches and their employees / players. On top of this, we want everyone to have a chance at doing what they love! Passion goes very far in life and this is what we want our participants to share with the community!';
		return (
			<div className="sections-background s3-background">
				<div className="s3-cavern">
					<img src={cavernBack} alt="" className="s3-cavern-i s3-cavern-i1" />
					<img src={cavernMid} alt="" className="s3-cavern-i s3-cavern-i2" />
					<div className="s3-cavern-text-con">
						<div
							className="s3-cavern-text"
							style={{ visibility: this.state.hidden ? 'hidden' : 'visible' }}
						>
							<div className="s3-cavern-text__title">{title}</div>
							<div className="s3-cavern-text__body">{bodyText}</div>
						</div>
					</div>
					<div className="s3-cavern-cov" />
					<img src={cavernFront} alt="" className="s3-cavern-i s3-cavern-i3" />
				</div>
			</div>
		);
	}
}
