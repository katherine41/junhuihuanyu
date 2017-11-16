var React = require('react');
var {Link} = require('react-router');
import '../../public/css/style.css';


var TopNav = React.createClass({

    render:function(){
        return (
            <nav className="navbar navbar-default">
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
                            <li><Link to="/articles/">文章</Link></li>
                            <li><Link to="/videos/">视频</Link></li>
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