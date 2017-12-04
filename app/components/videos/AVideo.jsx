// bind actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../../actions/index';

import '../../../public/css/Videos.css';
import env_variables from '../../components/environment';


var React = require('react');

var TitleLine = require('../TitleLine');
var VideoPost = require('./VideoPost');

//=======================component details================================
function RelatedList(props) {
    var videos=props.videos;
    if(videos.length>3){
        videos=videos.slice(0,3);  //0,1,2
    }
    const listItems=videos.map(
        function (video) {
            var formattedVideo={
                imageUrl:env_variables.apiEndpoint+video.imageUrl,
                videoLength:env_variables.fmtMSS(video.videoLength),
                createdDate:env_variables.formatDate(new Date(video.createdDate))
            };
            return <VideoPost key={video.videoId} videoId={video.videoId} videoName={video.videoName} imageUrl={formattedVideo.imageUrl} videoLength={formattedVideo.videoLength} createdDate={formattedVideo.createdDate}/>
        }
    );
    return (
        <div className="row">{listItems}</div>
    )
}
var AVideo = React.createClass({
    changeVideo:function(){
        var videoId=this.props.location.pathname.split('/')[2];
        this.props.fetchVideo(videoId);
    },
    componentDidMount:function () {
        let videoId=this.props.location.pathname.split('/')[2];
        this.props.fetchVideo(videoId);
        this.props.fetchVideos();
        window.addEventListener("hashchange", this.changeVideo);
    },
    componentWillUnmount:function () {
        window.removeEventListener("hashchange", this.changeVideo);
    },
    render:function(){
        var video=this.props.video;
        var videoId=this.props.location.pathname.split('/')[2];
        var formattedVideo={
            videoLength:env_variables.fmtMSS(video.videoLength),
            createdDate:env_variables.formatDate(new Date(video.createdDate))
        };
        var url=env_variables.apiEndpoint+"/rest/video/"+videoId+"/videostream";
        return (
        <div>
            <div className="contentTop"></div>
            <div className="contentMiddle tutorialVideo_container container">
                <div className="row">
                    <div className="col-sm-7">
                        <TitleLine titleNameChn={video.videoName} titleNameEng={formattedVideo.createdDate}/>
                        <div className="videoContainer">
                            <video controls controlsList="nodownload">
                                <source src={url} type="video/mp4"/>
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3">
                        <div className="relatedVideos_container">
                            <TitleLine titleNameChn="相关视频" titleNameEng=""/>
                            <RelatedList videos={this.props.videos}/>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>

                </div>
            </div>
        </div>

        )
    }

});


function mapStatsToProps(state){
    return {
        videos:state.videos,
        video:state.currentVideo
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchVideos:allActions.videoAction.fetchVideos,
        fetchVideo:allActions.videoAction.fetchVideo,
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(AVideo);
