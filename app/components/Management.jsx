var React = require('react');
import 'react-trumbowyg/dist/trumbowyg.min.css';
import '../../public/css/Management.css';
var {Link} = require('react-router');


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
    render() {
        return (
        <div className="mng_container container">
            <ul className="nav nav-tabs">
                <li id="articleTab" className="active" onClick={()=>this.changeTab("article")}><Link to="/management/">添加文章</Link></li>
                <li id="videoTab" onClick={()=>this.changeTab("video")}><Link to="/management/video">添加视频</Link></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>
        )
    }
}
module.exports = Management;
