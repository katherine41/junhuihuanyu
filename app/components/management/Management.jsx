import 'react-trumbowyg/dist/trumbowyg.min.css';
import '../../../public/css/Management.css';
import env_variables from '../../components/environment.js';

var React = require('react');
var {Link} = require('react-router');

var TitleLine = require('../TitleLine');
var PopupPanel = require('../common-components/PopupPanel');


class Management extends React.Component {
    componentWillMount(){
        var fetchUserRole=env_variables.fetchUserRole();
        if(fetchUserRole!=="ADMINISTRATOR"){
                window.location.hash="#/login/";
        }
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
                    <div className="addNewWrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Management;
