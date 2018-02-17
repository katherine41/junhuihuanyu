// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';


var React = require('react');
var IndexArticles = require('../articles/IndexArticles');
var ArticlesPage = React.createClass({
	componentDidMount:function () {
		var cateId=6;
		this.props.fetchArticleByCate(cateId);
	},
	render: function () {
		return (
			<section id="indexArticles">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">独家新闻汇评</h2>
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
		articles:state.indexNews,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		fetchArticleByCate:allActions.articleAction.fetchIndexNews,
	},dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(ArticlesPage);