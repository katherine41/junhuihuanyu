var React = require('react');
import '../../../public/css/style.css';
import env_variables from '../../components/environment.js';

var Register = React.createClass({
    modifyUserInfo:function(){
        console.log(1);
    },
    componentDidMount() {
        // (The "nv" elem is assigned in the render function.)
        var modifyClass=document.getElementsByClassName("input-group-addon");
        var that=this;
        Array.from(modifyClass).forEach(function(element) {
            element.addEventListener('click', that.modifyUserInfo);
        });
    },

    componentWillUnmount() {
        // this.nv.removeEventListener("nv-enter", this.handleNvEnter);
        var modifyClass=document.getElementsByClassName("input-group-addon");
        var that=this;

        Array.from(modifyClass).forEach(function(element) {
            element.addEventListener('click', that.modifyUserInfo);
        });
    },
    render:function(){
        return (
            <div className="profile_container">
                <div className="profilePanel">
                    <div className="profileHeader" style={{backgroundImage:`url("../../image/profileBack.jpg")`}}>
                    </div>
                    <div id="profleContent">
                        <div className="titleLine calendarTitleLine">
                            <span></span>
                            <h4>用户信息<small>PROFILE</small></h4>
                        </div>
                        <form>
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
                            <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                    <button type="submit" className="btn btn-primary">登出账户</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <form className="profileContent">
                        <div className="form-group row">
                            <label htmlFor="profileUsername" className="col-sm-2 col-form-label">用户名</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" className="form-control" id="profileUsername" placeholder="用户名" disabled/>
                                <div className="input-group-addon">修改</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="profilePhone" className="col-sm-2 col-form-label">手机号</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" className="form-control" id="profilePhone" placeholder="手机号"/>
                                <div className="input-group-addon">修改</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="profileEmail" className="col-sm-2 col-form-label">邮箱</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="email" className="form-control" id="profileEmail" placeholder="邮箱"/>
                                <div className="input-group-addon">修改</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="profilePassword" className="col-sm-2 col-form-label">密码</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="password" className="form-control" id="profilePassword" placeholder="密码"/>
                                <div className="input-group-addon">修改</div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">登出账户</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }

});


module.exports = Register;