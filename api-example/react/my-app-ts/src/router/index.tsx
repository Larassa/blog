/*
 * @Description: 路由
 * @Date: 2021-11-07 16:27:01
 * @LastEditTime: 2021-11-07 20:06:04
 */
import React from 'react';
import {
  Route,
  Link,
  BrowserRouter,
  // useHistory
  Routes,
} from 'react-router-dom';
import HOC1 from 'pages/hoc/index1';

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hoc1" element={<HOC1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
