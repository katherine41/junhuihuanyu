var React = require('react');
var {Link} = require('react-router');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import allActions from '../actions/index';
import '../../public/css/style.css';

function IndexBlog(props) {
    return (
        <Link to={`/articles/${props.articleId}`}><li>{props.title}</li></Link>
    )
}
function IndexVideo(props) {
    return (
        <Link to={`/videos/${props.videoId}`}><li>{props.videoName}</li></Link>
    )
}
function IndexArticleList(props) {
    var posts=props.posts;
    if(posts.length>3){
        posts=posts.slice(0,3);  //0,1,2
    }
    const listItems = posts.map(
        function (post) {
            return <IndexBlog key={post.articleId} articleId={post.articleId} title={post.title}/>
        }
    );
    return (
        <ul className="articleVideoLists">
            {listItems}
            <Link to="/articles/" className="indexMore">更多文章<small>MORE</small>&raquo;</Link>
        </ul>
    );
}

function IndexVideoList(props){
    var videos=props.videos;
    if(videos.length>3){
        videos=videos.slice(0,3);  //0,1,2
    }
    const listItems = videos.map(
        function (video) {
            return <IndexVideo key={video.videoId} videoId={video.videoId} videoName={video.videoName}/>
        }
    );
    return (
        <ul className="articleVideoLists">
            {listItems}
            <Link to="/videos/" className="indexMore">更多视频<small>MORE</small>&raquo;</Link>
        </ul>
    );
}
var IndexPage = React.createClass({
    componentDidMount(){
        this.props.fetchVideos();
        this.props.fetchArticles();
    },
    render:function(){
        return (
            <div className="indexTop_container">
                <div id="indexTop" style={{zIndex:1,backgroundImage:`url("../../image/junhuihuanyuBanner.png")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="../../image/title.png"/>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    骏汇寰宇专注于普及外汇理财方式、外汇智能EA云技术服务、外汇市场分析，是一家位于重庆的外汇创业交流平台，我们只做最易懂、最直观、最便捷、最简洁的外汇理财。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="indexTop_articleVideo">
                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    <div className="titleLine">
                                        <span></span>
                                        <h4>汇评<small>ARTICLES</small></h4>
                                    </div>
                                    <IndexArticleList posts={this.props.articles}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <div className="titleLine">
                                        <span></span>
                                        <h4>视频解析<small>VIDEOS</small></h4>
                                    </div>
                                    <IndexVideoList videos={this.props.videos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="indexTop_calendar">
                        <div>
                            <div className="titleLine calendarTitleLine">
                                <span></span>
                                <h4>财经日历<small>ECONOMIC CALENDAR</small></h4>
                            </div>
                        </div>
                        <iframe width="100%" height="500px" frameBorder="0" scrolling="yes" src="https://rili-d.jin10.com/open.php"></iframe>
                    </div>
                </div>

            </div>
        )
    }

});

function mapStatsToProps(state){
    return {
        articles:state.articles,
        videos:state.videos
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchArticles:allActions.articleAction.fetchArticles,
        fetchVideos:allActions.videoAction.fetchVideos
    },dispatch)
}

module.exports = connect(mapStatsToProps,matchDispatchToProps)(IndexPage);
