import React from 'react';
import {
  Link,
  Switch,
	Route
} from 'react-router-dom';
import RouterConfig from '../router/index'
export default class About extends React.Component {
	constructor(props) {
		super(props)
		this.goHome = this.goHome.bind(this)
	}
	componentDidMount() {
		console.log(this.props)
	}

	goHome() {
		console.log(this)
		this.props.history.push('/home?id=')
	}

	render() {
		return(
			<div>
				{/* About */}
				<Link to="/about/temp1">temp1</Link>
				<Link to={`${this.props.match.path}/temp2`}>temp2</Link>
				<button onClick={ this.goHome }>go home</button>
				<Switch>
					{ this.props.routes.map((route, i) => (
						<RouterConfig key={i} {...route} />
					))}
				</Switch>
			</div>
		)
	}
  
}