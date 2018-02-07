var React = require('react');

var TopNavBar = React.createClass({
	render:function(){
		return (
			<div className="top-banner-container" style={{backgroundImage: `url("../../image/background/bannerImg.jpeg")`}}>
				<h2>外汇资产配置，从我们开始</h2>
			</div>

		)
	}
});


module.exports = TopNavBar;