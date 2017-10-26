var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var App = require('./app.jsx');
import 'bootstrap/dist/css/bootstrap.css';
var IndexPage = require('./components/IndexPage.jsx');
var Videos = require('./components/Videos.jsx');
var Avideo = require('./components/Avideo.jsx');
var Article = require('./components/Article');
var AllArticles = require('./components/AllArticles.jsx');
var AnArticle = require('./components/AnArticle.jsx');
var Management = require('./components/Management');
var AboutUs = require('./components/AboutUs');
var AddArticle = require('./components/AddArticle');
var AddVideo = require('./components/AddVideo');
// user management
var Login = require('./components/userMgt/Login');
var Register = require('./components/userMgt/Register');
var Profile = require('./components/userMgt/Profile');


var message  = "this is the message";
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="videos/">
                <IndexRoute component={Videos}/>
                <Route path=":videoId" component={Avideo}/>
            </Route>
            <Route path="management/" component={Management}>
                <IndexRoute component={AddArticle}/>
                <Route path="video" component={AddVideo}/>
            </Route>
            <Route path="articles/" component={Article}>
                <IndexRoute component={AllArticles}/>
                <Route path=":topicId" component={AnArticle}/>
            </Route>
            <Route path="aboutUs/" component={AboutUs}/>
            <Route path="login/" component={Login}/>
            <Route path="register/" component={Register}/>
            <Route path="profile/" component={Profile}/>
            <IndexRoute component={IndexPage}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
