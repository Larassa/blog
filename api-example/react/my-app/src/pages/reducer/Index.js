

import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

function ReducerIndex(props) {

 /**
  * useReducer: 可以把它看成小型的vuex或者redux, 大体能做的事跟useState差不多，但是useReducer能做的更多
	* 能接收一个分发函数对数据进行判断处理
  */	
	const [ count, dispatchCount ] = useReducer((state, action) => {
		if(action.type === 1) {
			return state+1
		}
	}, 0);

	const handleClick = () => {
		console.log('props', props)
		dispatchCount({
			type: 1
		})
		console.log('count:', count)
	};

	return (
		<div>
			<p>ReducerIndex</p>
			<button onClick={ handleClick }>click me</button>
		</div>
	)
}

ReducerIndex.defaultProps = {
  name: 'Stranger'
};
ReducerIndex.propTypes = {
	name: PropTypes.string
};

export default ReducerIndex;