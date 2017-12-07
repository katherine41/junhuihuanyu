var React = require('react');
import '../../../public/css/userMgt.css';
import env_variables from '../../components/environment.js';

var Login = React.createClass({
    loginUser:function(){
        var loginUserEmail = $("#loginUserEmail").val();
        var loginUserPassword = $("#loginUserPassword").val();
        var userInfo={
            userId:loginUserEmail,
            password:loginUserPassword,
        };
        $.ajax({
            type:'POST',
            url:env_variables.apiEndpoint+"/login",
            data: JSON.stringify(userInfo),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log("Login success",data);
                window.location.hash="#/profile/";
                localStorage.setItem("user", data);
            },
            error:function(err){
                console.log("Login error",err);
            }
        });
    },
    render:function(){
        return (
            <div className="login_container container" style={{backgroundImage:`url("../../image/login_back.jpg")`}}>
                <div className="loginPanel">
                    <div className="page-header">
                        <h1>骏汇寰宇 <small>登录</small></h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="loginUserEmail" placeholder="邮箱"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="loginUserPassword" placeholder="密码"/>
                        </div>
                        <div className="blockBtn" onClick={()=>this.loginUser()}>登录</div>
                    </form>
                </div>
            </div>
        )
    }

});


module.exports = Login;