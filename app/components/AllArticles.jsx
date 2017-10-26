/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
import ReactHtmlParser from 'react-html-parser';
import env_variables from '../components/environment.js';


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
            url: env_variables.apiEndpoint+'/article/all',
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
                <div className="row">
                    <div className="col-sm-8">
                        <ArticleList posts={this.state.posts} readMore={this.readMore}/>
                        <nav>
                            <ul className="pagination">
                                <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#" aria-label="Next"><span aria-hidden="true">&laquo;</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-4">
                        <div className="articleCategory_container">
                            <h4>文章分类：</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span className="badge">14</span>
                                    外汇学习
                                </li>
                                <li className="list-group-item">
                                    <span className="badge">12</span>
                                    汇评
                                </li>
                                <li className="list-group-item">
                                    <span className="badge">6</span>
                                    操作教程
                                </li>
                            </ul>
                            <div>
                                <h4>我的收藏：</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        外汇操作软件MT4使用教程
                                    </li>
                                    <li className="list-group-item">
                                        2017年6月8日指尖收入
                                    </li>
                                </ul>
                            </div>
                        </div>
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
module.exports = AllArticles;