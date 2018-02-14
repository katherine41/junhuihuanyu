// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';


var React = require('react');
var IndexArticles = require('../articles/IndexArticles');
var ArticlesPage = React.createClass({
	componentDidMount:function () {
		// this.props.fetchArticles();
		var cateId=6;
		this.props.fetchArticleByCate(cateId);
	},
	render: function () {
		return (
			<section id="indexArticles">
				<div className="container">
					<IndexArticles posts={this.props.articles}/>
				</div>
			</section>
		)
	}

});

function mapStatsToProps(state){
	return {
		articles:state.articles,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		// fetchArticles:allActions.articleAction.fetchArticles,
		fetchArticleByCate:allActions.articleAction.fetchArticleByCate,

	},dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(ArticlesPage);