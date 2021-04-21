import React from 'react';
import {
  Link,
  Switch
} from 'react-router-dom';
import RouterConfig from '../router/index';

const routes = [
  {
    path: '/home',
    component: () => { return( <div>home</div> ) }
  },
  {
    path: '/about',
    component: () => { return( <div>about</div> ) },
    routes: [
      {
        path: '/temp1',
        component: () => { return( <div>temp1</div> ) }
      },
      {
        path: '/temp2',
        component: () => { return( <div>temp2</div> ) }
      }
    ]
  }
]

export default function About() {
  return(
    <div>
      {/* About */}
      <Link to="/about/temp1">temp1</Link>
      <Link to="/about/temp2">temp2</Link>

      <Switch>
        {routes.map((route, i) => (
          <RouterConfig key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}