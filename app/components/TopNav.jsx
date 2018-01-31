var React = require('react');
var {Link} = require('react-router');
import env_variables from '../components/environment.js';


var TopNav = React.createClass({

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
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <div id="topLogoContainer">
                                <img src="../../image/huanyulogo.png"/>
                            </div>
                        </a>
                    </div>

                    <div>
                        <ul className="nav navbar-nav">
                            <li><a href="/">主页</a></li>
                            <li><Link to="/calendar/">财经日历</Link></li>
                            <li><Link to="/articles/">汇评</Link></li>
                            {mgtNav}
                            <li><Link to="/videos/">视频解析</Link></li>
                            <li><Link to="/aboutUs/">关于我们</Link></li>
                        </ul>
                        {userMgtNav}
                    </div>
                </div>
            </nav>
        )
    }

});


module.exports = TopNav;