var React = require('react');
import '../../../public/css/userMgt.css';


var Login = React.createClass({

    render:function(){
        return (
            <div className="login_container container" style={{backgroundImage:`url("../../image/login_back.jpg")`}}>
                <div className="loginPanel">
                    <div className="page-header">
                        <h1>骏汇寰宇 <small>登录</small></h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="密码"/>
                            <small className="form-text text-muted pull-right">忘记密码？</small>
                        </div>
                        <div className="loginBtn">登录</div>
                    </form>
                </div>
            </div>
        )
    }

});


module.exports = Login;