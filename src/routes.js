import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import SetInput from './containers/SetInput';
import SetTest from './containers/SetTest';
import TestPage from './containers/TestPage';

export default <Route path="/" component={App}>
  <IndexRoute component={SetInput}/>
  <Route path="/config" component={SetTest}/>
  <Route path="/test" component={TestPage} />
</Route>
