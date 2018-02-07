var React = require('react');
var {Link} = require('react-router');

var FirstPage = React.createClass({
	render:function(){
		return (
			<header className="masthead" style={{backgroundImage: `url("../../image/background/landingBg.jpeg")`}}>
				<div className="container">
					<div className="intro-text">
						<div className="intro-lead-in">Let forex trading realise dreams!</div>
						<div className="intro-heading text-uppercase">骏寰科技</div>
						<Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/aboutUs/">关于我们</Link>
					</div>
				</div>
			</header>
		)
	}

});

module.exports=FirstPage;