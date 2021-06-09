/*
 * @Author: larassa
 * @Date: 2021-04-27 09:48:57
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-21 14:21:10
 * @Description: file content
 */
import React from 'react';
import {
	useHistory,
	// useLocation,
	// withRouter
} from "react-router-dom";


function Home() {
	let history = useHistory();
	function goAbout() {
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