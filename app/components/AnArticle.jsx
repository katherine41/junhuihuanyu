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
var CategoryList = require('../components/articles/CategoryList');
var RelatedArticlesList = require('../components/articles/RelatedArticlesList');


var AnArticle = React.createClass({
    changeArticle:function(){
        var articleId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticle(articleId);
    },
    componentDidMount:function () {
        var articleId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticles();
        this.props.fetchArticle(articleId);
        this.props.fetchCategory();
        window.addEventListener("hashchange", this.changeArticle);
    },
    componentWillUnmount() {
        window.removeEventListener("hashchange", this.changeArticle);
    },
    render:function(){
        var post=this.props.article;
        var formattedPost={
            title:post.title,
            summary:post.summary,
            content:ReactHtmlParser(post.content),
            category:'',
            categoryId:1,
            createDate:env_variables.formatDate(new Date(post.createDate))
        };
        if(post.articleCategory!==undefined){
            formattedPost.category=post.articleCategory.categoryName;
            formattedPost.categoryId=post.articleCategory.id
        }

        return (
                <div className="anArticle_container container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="page-header">
                                <h3>{formattedPost.title}<small><Link to={`/articleCates/${formattedPost.categoryId}`}>{formattedPost.category}</Link></small></h3>
                                <small>{formattedPost.createDate}</small>
                                <Link to={`/editArticle/${props.articleId}`}>
                                    <span className="editArticleBtn pull-right" onClick={() =>this.props.modifyArticle(post.articleId)}>
                                        <img src="../../image/edit.svg"/>
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <div>{formattedPost.content}</div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="articleCategory_container">
                                <h4>文章分类：</h4>
                                <CategoryList categories={this.props.categories}/>
                            </div>
                            <div className="articleCategory_container">
                                <h4>最新文章：</h4>
                                <RelatedArticlesList posts={this.props.articles}/>
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
        article:state.currentArticle,
        categories:state.categories
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticles:allActions.articleAction.fetchArticles,
        fetchArticle:allActions.articleAction.fetchArticle,
        fetchCategory:allActions.categoryAction.fetchCategory,
        modifyArticle:allActions.articleAction.modifyArticle
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(AnArticle);