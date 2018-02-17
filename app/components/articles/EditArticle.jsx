// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

var React = require('react');
var {Link} = require('react-router');
var PopupPanel = require('../common-components/PopupPanel');

import '../../../public/css/Management.css';
import Trumbowyg from 'react-trumbowyg';

var TitleLine = require('../TitleLine');

function Category(props) {
    if(props.currentCategory.id===props.cateId){
        return (
            <option id={props.cateId} selected="true">{props.cateName}</option>
        );
    }else{
        return (
            <option id={props.cateId}>{props.cateName}</option>
        );
    }
    return (
        <option id={props.cateId}>{props.cateName}</option>
    );

}
function CategoryList(props){
    var categories=Array.from(props.categories);
    const listItems=categories.map(
        function (category) {
            return <Category key={category.id} cateId={category.id} cateName={category.categoryName} currentCategory={props.currentCategory}/>
        }
    );
    return (
        <select className="form-control" id="formSelect">{listItems}</select>
    );
}

class EditArticle extends React.Component{
    componentDidMount() {
        var articleId=this.props.location.pathname.split('/')[2];
        this.props.fetchArticle(articleId);
        this.props.fetchCategory();

    };
    render() {
        var articleId=this.props.location.pathname.split('/')[2];
        // var categories=this.props.categories;
        // var cateId=this.props.currentCateId;
        // const listItems=categories.map(
        //     function (category) {
        //         return <CategoryItem key={category.id} categoryId={category.id} categoryName={category.categoryName} cateNum={category.articlesNum} currentCateId={cateId}/>
        //     }
        // );
        // var articleId=this.props.article.articleId;
        return (
        <div>
            <PopupPanel articleId={articleId}/>
            <div className="contentTop"></div>
            <div className="contentMiddle editArticle_container container">
                <TitleLine titleNameChn="编辑文章" titleNameEng="EDIT"/>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">标题</span>
                        <input type="text" id="articleHeader" className="form-control" placeholder="请输入文章标题"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">摘要</span>
                        <textarea id="articleSummary" className="form-control" rows="2" placeholder="请输入文章摘要"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-addon">分类</span>
                            <CategoryList categories={this.props.categories} currentCategory={this.props.article.articleCategory}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input type="text" className="form-control" id="newCateName" placeholder="请添加分类"/>
                            <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={()=>this.props.addCategory($("#newCateName").val())}>添加分类</button>
                                </span>
                        </div>
                    </div>
                </div>


                <Trumbowyg id='react-trumbowyg' buttons={
                    [
                        ['viewHTML'],
                        ['formatting'],
                        'btnGrp-semantic',
                        'btnGrp-justify',
                        'btnGrp-lists',
                        ['fullscreen']
                    ]
                }
                           data=''
                           placeholder='请输入文章内容'
                />
                <button className="btn btn-primary" type="button" onClick={()=>this.props.modifyArticle(articleId)}>保存修改</button>
                <button className="btn btn-primary" type="button"><Link to={`/articles/${articleId}`}>取消</Link></button>
            </div>
        </div>
        );
    }
}


function mapStatsToProps(state){
    return {
        article:state.currentArticle,
        categories:state.categories,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchCategory:allActions.categoryAction.fetchCategory,
        addCategory:allActions.categoryAction.addCategory,
        fetchArticle:allActions.articleAction.fetchArticle,
        modifyArticle:allActions.articleAction.modifyArticle
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(EditArticle);
