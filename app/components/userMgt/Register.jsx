var React = require('react');
import '../../../public/css/style.css';
import env_variables from '../../components/environment.js';

var Register = React.createClass({
    registerUser:function(){
        var registerUserEmail = $("#registerUserEmail").val();
        var registerUsername = $("#registerUsername").val();
        var registerUserPassword = $("#registerUserPassword").val();
        var userInfo={
            userId:registerUserEmail,
            userName:registerUsername,
            password:registerUserPassword,
        };
        $.ajax({
            type:'POST',
            url:env_variables.apiEndpoint+"/rest/user",
            data: JSON.stringify(userInfo),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log("Register success",data)
            },
            error:function(err){
                console.log("Register error",err);
            }
        });
        console.log(userInfo);
    },
    render:function(){
        return (
            <div className="login_container container" style={{backgroundImage:`url("../../image/login_back.jpg")`}}>
                <div className="loginPanel">
                    <div className="page-header">
                        <h1>骏汇寰宇 <small>注册</small></h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="registerUserEmail" placeholder="邮箱"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="registerUserPassword" placeholder="密码"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="rePassword" placeholder="重复密码"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="registerUsername" placeholder="用户昵称"/>
                        </div>
                        <div className="blockBtn" onClick={()=>this.registerUser()}>注册</div>
                    </form>
                </div>
            </div>
        )
    }

});


module.exports = Register;