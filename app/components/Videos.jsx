/**
 * Created by Katherine on 10/22/17.
 */
var React = require('react');
var {Link} = require('react-router');
import '../../public/css/Videos.css';
import env_variables from '../components/environment.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../actions/index';
function VideoPost(props) {
    return (
        <div className="col-xs-4 col-sm-3 col-lg-2">
            <div className="thumbnail">
                <span className="deleteVideoBtn pull-right"
                      onClick={() => props.deleteVideo(props.videoId)}>
                    <img src="../../image/delete.svg"/>
                </span>
                <Link to={`/videos/${props.videoId}`}>
                    <div className="videoCoverImgContainer" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
                    <span className="videoLengthDiv">{props.videoLength}</span>
                    <div className="caption">
                        <h5>{props.videoName}</h5>
                        <p>
                            <small>{props.createdDate}</small>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
function VideosList(props) {
    const videos=props.videos;
    const listItems=videos.map(
        function (video) {
            var formattedVideo={
                imageUrl:env_variables.apiEndpoint+video.imageUrl,
                // imageUrl:video.imageUrl,
                videoLength:fmtMSS(video.videoLength),
                createdDate:env_variables.formatDate(new Date(video.createdDate))
            };
            return <VideoPost key={video.videoId} videoId={video.videoId} videoName={video.videoName} imageUrl={formattedVideo.imageUrl} videoLength={formattedVideo.videoLength} createdDate={formattedVideo.createdDate} deleteVideo={props.deleteVideo}/>
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
        <div className="videos_container container">
            <VideosList videos={this.props.videos}  deleteVideo={this.props.deleteVideo}/>
        </div>

        )
    }

});

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

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
