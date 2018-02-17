// var React = require('react');
//
// var StudyPage = React.createClass({
// 	render: function () {
// 		return (
// 			<section id="indexStudy">
// 				<div className="container">
// 					<div className="row">
// 						<div className="col-lg-12 text-center">
// 							<h2 className="section-heading text-uppercase">外汇入门学习</h2>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		)
// 	}
//
// });
//
// module.exports = StudyPage;

// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';


var React = require('react');
var IndexArticles = require('../articles/IndexArticles');
var StudyPage = React.createClass({
	componentDidMount:function () {
		var cateId=4;
		this.props.fetchArticleByCate(cateId);
	},
	render: function () {
		return (
			<section id="indexStudy">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">外汇入门学习</h2>
						</div>
					</div>
					<IndexArticles posts={this.props.articles}/>
				</div>
			</section>
		)
	}

});

function mapStatsToProps(state){
	return {
		articles:state.indexStudy,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		fetchArticleByCate:allActions.articleAction.fetchIndexStudy,
	},dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(StudyPage);