var React = require('react');
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


var LeftMenu = React.createClass({

  render:function(){
    return (
   <div>
    <Paper style={paperStyle}>
      <Menu style = {menuStyle}>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>

  </div>
    )
  }

});

const paperStyle = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const menuStyle = {
    float : 'left',
    display: 'block'

}


module.exports = LeftMenu;
