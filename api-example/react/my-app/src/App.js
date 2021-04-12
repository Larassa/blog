import React from 'react';

// import { BrowserRouter as Router, link } from 'react-router-dom';

// function App() {
//   return (
//     <div>

// 		</div>
//   );
// }

// export default App;
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
		// Router.push('/home')
	}

	render() {
		return (
			<div>
				<p>{ this.state.name }</p>
				<p>{ this.state.obj.name }</p>
				{/* { RenderList(this.state) } */}
				<RenderList list={ this.state.list }></RenderList>
				<button onClick={ this.handleClick }>click</button>
				<button onClick={ this.goHome } >go home</button>
				{/* <Router>
					<link path="/home" >home</link>
				</Router> */}
			</div>
		)
	}
}
export default App;