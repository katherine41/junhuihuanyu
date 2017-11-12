var React = require('react');
import 'react-trumbowyg/dist/trumbowyg.min.css';
import Trumbowyg from 'react-trumbowyg';
import { FormGroup,InputGroup,FormControl,Button } from 'react-bootstrap';
import '../../node_modules/trumbowyg/dist/ui/trumbowyg.min.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../actions/index';

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

var Management = React.createClass({
    componentDidMount() {
        this.props.fetchCategory();
    },
    render() {
        return (
            <div className="newVideoWrapper">
                <h4>添加新文章</h4>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>标题</InputGroup.Addon>
                        <FormControl type="text" id="articleHeader" placeholder="请输入文章标题"/>
                    </InputGroup>
                </FormGroup>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">摘要</span>
                        <textarea id="articleSummary" className="form-control" rows="2" placeholder="请输入文章摘要"/>

                        {/*<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">*/}
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
                <Button bsStyle="primary" onClick={()=>this.props.addArticle()}>发布</Button>

                {/*<div id="articleContainer"></div>*/}
            </div>
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
        addArticle:allActions.articleAction.addArticle
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Management);
