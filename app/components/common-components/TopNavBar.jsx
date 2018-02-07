var React = require('react');
var {Link} = require('react-router');

var TopNavBar = React.createClass({
	render:function(){
		return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="/">骏寰科技</a>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="nav navbar-nav text-uppercase">
							<li><Link to="/aboutUs/">关于我们</Link></li>
							<li><Link to="/calendar/">财经日历</Link></li>
							<li><Link to="/articles/">汇评</Link></li>
							<li><Link to="/videos/">视频解析</Link></li>
							<li><Link to="/training/">培训</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

		)
	}
});


module.exports = TopNavBar;