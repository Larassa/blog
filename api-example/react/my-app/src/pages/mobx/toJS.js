/*
 * @Description: 工具函数 toJS
 * @Date: 2021-08-18 16:46:29
 * @LastEditTime: 2021-08-18 17:25:18
 */
import React, { useEffect } from 'react';
import { observable, toJS } from 'mobx';
const MobxToJS = () => {
  const temp = observable({
    name: 'temp',
    age: 12,
  });
  useEffect(() => {
    // js格式的
    console.log('toJS', toJS(temp));
    // Proxy
    console.log('temp', temp);
  }, []);

  return <div>{temp.name}</div>;
};
export default MobxToJS;
