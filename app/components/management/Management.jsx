import 'react-trumbowyg/dist/trumbowyg.min.css';
import '../../../public/css/Management.css';
import env_variables from '../../components/environment.js';

var React = require('react');
var {Link} = require('react-router');

var TitleLine = require('../TitleLine');
var PopupPanel = require('../PopupPanel');


class Management extends React.Component {
    changeTab(tabName){
        switch(tabName){
            case "article":
                $("#articleTab").addClass("active");
                $("#videoTab").removeClass("active");
                break;
            case "video":
                $("#videoTab").addClass("active");
                $("#articleTab").removeClass("active");
                break;
        }
    }
    componentWillMount(){
        // var fetchUserRole=env_variables.fetchUserRole();
        // if(fetchUserRole!=="ADMIN"){
        //         window.location.hash="#/login/";
        // }
    }
    componentDidMount(){
        var currentPath=this.props.location.pathname;
        if(currentPath.split('/')[1]==="management"&&currentPath.split('/')[2]==="video"){
            $("#articleTab").removeClass("active");
            $("#videoTab").addClass("active");
        }else if(currentPath.split('/')[2]===""){
            $("#articleTab").addClass("active");
            $("#videoTab").removeClass("active");
        }
    }
    render() {
        return (
            <div>
                <PopupPanel/>
                <div className="contentTop"></div>
                <div className="contentMiddle mng_container container">
                    <TitleLine titleNameChn="管理" titleNameEng="MANAGEMENT"/>
                    <ul className="nav nav-tabs">
                        <li id="articleTab" className="active" onClick={() => this.changeTab("article")}><Link
                            to="/management/">添加文章</Link></li>
                        <li id="videoTab" onClick={() => this.changeTab("video")}><Link
                            to="/management/video">添加视频</Link></li>
                    </ul>
                    <div className="addNewWrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Management;
