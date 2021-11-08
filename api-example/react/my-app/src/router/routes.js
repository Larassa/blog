/*
 * @Description:
 * @Date: 2021-04-26 22:00:23
 * @LastEditTime: 2021-11-08 12:08:21
 */
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import RefIndex from '../pages/ref/Index';
import RefIndex1 from '../pages/ref/Index1';
import RefIndex2 from '../pages/ref/Index2';
import ReducerIndex from '../pages/reducer/Index';
import Observable from '../pages/mobx/observable';
import MobxToJS from '../pages/mobx/toJS';
import ErrorBoundaryIndex1 from '../pages/errorBoundaries/index1';

export const ROUTES = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/temp1',
        component: () => <div>temp1</div>,
      },
      {
        path: '/about/temp2',
        component: () => <div>temp2</div>,
      },
    ],
  },
  {
    path: '/ref',
    component: RefIndex,
  },
  {
    path: '/ref1',
    component: RefIndex1,
  },
  {
    path: '/ref2',
    component: RefIndex2,
  },
  {
    path: '/reducer',
    component: ReducerIndex,
  },
  {
    path: '/observable',
    component: Observable,
  },
  {
    path: '/mobxToJS',
    component: MobxToJS,
  },
  {
    path: '/error-boundaries',
    component: ErrorBoundaryIndex1,
  },
];
