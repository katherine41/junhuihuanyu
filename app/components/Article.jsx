var React = require('react');
import Paper from 'material-ui/Paper';


var Article = React.createClass({

    render: function () {
        return (
            <Paper style={style}>
                I am article
            </Paper>
        )
    }

});


module.exports = Article;
const style = {
    height: 500,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
}
