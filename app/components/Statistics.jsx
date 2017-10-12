var React = require('react');
import Paper from 'material-ui/Paper';


var Statistics = React.createClass({

  render:function(){
    return (
        <Paper style={style}>
          I am statistics
        </Paper>
    )
  }

});


module.exports = Statistics;
const style = {
    height: 500,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
}
