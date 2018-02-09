var React = require('react');
var TitleLine = require('../common-components/TitleLine');

import '../../../public/css/staticpages.css';

var ArticleElement = React.createClass({
	render: function () {
		return (
			<div>
				<div className="staticPageContainer container" id="articleContainer">
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<TitleLine titleNameChn='asfdasdf'/>
					<p>aaa
						ddfvasd
						dfsdafasdf
						asdfads
						aaaaa
						ddfvasd
						dfsdafasdf
						asdfads
						aaaaaddfvasd
						dfsdafasdf
						asdfads
						aaaaaddfvasd
						dfsdafasdf
						asdfads
						aaaaaddfvasd
						dfsdafasdf
						asdfads
						aaaaaddfvasd
						dfsdafasdf
						asdfads
						aaaaaddfvasd
						dfsdafasdf
						asdfads
						aaaaa
						{/*{this.props.articleContent}<br/>*/}
					</p>
				</div>
			</div>
		)
	}

});

module.exports = ArticleElement;