/**
 * Created by Katherine on 10/17/17.
 */
import env_variables from '../components/environment.js';

var React = require('react');
var {Link} = require('react-router');
import '../../public/css/Videos.css';

function VideoPost(props){
    return (
        <div className="col-xs-4 col-sm-3 col-lg-2">
            <Link to={`/videos/${props.videoId}`}>
                <div className="thumbnail">
                    <div className="videoCoverImgContainer" style={{backgroundImage:`url(${props.imageUrl})`}}></div>
                    <span className="videoLengthDiv">{props.videoLength}</span>
                    <div className="caption">
                        <h5>{props.videoName}</h5>
                        <p><small>{props.createdDate}</small></p>
                    </div>
                </div>
            </Link>

        </div>
    );
}
function VideosList(props) {
    const videos=props.videos;
    const listItems=videos.map(
        function (video) {
            var formattedVideo={
                // imageUrl:env_variables.apiEndpoint+video.imageUrl,
                imageUrl:video.imageUrl,
                videoLength:fmtMSS(video.videoLength),
                createdDate:formatDate(new Date(video.createdDate))
            };
            return <VideoPost key={video.videoId} videoId={video.videoId} videoName={video.videoName} imageUrl={formattedVideo.imageUrl} videoLength={formattedVideo.videoLength} createdDate={formattedVideo.createdDate}/>
        }
    );
    return (
        <div className="row">{listItems}</div>
    )
}
var Avideo = React.createClass({
    getInitialState: function() {
        return { video:
            {
                "videoId":1,
                "videoName":"视频1",
                "imageUrl":"../../image/star.jpg",
                "videoUrl":"../../image/output.MOV",
                "videoLength":10,
                "createdDate":1508725377000,

            },
            videos:
                [{
                    "videoId":1,
                    "videoName":"视频1",
                    "imageUrl":"../../image/star.jpg",
                    "videoUrl":"../../image/output.MOV",
                    "videoLength":10,
                    "createdDate":1508725377000,

                },{
                    "videoId":2,
                    "videoName":"视频1",
                    "imageUrl":"../../image/star.jpg",
                    "videoUrl":"../../image/output.MOV",
                    "videoLength":10,
                    "createdDate":1508725377000,
                }]
        };
    },
    componentDidMount:function () {
        let videoId=this.props.location.pathname.split('/')[2];
        let that=this;
        // $.ajax({
        //     type: 'GET',
        //     url: env_variables.apiEndpoint+"/rest/video/"+videoId,
        //     success: function(res){
        //         that.setState({video:res});
        //     },
        //     error: function(err){
        //         console.log(err)
        //     }
        // });
    },
    render:function(){
        var video=this.state.video;
        var videoId=this.props.location.pathname.split('/')[2];
        var formattedVideo={
            videoLength:fmtMSS(video.videoLength),
            createdDate:formatDate(new Date(video.createdDate))
        };
        // var url=env_variables.apiEndpoint+"/rest/video/"+videoId+"/videostream";
        var url="../../image/output.MOV";
        return (
            <div className="container tutorialVideo_container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="videoContainer">
                            <video className="tutorialVideo" controls controlsList="nodownload">
                                <source src={url} type="video/mp4"/>
                                {/*<source src="../../image/output.MOV" type="video/mp4"/>*/}
                                Your browser does not support HTML5 video.
                            </video>

                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h4>{video.videoName}</h4>
                        <p><small>{formattedVideo.createdDate}</small></p>
                        <br/>
                        <h4>视频简介：</h4>
                        <p>abcdefd</p>
                    </div>
                </div>
                <div className="row">
                    <div className="videos_container">
                        <h4>相关视频：</h4>
                        <VideosList videos={this.state.videos}/>
                    </div>
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
function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}


module.exports = Avideo;