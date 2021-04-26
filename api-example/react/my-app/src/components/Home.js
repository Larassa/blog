import React from 'react';
import {
	useHistory,
	useLocation,
	withRouter
} from "react-router-dom";
// export default class Home extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.goAbout = this.goAbout.bind(this)
// 	}
// 	goAbout() {
// 		// let history = useHistory();
// 		// history.push('/about')
// 		console.log('this', this)
// 		this.props.history.push('/about')
// 	}

// 	render() {
// 		return (
// 			<div>
// 				home 组件
// 				<button onClick={this.goAbout}>go about</button>
// 			</div>
// 		)
// 	}
// }


function Home() {
	let history = useHistory();
	function goAbout(props) {
		// console.log(history)
		history.push('/about')
	}
	return (
		<div>
			home 组件
			<button onClick={goAbout}>go about</button>
		</div>
	)
}
export default Home