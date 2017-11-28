var React = require('react');
import '../../../public/css/style.css';


var Register = React.createClass({

    render:function(){
        return (
            <div className="login_container container" style={{backgroundImage:`url("../../image/stock-min.jpg")`}}>
                <div className="loginPanel">
                    <div className="page-header">
                        <h1>骏汇寰宇 <small>注册</small></h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="userEmail" placeholder="用户名"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="userPassword" placeholder="密码"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="rePassword" placeholder="重复密码"/>
                        </div>
                        <div className="loginBtn">注册</div>
                    </form>
                </div>
            </div>
        )
    }

});


module.exports = Register;