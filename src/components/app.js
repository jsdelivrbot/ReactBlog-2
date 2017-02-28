import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<div>header</div>
				<br />
			{ this.props.children }
				<br />
				<div>footer</div>
			</div>
		);
	}
}
