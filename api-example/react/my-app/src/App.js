import React from 'react';

import { withRouter } from 'react-router-dom';
import { 
	BrowserRouter as Router,
	Switch,
  Route,
	Link
} from "react-router-dom";
import RouteConfig from './router/index'

import Home from './components/Home'
import About from './components/About'

function RenderList(props) {
	let temp = []
	for(let i = 0; i < props.list.length; i++) {
		temp.push(<p key={ props.list[i].name }>{ props.list[i].name }</p>)
	}
	return temp
}
class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			name: 'name',
			obj: {
				name: 'react'
			},
			list: [
				{
					name: '11'
				},
				{
					name: '22'
				}
			]
		}
		// 为了在回调中使用 `this`，这个绑定是必不可少的
		this.handleClick = this.handleClick.bind(this);
		this.goHome = this.goHome.bind(this);
	}
	handleClick() {
		let name = 'obj.name'
		this.setState(state => ({
			// obj: Object.assign(state.obj, { name: 'qqq' }),
			name: 'wwwww',
			[name]: 'aaaaaaa'
		}));
	}

	goHome() {
		console.log(this.props)
		this.props.history.push('/home')
	}

	render() {
		return (
			<div>
				<Router>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
					{/* <Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch> */}
				</Router>
				{/* <RouteConfig></RouteConfig> */}
			</div>
		)
	}
}
export default App;