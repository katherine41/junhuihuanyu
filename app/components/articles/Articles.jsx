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
var TopBanner = require('../common-components/TopBanner');
var subtitleName = "汇聚金融投资行业最快、最准、最全的数据和资讯，为广大金融投资者提供第一手的财经数据、国际动态、市场观察，我们立志成为业内最实用、最便捷的财经信息服务机构。";

//=======================component details================================
var Articles = React.createClass({
    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchCategory();
    },
    render: function () {
        return (
            <div>
                <TopBanner bannerName="汇市资讯" subtitleName={subtitleName}/>
                {/*<div className="contentTop"></div>*/}
                <div className="contentMiddle article_container container">
                    <div className="row">
                        <div className="col-sm-8">
                            {/*<TitleLine titleNameChn="汇评" titleNameEng="ARTICLES"/>*/}
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
