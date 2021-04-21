import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
// import Home from '../components/Home';
import About from '../components/About';
// export default class RouteConfig extends React.Component {
//   render(){
//     return(
//       <Switch>
//         <Route path="/home" component={() => { return(<div>home</div>)  }}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     )
//   }
// }
const ROUTES = [
  {
    path: '/home',
    component: () => <div>home</div> 
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: '/about/temp1',
        component: () => ( <div>temp1</div> )
      },
      {
        path: '/about/temp2',
        component: () => ( <div>temp2</div> )
      }
    ]
  }
]

export default function RouterConfig(route) {
  return(
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
