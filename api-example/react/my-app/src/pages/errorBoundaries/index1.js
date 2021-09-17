/*
 * @Description: 使用错误边界
 * @Date: 2021-08-19 14:23:41
 * @LastEditTime: 2021-08-19 15:17:13
 */
import React from 'react';
import ErrorBoundary from './index';
const ErrorBoundaryIndex1 = () => {
  // let url = null;
  // try {
  //   url = require('./image/index.png');
  // } catch (error) {
  //   console.log('%c error', 'background: red', error);
  // }

  return (
    <ErrorBoundary>
      <div>111</div>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryIndex1;
