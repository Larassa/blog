import React from 'react'
import Home from '../components/Home'
import About from '../components/About'

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
  }
]