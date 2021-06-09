/*
 * @Author: larassa
 * @Date: 2021-04-27 09:48:57
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-21 14:52:13
 * @Description: file content
 */
import React from 'react';

// import { withRouter } from 'react-router-dom';
import { 
	BrowserRouter as Router,
	Switch,
  // Route,
	Link,
	useHistory 
} from "react-router-dom";
import RouterConfig from './router/index'
import { ROUTES } from './router/routes'


class App extends React.Component {
	constructor (props) {
		super(props);
		// 为了在回调中使用 `this`，这个绑定是必不可少的
		this.goHome = this.goHome.bind(this);

	}

	goHome() {
		console.log(this)
	}

	render() {
		return (
			<div>
				<Router>
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to={ `/about/?ids=123` }>About</Link>
						</li>
					</ul>
					<Switch>
						{ROUTES.map((route, i) => (
            	<RouterConfig key={i} {...route} />
          	))}
					</Switch>
				</Router>
				<button onClick={this.goHome}>go home</button>
			</div>
		)
	}
}
// function App(props) {
// 	let history = useHistory()
// 	function goHome() {
// 		// history.push('/home')
// 		console.log('history', history)
// 		console.log('props', props)
// 	}
// 	return (
// 		<div>
// 			<Router>
// 				<ul>
// 					<li>
// 						<Link to="/home">Home</Link>
// 					</li>
// 					<li>
// 						<Link to={ `/about/?ids=123` }>About</Link>
// 					</li>
// 				</ul>
// 				<Switch>
// 					{ROUTES.map((route, i) => (
// 						<RouterConfig key={i} {...route} />
// 					))}
// 				</Switch>
// 			</Router>
// 			<button onClick={goHome}>go home</button>
// 		</div>
// 	)
// }

export default App;