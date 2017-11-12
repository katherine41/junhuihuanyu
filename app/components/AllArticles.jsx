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


function ArticleBlog(props){
    return (
        <li className="articleBlog">
            <div className="thumbnail">
                <div className="caption">
                    <h3>{props.title}<small>{props.createDate}</small></h3>
                    <div>{props.summary}</div>
                    <div>
                        <span>文章分类：<Link to={`/articles/${props.articleId}`}>{props.category.categoryName}</Link></span>
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
function RencentBlog(props) {
    return (
        <Link to={`/articles/${props.articleId}`}><li className="list-group-item">{props.title}</li></Link>
    );
}
function CategoryItem(props) {
    return (
    <li className="list-group-item">
        <span className="badge">{props.cateNum}</span>
        {props.categoryName}
    </li>
    );
}
function ArticleList(props) {
    const posts=props.posts;
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
    );
}
function RecentArticlesList(props){
    var posts=Array.from(props.posts);
    if(posts.length>3){
        posts=posts.reverse().slice(0,3);  //0,1,2
    }
    const listItems=posts.map(
        function (post) {
            var formattedPost={

                title:post.title,
                summary:post.summary,
                category:post.category,
                content:ReactHtmlParser(post.content),
                createDate:env_variables.formatDate(new Date(post.createDate))
            };
            return <RencentBlog key={post.articleId} articleId={post.articleId} title={formattedPost.title} summary={formattedPost.summary} content={ formattedPost.content } createDate={formattedPost.createDate}  category={post.category}/>
        }
    );
    return (
        <ul className="list-group">{listItems}</ul>
    );
}
function CategoriesList(props){
    var categories=Array.from(props.categories);
    const listItems=categories.map(
        function (category) {
            return <CategoryItem key={category.id} categoryId={category.id} categoryName={category.categoryName} cateNum={category.articlesNum}/>
        }
    );
    return (
        <ul className="list-group">{listItems}</ul>
    );
}

var AllArticles = React.createClass({
    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchCategory();
    },
    render: function () {
        return (
            <div className="article_container container">
                <div className="row">
                    <div className="col-sm-8">
                        <ArticleList posts={this.props.articles}/>
                        <nav>
                            <ul className="pagination">
                                <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#" aria-label="Next"><span aria-hidden="true">&laquo;</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-4">
                        <div className="articleCategory_container">
                            <h4>文章分类：</h4>
                            <CategoriesList categories={this.props.categories}/>
                        </div>
                        <div className="articleCategory_container">
                            <h4>最新文章：</h4>
                            <RecentArticlesList posts={this.props.articles}/>
                        </div>
                        </div>
                </div>
            </div>

        )
    }

});


function mapStatsToProps(state){
    return {
        articles:state.articles,
        categories:state.categories
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticles:allActions.articleAction.fetchArticles,
        fetchCategory:allActions.categoryAction.fetchCategory,
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(AllArticles);
