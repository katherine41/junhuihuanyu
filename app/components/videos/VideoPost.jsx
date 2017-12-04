/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');

var VideoPost = React.createClass({
    render: function () {
        return (
            <div className="thumbnail">
                <Link to={`/videos/${this.props.videoId}`}>
                    <div className="videoCoverImgContainer"
                         style={{backgroundImage: `url(${this.props.imageUrl})`}}></div>
                    <span className="videoLengthDiv">{this.props.videoLength}</span>
                    <div className="caption">
                        <h5>{this.props.videoName}</h5>
                        <p>
                            <small>{this.props.createdDate}</small>
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
});


module.exports = VideoPost;
