// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

var React = require('react');
import '../../../public/css/style.css';

var TitleLine = require('../TitleLine');

//=======================component details================================
var Register = React.createClass({
    editUser:function(){
        $("#profileBeforeEdit").css("display","none");
        $("#profileAfterEdit").css("display","block");
        $("#editUserBtn").css("display","none");
    },
    confirmEditUser:function(){
        $("#profileBeforeEdit").css("display","block");
        $("#profileAfterEdit").css("display","none");
        $("#editUserBtn").css("display","block");
    },
    componentDidMount() {
        var that=this;
        this.props.fetchCurrentUser("yx@gmail.com");
        document.getElementById("editUserBtn").addEventListener('click',that.editUser);
        document.getElementById("confirmEdit").addEventListener('click',that.confirmEditUser);
    },

    componentWillUnmount() {
        var that=this;
        document.getElementById("editUserBtn").removeEventListener('click',that.editUser)
    },
    render:function(){
        return (
            <div className="profile_container">
                <div className="profilePanel">
                    <div className="profileHeader" style={{backgroundImage:`url("../../image/profileBack.jpg")`}}>
                    </div>
                    <div id="profleContent">
                        <span className="editUserBtn pull-right" id="editUserBtn">
                            <img src="../../image/edit.svg"/>
                        </span>
                        <TitleLine titleNameChn="用户信息" titleNameEng="PROFILE"/>

                        <form id="profileBeforeEdit">
                            <div className="form-group row">
                                <label htmlFor="profileUsername" className="col-sm-2 col-form-label">用户名</label>
                                <div className="col-sm-10">
                                    <p>username username username</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profilePhone" className="col-sm-2 col-form-label">手机号</label>
                                <div className="col-sm-10">
                                    <p>phone phone phone</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profileEmail" className="col-sm-2 col-form-label">邮箱</label>
                                <div className="col-sm-10">
                                    <p>email email email</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profilePassword" className="col-sm-2 col-form-label">密码</label>
                                <div className="col-sm-10">
                                    <p>pswd pswd pswd</p>
                                </div>
                            </div>
                            <div className="blockBtn">退出登录</div>
                        </form>
                        <form id="profileAfterEdit">
                            <div className="form-group row">
                                <label htmlFor="profileUsername" className="col-sm-2 col-form-label">用户名</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profileUsername" placeholder="用户名"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profilePhone" className="col-sm-2 col-form-label">手机号</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profilePhone" placeholder="手机号"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profileEmail" className="col-sm-2 col-form-label">邮箱</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="profileEmail" placeholder="邮箱"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profilePassword" className="col-sm-2 col-form-label">密码</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="profilePassword" placeholder="密码"/>
                                </div>
                            </div>
                            <div className="blockBtn" id="confirmEdit">确认修改</div>
                            <div className="blockBtn" id="cancelEdit">取消</div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }

});
function mapStatsToProps(state){
    return {
        user:state.currentUser
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchCurrentUser:allActions.userAction.fetchCurrentUser
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Register);