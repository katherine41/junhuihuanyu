var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var App = require('./app.jsx');
import 'bootstrap/dist/css/bootstrap.css';
var Statistics = require('./components/Statistics');
var Article = require('./components/Article');
var AllArticles = require('./components/AllArticles');
var AnArticle = require('./components/AnArticle');
var Management = require('./components/Management');
var AddArticle = require('./components/AddArticle');
var AddVideo = require('./components/AddVideo');

var message  = "this is the message";
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="statistics/" component={Statistics}/>
            <Route path="management/" component={Management}>
                <IndexRoute component={AddArticle}/>
                <Route path="video" component={AddVideo}/>
            </Route>
            <Route path="articles/" component={Article}>
                <IndexRoute component={AllArticles}/>
                <Route path=":topicId" component={AnArticle}/>
            </Route>
            <IndexRoute component={Article}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
