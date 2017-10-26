/**
 * Created by Katherine on 10/17/17.
 */
import ReactHtmlParser from 'react-html-parser';
import env_variables from '../components/environment.js';

var React = require('react');
var AnArticle = React.createClass({
    getInitialState: function() {
        return { post:
            []
        };
    },
    componentDidMount:function () {
        var articleId=this.props.location.pathname.split('/')[2];
        var that=this;
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint+"/article/"+articleId,
            // url: "/article/all",
            success: function(res){
                that.setState({post:res});
                console.log(res);
            },
            error: function(err){
                console.log(err)
            }
        });
    },
    render:function(){
        var post=this.state.post;
        var formattedPost={
            title:post.title,
            summary:post.summary,
            content:ReactHtmlParser(post.content),
            createDate:formatDate(new Date(post.createDate))
        };
        return (
                <div className="container">
                    <div className="page-header">
                        <h3>{formattedPost.title} <small>{formattedPost.createDate}</small></h3>
                    </div>
                    <div>
                        <div>{formattedPost.content}</div>
                    </div>

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

module.exports = AnArticle;