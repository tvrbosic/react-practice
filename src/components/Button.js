import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	renderSubmit(language) {
		return language === 'english' ? 'Submit' : 'Pohrani';
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{(context) => this.renderSubmit(context.language)}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}

export default Button;
