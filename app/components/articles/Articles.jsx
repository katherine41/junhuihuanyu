// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

import '../../../public/css/Article.css';

var React = require('react');
var ArticleList = require('./ArticleList');
var CategoryList = require('./CategoryList');
var RelatedArticlesList = require('./RelatedArticlesList');
var TitleLine = require('../TitleLine');

//=======================component details================================
var Articles = React.createClass({
    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchCategory();
    },
    render: function () {
        return (
            <div>
                <div className="contentTop"></div>
                <div className="contentMiddle article_container container">
                    <div className="row">
                        <div className="col-sm-8">
                            <TitleLine titleNameChn="汇评" titleNameEng="ARTICLES"/>
                            <ArticleList posts={this.props.articles} clickDeletedArticle={this.props.clickDeletedArticle} deleteArticle={this.props.deleteArticle} deletedArticleId={this.props.deletedArticleId}/>
                        </div>
                        <div className="col-sm-4">
                            <CategoryList categories={this.props.categories}/>
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
        categories:state.categories,
		deletedArticleId:state.deletedArticle
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticles:allActions.articleAction.fetchArticles,
        fetchCategory:allActions.categoryAction.fetchCategory,
        deleteArticle:allActions.articleAction.deleteArticle,
		clickDeletedArticle:allActions.articleAction.clickDeletedArticle,
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Articles);
