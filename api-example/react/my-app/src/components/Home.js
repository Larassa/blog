import React from 'react';
import {
	useHistory 
} from "react-router-dom";
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.goAbout.bind(this)
	}
	goAbout() {
		let history = useHistory();
		history.push('/about')
	}

	render() {
		return (
			<div>
				home 组件
				<button onClick={this.goAbout}>go about</button>
			</div>
		)
	}
}