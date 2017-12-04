var React = require('react');
var {Link} = require('react-router');

var TopNav = React.createClass({

    render:function(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <div id="topLogoContainer">
                                <img src="../../image/huanyulogo.png"/>
                            </div>
                        </a>
                    </div>

                    <div>
                        <ul className="nav navbar-nav">
                            <li><a href="#">主页</a></li>
                            <li><Link to="/calendar/">财经日历</Link></li>
                            <li><Link to="/articles/">汇评</Link></li>
                            <li><Link to="/videos/">视频解析</Link></li>
                            <li><Link to="/management/">管理</Link></li>
                            <li><Link to="/aboutUs/">关于我们</Link></li>
                        </ul>
                        <ul className="nav navbar-nav pull-right">
                            <li><Link to="/login/">登录</Link></li>
                            <li><Link to="/register/">注册</Link></li>
                            <li><Link to="/profile/">用户信息</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

});


module.exports = TopNav;