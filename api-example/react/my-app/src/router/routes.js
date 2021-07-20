
import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import RefIndex from '../pages/ref/Index'
import RefIndex1 from '../pages/ref/Index1'
import ReducerIndex from '../pages/reducer/Index'

export const ROUTES = [
	{
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/temp1',
        component: () => <div>temp1</div>
      },
      {
        path: '/about/temp2',
        component: () => <div>temp2</div>
      }
    ]
  },
	{
		path: '/ref',
		component: RefIndex
	},
	{
		path: '/ref1',
		component: RefIndex1
	},
	{
		path: '/reducer',
		component: ReducerIndex
	},
]