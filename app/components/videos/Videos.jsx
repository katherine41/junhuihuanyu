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
function VideosList(props) {
    const videos=props.videos;
    const listItems=videos.map(
        function (video) {
            var formattedVideo={
                imageUrl:env_variables.apiEndpoint+video.imageUrl,
                videoLength:env_variables.fmtMSS(video.videoLength),
                createdDate:env_variables.formatDate(new Date(video.createdDate))
            };
            return (
                <div key={video.videoId} className="col-xs-4 col-sm-3 col-lg-2">
                    <span className="deleteVideoBtn pull-right"
                          onClick={() => this.props.deleteVideo(this.props.videoId)}>
                    <img src="../../image/delete.svg"/>
                </span>
                    <VideoPost videoId={video.videoId} videoName={video.videoName}
                               imageUrl={formattedVideo.imageUrl} videoLength={formattedVideo.videoLength}
                               createdDate={formattedVideo.createdDate} deleteVideo={props.deleteVideo}/>
                </div>
            )
        }
    );
    return (
        <div className="row">{listItems}</div>
    )
}
var Videos = React.createClass({
    componentDidMount(){
        this.props.fetchVideos();
    },
    render:function(){
        return (
        <div>
            <div className="contentTop"></div>
            <div className="contentMiddle videos_container container">
                <TitleLine titleNameChn="视频解析" titleNameEng="VIDEOS"/>
                <VideosList videos={this.props.videos}  deleteVideo={this.props.deleteVideo}/>
            </div>
        </div>
        )
    }

});

function mapStatsToProps(state){
    return {
        videos:state.videos
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchVideos:allActions.videoAction.fetchVideos,
        deleteVideo:allActions.videoAction.deleteVideo
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(Videos);
