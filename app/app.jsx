var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Loading foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$('document').foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);