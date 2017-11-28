var React = require('react');
var redux=require('redux');
var thunk=require('redux-thunk').default;
var ReactDOM = require('react-dom');
var TopNav = require('./components/TopNav');
var BottomNav = require('./components/BottomNav');

 import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import '../public/css/style.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';


const store=createStore(allReducers,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

var App = React.createClass({
    getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            },
  render:function(){
    return(
    <div>
        <TopNav/>
        <Provider store={store}>
            <div>
                {this.props.children}
            </div>
        </Provider>
        <BottomNav/>
    </div>)
  }
});

module.exports = App;

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };
