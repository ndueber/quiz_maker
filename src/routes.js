import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {
  App,
  Quiz,
} from './containers/index';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Quiz}/>
    <Route path="quiz" component={Quiz}/>
  </Route>
);
