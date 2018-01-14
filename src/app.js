import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'
import Loading from './loading'

const Home = Loadable({
  loader: () => import('./home' /* webpackChunkName: 'home' */),
  loading: Loading,
})

const PageOne = Loadable({
  loader: () => import('./pageOne.js' /* webpackChunkName: 'pageOne' */),
  loading: Loading,
})

const PageTwo = Loadable({
  loader: () => import('./pageTwo.js' /* webpackChunkName: 'pageTwo' */),
  loading: Loading,
})

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pageOne">Page One</Link></li>
        <li><Link to="/pageTwo">Page Two</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pageOne" component={PageOne}/>
        <Route exact path="/pageTwo" component={PageTwo}/>
      </Switch>
    </div>
  </Router>
)

export default App
