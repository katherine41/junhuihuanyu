var React = require('react');

var FirstPage = React.createClass({
	render:function(){
		return (
			<header className="masthead" style={{backgroundImage: `url("../../image/background/landingBg.jpeg")`}}>
				<div className="container">
					<div className="intro-text">
						<div className="intro-lead-in">Let forex trading realise dreams!</div>
						<div className="intro-heading text-uppercase">骏寰科技</div>
						<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">点击进入</a>
					</div>
				</div>
			</header>
		)
	}

});

module.exports=FirstPage;