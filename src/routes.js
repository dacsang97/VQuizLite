import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import SetInput from './containers/SetInput';
import SetTest from './containers/SetTest';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

export default <Route path="/" component={App}>
  <IndexRoute component={SetInput}/>
  <Route path="/config" component={SetTest}/>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>
