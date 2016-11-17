import React from 'react';
import 'core-js/fn/object/assign'; //do I need this?
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import LoginGreeting from './components/login/LoginGreeting';
import RecipeBook from './components/recipe/RecipeBook';
import TagsView from './components/tags/TagsView';
import GroceryView from './components/grocery/GroceryView';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={RecipeBook} />
      <Route path="/login" component={LoginGreeting} />
      <Route path="/tags" component={TagsView} />
      <Route path="/grocery" component={GroceryView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
