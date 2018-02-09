var React = require('react');

var TopNavBar = React.createClass({
	render:function(){
		return (
			<div className="top-banner-container" style={{backgroundImage: `url("../../image/background/bannerImg.jpeg")`}}>
				<h2>{this.props.bannerName}</h2>
				<p className="banner-sub-title">{this.props.subtitleName}</p>
			</div>

		)
	}
});


module.exports = TopNavBar;