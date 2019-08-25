import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
// lazy load the routes components
const Home = lazy(() => import('./routes/Home'));
const Profile = lazy(() => import('./routes/Profile'));

//Make the App skelton to be the router
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile/:login" component={Profile}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;