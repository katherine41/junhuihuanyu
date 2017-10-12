var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var App = require('./app.jsx');
import 'bootstrap/dist/css/bootstrap.css';
var Statistics = require('./components/Statistics');
var Article = require('./components/Article');
var Management = require('./components/Management');

var message  = "this is the message";
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="statistics" component={Statistics}/>
            <Route path="management" component={Management}/>
            <IndexRoute component={Article}></IndexRoute>
        </Route>
    </Router>,
  document.getElementById('app')
);
