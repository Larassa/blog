/*
 * @Description:
 * @Date: 2021-08-03 19:23:57
 * @LastEditTime: 2021-08-03 19:41:29
 */
import React from 'react';
const RefCom1 = React.forwardRef((props, ref) => (
  // useImperativeHandle(() => return (

  // ))
  <button ref={ref}>React.forwardRef</button>
));
export default RefCom1;
