/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import ReactHtmlParser from 'react-html-parser';
import env_variables from '../../components/environment';


function ArticleBlog(props){
    return (
        <li className="articleBlog">
            <div className="thumbnail">
                <div className="caption">
                    <h3>{props.title}<small>{props.createDate}</small></h3>
                    <div>{props.summary}</div>
                    <div>
                        <span>文章分类：<Link to={`/articleCates/${props.category.id}`}>{props.category.categoryName}</Link></span>
                        <Link to={`/articles/${props.articleId}`}>
                            <button type="button" className="btn btn-default btn-info readMoreBtn">
                                点击阅读&nbsp;&nbsp;>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
}


var ArticleList = React.createClass({
    render: function () {
        const posts=this.props.posts;
        const listItems=posts.map(
            function (post) {
                var formattedPost={

                    title:post.title,
                    summary:post.summary,
                    content:ReactHtmlParser(post.content),
                    createDate:env_variables.formatDate(new Date(post.createDate))
                };
                return <ArticleBlog key={post.articleId} articleId={post.articleId} title={formattedPost.title} summary={formattedPost.summary} content={ formattedPost.content } createDate={formattedPost.createDate} category={post.articleCategory}/>
            }
        );
        return (
        <ul className="articleList">{listItems}</ul>
        )
    }

});



module.exports = ArticleList;
