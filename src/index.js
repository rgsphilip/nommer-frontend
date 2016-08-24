import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import LoginGreeting from './components/LoginGreeting';
import RecipeBook from './components/RecipeBook';
import TagsView from './components/TagsView';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/login" component={LoginGreeting} />
    <Route path="/" component={App}>
      <IndexRoute component={RecipeBook} />
      <Route path="/tags" component={TagsView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
