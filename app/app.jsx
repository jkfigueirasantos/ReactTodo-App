var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Loading foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$('document').foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <p>React Boilerplate 3</p>,
  document.getElementById('app')
);
