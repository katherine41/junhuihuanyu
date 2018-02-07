// import react files
var React = require('react');
var ReactDOM = require('react-dom');

//import redux files
var redux = require('redux');
var thunk = require('redux-thunk').default;
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

//import components
var TopNavBar = require('./components/common-components/TopNavBar');

// import stylesheet files
import 'bootstrap/dist/css/bootstrap.css';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
// import '../public/css/style.css';
import '../public/css/common.css';

// var BottomNav = require('./components/BottomNav');
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


const store=createStore(allReducers,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

var App = React.createClass({
  render:function(){
    return(
        <div>
            <TopNavBar id="page-top"/>
            <Provider store={store}>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        </div>)
  }
});

module.exports = App;

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };
