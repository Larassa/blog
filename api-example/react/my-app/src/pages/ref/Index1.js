/*
 * @Author: your name
 * @Date: 2021-06-22 10:36:51
 * @LastEditTime: 2021-06-22 15:52:59
 */
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'

function RefIndex1(props) {
	const [ count, setCount ] = useState(0);
	const [ count1, setCount1 ] = useState(0)
	const preRef = useRef();
	useEffect(() => {
    preRef.current = count;
		console.log('preRef', preRef)
  });
  const preCount = preRef.current;
	const handleClick = () => {
		setCount(count+1)
		setCount1(count1+1)
		console.log('preCount', preCount)
		console.log('count', count)
	};
	
	return (
		<div>
			RefIndex1
			<button onClick={handleClick}>click me</button>
		</div>
	)
}

export default RefIndex1