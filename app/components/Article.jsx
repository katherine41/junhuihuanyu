var React = require('react');
import '../../public/css/Article.css';

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