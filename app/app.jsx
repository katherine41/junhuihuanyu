var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/NavBar');
 import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


var App = React.createClass({
    getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            },
  render:function(){
    return(
    <div>
      <NavBar/>
        <div>
            {this.props.children}
        </div>
    </div>)
  }
});

module.exports = App;

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };
