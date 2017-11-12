/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import ReactHtmlParser from 'react-html-parser';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../actions/index';
import env_variables from '../components/environment';

var React = require('react');
function RelatedBlog(props) {
    return (
        <Link to={`/articles/${props.articleId}`}><li className="list-group-item">{props.title}</li></Link>
    );
}
function RelatedArticlesList(props){
    var posts=props.posts;
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
var AnArticle = React.createClass({
    getInitialState: function() {
        return { post: {},posts:[]};
    },
    componentDidMount:function () {
        var articleId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticle(articleId);
    },
    render:function(){
        var post=this.props.article;
        var formattedPost={
            title:post.title,
            summary:post.summary,
            content:ReactHtmlParser(post.content),
            category:'',
            createDate:env_variables.formatDate(new Date(post.createDate))
        };
        if(post.articleCategory!==undefined){
            formattedPost.category=post.articleCategory.categoryName
        }

        return (
                <div className="anArticle_container container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="page-header">
                                <h3>{formattedPost.title}<small><Link to={`/articles/${post.articleId}`}>{formattedPost.category}</Link></small></h3>
                                <small>{formattedPost.createDate}</small>
                            </div>
                            <div>
                                <div>{formattedPost.content}</div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div className="articleCategory_container">
                                <h4>相关文章：</h4>
                                <RelatedArticlesList posts={this.state.posts}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

});

function mapStatsToProps(state){
    return {
        article:state.currentArticle,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticles:allActions.articleAction.fetchArticles,
        fetchArticle:allActions.articleAction.fetchArticle,
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(AnArticle);