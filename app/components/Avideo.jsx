/**
 * Created by Katherine on 10/17/17.
 */
import env_variables from '../components/environment.js';

var React = require('react');
var Avideo = React.createClass({
    getInitialState: function() {
        return { video:
            []
        };
    },
    componentDidMount:function () {
        var videoId=this.props.location.pathname.split('/')[2];
        var that=this;
    },
    render:function(){
        var videoId=this.props.location.pathname.split('/')[2];
        var videoUrl=env_variables.apiEndpoint+"/rest/video/"+videoId;
        // var videoUrl="http://7bb3795c.ngrok.io/rest/video/1";
        // var post=this.state.post;
        // var formattedPost={
        //     title:post.title,
        //     summary:post.summary,
        //     content:ReactHtmlParser(post.content),
        //     createDate:formatDate(new Date(post.createDate))
        // };
        return (
            <div className="container">
                <video id="myVideo" width="320" height="176" controls controlsList="nodownload">
                    <source src={videoUrl} type="video/mp4"/>
                </video>
                {/*<h3>{formattedPost.title}</h3>*/}
                {/*<p>{formattedPost.createDate}</p>*/}
                {/*<div>{formattedPost.content}</div>*/}
            </div>
        )
    }

});
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    if (dd < 10){
        dd = "0"+dd;
    }
    if (mm < 10){
        mm = "0"+mm;
    }
    var yyyy = date.getFullYear();
    var hh=date.getHours();
    var min=date.getMinutes();
    var ss=date.getSeconds();
    if(min>=0&&min<10){
        min="0"+min;
    }
    if(ss>=0&&ss<10){
        ss="0"+ss;
    }
    // return yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;
    return yyyy+"-"+mm+"-"+dd;
}

module.exports = Avideo;