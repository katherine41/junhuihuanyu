var React = require('react');
var {Link} = require('react-router');
import env_variables from '../../components/environment.js';

var TopNavBar = React.createClass({
	render:function(){
		const isLoggedIn = this.props.isLoggedIn;
		const userRole = env_variables.fetchUserRole();
		const userName = env_variables.fetchUsername();
		let userMgtNav = null;
		let mgtNav=null;
		if (isLoggedIn==="true") {
			userMgtNav =
				<ul id="profileNav" className="nav navbar-nav pull-right">
					<li><Link to="/profile/">{userName}</Link></li>
				</ul>;
		} else {
			userMgtNav =
				<ul id="loginRegisterNav" className="nav navbar-nav pull-right">
					<li><Link to="/login/">登录</Link></li>
					<li><Link to="/register/">注册</Link></li>
				</ul>
			;
		}
		if(userRole==="ADMINISTRATOR"){
			mgtNav=<li><Link to="/management/">管理</Link></li>;
		}
		return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="/">骏寰科技</a>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="nav navbar-nav text-uppercase">
							<li><Link to="/">主页</Link></li>
							<li><Link to="/aboutUs/">关于我们</Link></li>
							<li><Link to="/services/">业务领域</Link></li>
							<li><Link to="/calendar/">财经日历</Link></li>
							<li><Link to="/articles/">汇市资讯</Link></li>
							{mgtNav}
							{/*<li><Link to="/management/">管理</Link></li>*/}
							{/*<li><Link to="/videos/">视频解析</Link></li>*/}
							{/*<li><Link to="/training/">培训</Link></li>*/}
						</ul>
						{userMgtNav}

					</div>
				</div>
			</nav>
		</div>

		)
	}
});


module.exports = TopNavBar;