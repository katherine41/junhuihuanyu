/**
 * Created by Katherine on 10/22/17.
 */
var React = require('react');
var {Link} = require('react-router');
import '../../public/css/Videos.css';
import env_variables from '../components/environment.js';
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
                imageUrl:env_variables.apiEndpoint+video.imageUrl,
                // imageUrl:video.imageUrl,
                videoLength:fmtMSS(video.videoLength),
                createdDate:env_variables.formatDate(new Date(video.createdDate))
            };
            return <VideoPost key={video.videoId} videoId={video.videoId} videoName={video.videoName} imageUrl={formattedVideo.imageUrl} videoLength={formattedVideo.videoLength} createdDate={formattedVideo.createdDate}/>
        }
    );
    return (
        <div className="row">{listItems}</div>
    )
}
var Videos = React.createClass({
    getInitialState: function() {
        return { videos:
            []
        };
    },
    componentDidMount(){
        let that=this;
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint+"/rest/video/all",
            success: function(res){
                that.setState({videos:res});
                console.log(res);
            },
            error: function(err){
                console.log(err)
            }
        });
    },
    render:function(){
        return (
        <div className="videos_container container">
            <VideosList videos={this.state.videos}/>
        </div>

        )
    }

});

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

module.exports = Videos;

