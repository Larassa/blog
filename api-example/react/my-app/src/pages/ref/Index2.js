/*
 * @Description:
 * @Date: 2021-08-03 19:22:50
 * @LastEditTime: 2021-08-03 19:38:28
 */
import React, { useEffect, useRef } from 'react';
// import RefCom1 from './components/Com1';
const RefIndex2 = () => {
  const ref = useRef();
  useEffect(() => {
    console.log('ref', ref.current);
  }, []);
  return (
    <div>
//       <RefCom1 ref={ref} />
    </div>
  );
};
export default RefIndex2;
