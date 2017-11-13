/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import ReactHtmlParser from 'react-html-parser';
import env_variables from '../../components/environment';

function RelatedBlog(props) {
    return (
        <Link to={`/articles/${props.articleId}`}><li className="list-group-item">{props.title}</li></Link>
    );
}

var RelatedArticlesList = React.createClass({
    render: function () {
        var posts=this.props.posts;
        if(posts.length>3){
            posts=posts.slice(0,3);  //0,1,2
        }
        const listItems=posts.map(
            function (post1) {
                var formattedPost={
                    title:post1.title,
                    summary:post1.summary,
                    content:ReactHtmlParser(post1.content),
                    createDate:env_variables.formatDate(new Date(post1.createDate))
                };
                return <RelatedBlog key={post1.articleId} articleId={post1.articleId} title={formattedPost.title} summary={formattedPost.summary} content={ formattedPost.content } createDate={formattedPost.createDate}/>
            }
        );
        return (
        <ul className="list-group">{listItems}</ul>
        );
    }

});



module.exports = RelatedArticlesList;
