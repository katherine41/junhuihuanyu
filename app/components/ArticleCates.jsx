/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../actions/index';
var ArticleList = require('../components/articles/ArticleList');
var CategoryList = require('../components/articles/CategoryList');


var React = require('react');
var ArticleCates = React.createClass({
    changeCate:function(){
        var cateId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticleByCate(cateId);
    },
    componentDidMount:function () {
        var cateId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticleByCate(cateId);
        this.props.fetchCategory();
        window.addEventListener("hashchange", this.changeCate);
    },
    componentWillUnmount() {
        window.removeEventListener("hashchange", this.changeCate);
    },
    render:function(){
        return (
            <div className="anArticle_container container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="page-header">
                            <h3>{this.props.currentCategory.categoryName}</h3>
                        </div>
                        <ArticleList posts={this.props.articles}/>
                    </div>
                    <div className="col-sm-4">
                        <div className="articleCategory_container">
                            <h4>文章分类：</h4>
                            <CategoryList categories={this.props.categories} currentCateId={this.props.currentCategory.id}/>
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
        currentCategory:state.currentCategory
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticleByCate:allActions.articleAction.fetchArticleByCate,
        fetchCategory:allActions.categoryAction.fetchCategory
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(ArticleCates);