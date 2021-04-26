import React from 'react';
import {
	useHistory,
	useLocation,
	withRouter
} from "react-router-dom";


function Home() {
	let history = useHistory();
	function goAbout(props) {
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