var React = require('react');
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
var {Link, IndexLink} = require('react-router');

var NavBar = React.createClass({
  render:function(){
    const style = {
      bodyStyle:{
        display: 'block',

      },
      appBarStyle:{
        // width:'250px'
        height:'60px'
      },
      menuStyle:{
        display: 'inline-block',
        float: 'left',
        margin: '0 32px 16px 0',
        width: '80%'

      },
      menuItemStyle:{
        display: 'inline',
        float: 'left',
        width: '25%',
        textAlign: 'center'
      }


    }
    return (
    <div style  = {style.bodyStyle}>
       <AppBar  title="Jun Hui Huan Yu" showMenuIconButton = {false} style = {style.appBarStyle}>
        <Menu style = {style.menuStyle}>
          <IndexLink to="/"><MenuItem primaryText="文章" style = {style.menuItemStyle}/></IndexLink>
          <Link to="/statistics"><MenuItem primaryText="数据"  style = {style.menuItemStyle}/></Link>
          <MenuItem primaryText="让我想想"  style = {style.menuItemStyle}/>
          <Link to="/management/"><MenuItem primaryText="管理"  style = {style.menuItemStyle}/></Link>
        </Menu>

       </AppBar>
    </div>
    )
  }

});


module.exports = NavBar;
