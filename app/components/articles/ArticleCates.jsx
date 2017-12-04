// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

import '../../../public/css/Article.css';

var React = require('react');

var ArticleList = require('./ArticleList');
var CategoryList = require('./CategoryList');
var TitleLine = require('../TitleLine');

//=======================component details================================
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
            <div>
                <div className="contentTop"></div>
                <div className="contentMiddle article_container container">
                    <div className="row">
                        <div className="col-sm-8">
                            <TitleLine titleNameChn={this.props.currentCategory.categoryName} titleNameEng=""/>
                            <ArticleList posts={this.props.articles}/>
                        </div>
                        <div className="col-sm-4">
                            <CategoryList categories={this.props.categories}
                                          currentCateId={this.props.currentCategory.id}/>
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