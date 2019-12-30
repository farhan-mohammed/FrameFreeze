import React, { Component } from 'react';
import footerimg from './media/footer.png';
export default class SectionSix extends Component {
	socials = [
		{ name: 'facebook', tag: 'fab fa-facebook-f', link: '#' },
		{ name: 'instagram', tag: 'fab fa-instagram', link: '#' },
		{ name: 'twitter', tag: 'fab fa-twitter', link: '#' },
		{ name: 'email', tag: 'far fa-envelope', link: '#' }
	];
	renderList() {
		return this.socials.map((social) => {
			return (
				<li key={social.name} className="hvr-wobble-top">
					<a href={social.link}>
						<i className={social.tag} />
					</a>
				</li>
			);
		});
	}
	render() {
		return (
			<div className="sections-body s6-body">
				<div className="s6-img-con">
					<img src={footerimg} alt="" className="s6-img-con__img" />
				</div>
				<div className="s6-info">
					<div className="s6-socials">
						<div className="s6-socials__title">Follow us on Socials!</div>
						<ul className="s6-socials__soc">{this.renderList()}</ul>
					</div>
				</div>
			</div>
		);
	}
}
