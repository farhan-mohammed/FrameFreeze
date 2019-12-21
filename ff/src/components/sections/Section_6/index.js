import React, { Component } from 'react';
import footerimg from './media/footer.png';
export default class SectionSix extends Component {
	socials = [
		{ name: 'facebook', tag: 'facebook f', link: '#' },
		{ name: 'instagram', tag: 'instagram', link: '#' },
		{ name: 'twitter', tag: 'twitter', link: '#' },
		{ name: 'email', tag: 'envelope outline', link: '#' }
	];
	renderList() {
		return this.socials.map((social) => {
			const socialtag = `${social.tag} icon`;
			return (
				<li key={social.name}>
					<a href={social.link}>
						<i className={socialtag} />
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
