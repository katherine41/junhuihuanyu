/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import ReactHtmlParser from 'react-html-parser';


function ArticleBlog(props){
    return (
        <li className="articleBlog">
            <div className="thumbnail">
                <div className="caption">
                    <h3>{props.title}<small>{props.createDate}</small></h3>
                    <div>{props.summary}</div>
                    {/*<div>{props.content}</div>*/}
                    <Link to={`/articles/${props.articleId}`}>
                        <button id="readMoreBtn" type="button" className="btn btn-default btn-info">
                            阅读更多
                        </button>
                    </Link>

                </div>
            </div>
        </li>

);
}
function ArticleList(props) {
    const posts=props.posts;
    const listItems=posts.map(
        function (post) {
            var formattedPost={

                title:post.title,
                summary:post.summary,
                content:ReactHtmlParser(post.content),
                createDate:formatDate(new Date(post.createDate))
            };
            return <ArticleBlog key={post.articleId} readMore={props.readMore} articleId={post.articleId} title={formattedPost.title} summary={formattedPost.summary} content={ formattedPost.content } createDate={formattedPost.createDate}/>
        }
    );
    return (
        <ul className="articleList">{listItems}</ul>
    );
}
var AllArticles = React.createClass({
    getInitialState: function() {
        return { posts:
        []
            // [{
            //     "articleId":1,
            //     "title":"sbc",
            //     "summary":"ffff",
            //     "content":"www",
            //     "createDate":1507948531000
            // }]
        };
    },
    readMore:function(a){
        // $.ajax({
        //     type: 'GET',
        //     url: "http://cefce925.ngrok.io/article/all",
        //     // url: "/article/all",
        //     success: function(res){
        //         that.setState({posts:res});
        //         console.log(res);
        //     },
        //     error: function(err){
        //         console.log(err)
        //     }
        // });
        console.log(a);
    },
    componentDidMount() {
        let that=this;
        // $.ajax({
        //     type: 'DELETE',
        //     url: "http://b181a96c.ngrok.io/article/13",
        //     success: function(res){
        //         console.log(res);
        //     },
        //     error: function(err){
        //         console.log(err)
        //     }
        // });
        $.ajax({
            type: 'GET',
            url: "http://cefce925.ngrok.io/article/all",
            // url: "/article/all",
            success: function(res){
                that.setState({posts:res});
                console.log(res);
            },
            error: function(err){
                console.log(err)
            }
        });
        console.log('GrandChild did mount.');
    },
    render: function () {
        return (
            <div className="article_container container">
                <ArticleList posts={this.state.posts} readMore={this.readMore}/>
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
module.exports = AllArticles;