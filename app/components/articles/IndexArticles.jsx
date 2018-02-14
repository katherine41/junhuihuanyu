var React = require('react');


import ReactHtmlParser from 'react-html-parser';
import env_variables from '../../components/environment';

function IndexArticleItem(props) {
	return (
	<div className="col-sm-6 col-md-4">
		<div className="articleThumbnail thumbnail">
			<div className="thumbnailImg"  style={{backgroundImage: `url("../../image/articles/sampleArticle1.png")`}}>
			</div>
			<div className="caption">
				<h5>{props.title}</h5>
				<p>{props.summary}</p>
			</div>
		</div>
	</div>
	);
}

var IndexArticles = React.createClass({
	render: function () {
		var posts=this.props.posts;
		if(posts.length>3){
			posts=posts.slice(0,3);  //0,1,2
		}
		const listItems=posts.map(
			function (post1) {
				var formattedPost={
					title:post1.title,
					summary:post1.summary,
					content:ReactHtmlParser(post1.content),
					createDate:env_variables.formatDate(new Date(post1.createDate))
				};
				return <IndexArticleItem key={post1.articleId} articleId={post1.articleId} title={formattedPost.title} summary={formattedPost.summary} content={ formattedPost.content } createDate={formattedPost.createDate}/>
			}
		);
		return (
			<div>
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">独家新闻汇评</h2>
					</div>
				</div>
				<div className="row">{listItems}</div>
			</div>
		);
	}

});



module.exports = IndexArticles;
