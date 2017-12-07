// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

var React = require('react');

var TitleLine = require('../TitleLine');
import '../../../public/css/userMgt.css';
//=======================component details================================
var Register = React.createClass({
    editUser:function(){
        $("#profileBeforeEdit").css("display","none");
        $("#profileAfterEdit").css("display","block");
        $("#editUserBtn").css("display","none");
    },
    confirmEditUser:function(){
        var userInfo= this.props.user;
        userInfo.userName=$("#profileUsername").val();
        userInfo.phoneNumber=$("#profilePhone").val();
        this.props.modifyUser(userInfo);
    },
    componentDidMount() {
        var that=this;
        var userId=JSON.parse(localStorage.getItem("user")).userId;
        // userId
        this.props.fetchCurrentUser(userId);
        document.getElementById("editUserBtn").addEventListener('click',that.editUser);
        document.getElementById("confirmEdit").addEventListener('click',that.confirmEditUser);
    },
    componentWillUnmount() {
        var that=this;
        document.getElementById("editUserBtn").removeEventListener('click',that.editUser);
        document.getElementById("confirmEdit").removeEventListener('click',that.confirmEditUser);
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
                                <label className="col-sm-2 col-form-label">用户名</label>
                                <div className="col-sm-10">
                                    <p>{this.props.user.userName}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">手机号</label>
                                <div className="col-sm-10">
                                    <p>{this.props.user.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">邮箱</label>
                                <div className="col-sm-10">
                                    <p>{this.props.user.userId}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">类别</label>
                                <div className="col-sm-10">
                                    <p>{this.props.user.role}</p>
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
                                    <p id="profileEmail">{this.props.user.userId}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profileUserCate" className="col-sm-2 col-form-label">类别</label>
                                <div className="col-sm-10">
                                    <p id="profileUserCate">{this.props.user.role}</p>
                                </div>
                            </div>
                            <div className="blockBtn" id="confirmEdit">确认修改</div>
                            <div className="blockBtn" id="cancelEdit" >取消</div>
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
        fetchCurrentUser:allActions.userAction.fetchCurrentUser,
        modifyUser:allActions.userAction.modifyUser
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Register);

