var React = require('react');

var TitleLine = require('../TitleLine');
import '../../../public/css/userMgt.css';
import env_variables from '../../components/environment.js';
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
    changeUserName:function (event) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                userName: event.target.value
            }
        }));
        console.log(event.target.value);
    },
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // this.setState({
        //     [name]: value
        // });
        // console.log(this.state.user);
        console.log(target.name);
        console.log(target.value);
    },
    getInitialState:function(){
        return {
            user: {
                "userId": 1,
                "userName": 'Yuxi',
                "role":"NORMAL",
                "createDate": 1507948531000,
                "phoneNumber": "7028570160",
            }
        }
    },
    componentDidMount() {
        var that=this;
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/user?userId='+"yx@gmail.com",
            success: function (res) {
                console.log(res);
                that.setState({user: res});
            },
            error: function (err) {
                console.log(err)
            }
        });
        // this.props.fetchCurrentUser("yx@gmail.com");
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
                                    <p>{this.state.user.userName}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profilePhone" className="col-sm-2 col-form-label">手机号</label>
                                <div className="col-sm-10">
                                    <p>{this.state.user.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profileEmail" className="col-sm-2 col-form-label">邮箱</label>
                                <div className="col-sm-10">
                                    <p>{this.state.user.userId}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="profileUserCate" className="col-sm-2 col-form-label">类别</label>
                                <div className="col-sm-10">
                                    <p>{this.state.user.role}</p>
                                </div>
                            </div>
                            <div className="blockBtn">退出登录</div>
                        </form>
                        <form id="profileAfterEdit">
                            <div className="form-group row">
                                <label htmlFor="profileUsername" className="col-sm-2 col-form-label">用户名</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="profileUsername" placeholder="用户名"
                                           value={this.state.user.userName} onChange={this.handleInputChange}/>
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
                                    {/*<p>{this.state.user.userId}</p>*/}
                                    <p>aaa</p>
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

module.exports = Register;
