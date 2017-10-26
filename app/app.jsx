var React = require('react');
var ReactDOM = require('react-dom');
var TopNav = require('./components/TopNav');
var BottomNav = require('./components/BottomNav');

 import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import '../public/css/style.css';

var App = React.createClass({
    getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            },
  render:function(){
    return(
    <div>
        <TopNav/>
        <div>
            {this.props.children}
        </div>
        <BottomNav/>
    </div>)
  }
});

module.exports = App;

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };
