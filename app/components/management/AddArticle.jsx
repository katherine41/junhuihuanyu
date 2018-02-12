// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

import 'react-trumbowyg/dist/trumbowyg.min.css';
import Trumbowyg from 'react-trumbowyg';

var React = require('react');
var {Link} = require('react-router');

//=======================component details================================
function Category(props) {
    return (
        <option id={props.cateId}>{props.cateName}</option>
    );
}

function CategoryList(props){
    var categories=Array.from(props.categories);
    const listItems=categories.map(
        function (category) {
            return <Category key={category.id} cateId={category.id} cateName={category.categoryName}/>
        }
    );
    return (
        <select className="form-control" id="formSelect">{listItems}</select>
    );
}

function CategoryMgtItem(props) {
    return (
        <li className="list-group-item">
            {props.categoryName}
            <span>
                <img src="../../../image/delete.svg" className="cateMgtDelete pull-right" onClick={()=>props.deleteCategory(props.categoryId)}/>
            </span>
        </li>
    )
}
function CategoryMgtList(props) {
    var categories=Array.from(props.categories);
    const listItems=categories.map(
        function (category) {
            return <CategoryMgtItem key={category.id} categoryId={category.id} categoryName={category.categoryName} cateNum={category.articlesNum} deleteCategory={props.deleteCategory}/>
        }
    );
    return (
        <ul className="list-group">
            {listItems}
            <li className="input-group">
                <input type="text" className="form-control" id="newCateName" placeholder="请添加分类"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={() => {props.addCategory($("#newCateName").val());$("#newCateName").val('')}}>添加分类</button>
                </span>
            </li>
        </ul>
    )
}

var Management = React.createClass({
    componentDidMount() {
        this.props.fetchCategory();
    },
    closeCateMgtModal(){
        $("#cateMgtModal").css({display:'none'});
    },
    openCateMgtModal(){
        $("#cateMgtModal").css({display:'block'});
    },
    render() {
        return (
            <form>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">标题</span>
                        <input id="articleHeader" className="form-control" placeholder="请输入文章标题"/>
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
                            <CategoryList categories={this.props.categories}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-default" type="button" onClick={()=>this.openCateMgtModal()}>管理分类</button>
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
                <input type="button" className="btn btn-primary" onClick={()=>this.props.addArticle()} value="发布"/>

                <div className="cateMgtContainer modal" id="cateMgtModal">
                    <div className="modal-content">
                        <span className="pull-right closeModalBtn" onClick={()=>this.closeCateMgtModal()}>x</span>
                        <h5>管理分类：</h5>
                        <CategoryMgtList categories={this.props.categories} deleteCategory={this.props.deleteCategory} addCategory={this.props.addCategory}/>
                    </div>
                </div>
            </form>
        )
    }
});

function mapStatsToProps(state){
    return {
        categories:state.categories
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchCategory:allActions.categoryAction.fetchCategory,
        addCategory:allActions.categoryAction.addCategory,
        deleteCategory:allActions.categoryAction.deleteCategory,
        addArticle:allActions.articleAction.addArticle
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Management);

