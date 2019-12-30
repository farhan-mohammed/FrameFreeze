import React, { Component } from 'react';
import faq from './faq';
export default class SectionFive extends Component {
	componentDidMount() {
		console.log(faq);
	}
	renderQuestions() {
		return faq.map(({ question, answer }) => {
			return (
				<div className="s5-FAQ__item">
					<div className="s5-FAQ__itemq">{question}</div>
					<div className="s5-FAQ__itema">{answer}</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="sections-body s5-body s5-dark">
				<div className="s5-sponsors">
					<div className="s5-sponsors__h1">Sponsors</div>
					<div className="s5-sponsors__body">Stay Tuned!</div>
				</div>
				<div className="s5-FAQ">
					<div className="s5-FAQ__h1">Frequently Asked Questions</div>
					{this.renderQuestions()}
				</div>
			</div>
		);
	}
}
