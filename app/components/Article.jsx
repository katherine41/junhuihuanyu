var React = require('react');
var AllArticles = React.createClass({

    render:function(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

});


module.exports = AllArticles;