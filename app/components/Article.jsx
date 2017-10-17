var React = require('react');
import ReactHtmlParser from 'react-html-parser';
function ArticleBlog(props){
    return (
        <li>
            <div className="thumbnail">
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.createDate}</p>
                    <div>{props.content}</div>
                    <p>阅读更多 ></p>
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
                content:post.content,
                createDate:formatDate(new Date(post.createDate))
            };
            return <ArticleBlog key={post.articleId} title={formattedPost.title} content={ ReactHtmlParser(formattedPost.content) } createDate={formattedPost.createDate}/>
        }
    );
    return (
        <ul className="articleList">{listItems}</ul>
    );
}
var Article = React.createClass({
    getInitialState: function() {
        return { posts: [] };
    },
    componentDidMount() {
        let that=this;
        // $.ajax({
        //     type: 'DELETE',
        //     url: "http://f090bbea.ngrok.io/article/10",
        //     success: function(res){
        //         console.log(res);
        //     },
        //     error: function(err){
        //         console.log(err)
        //     }
        // });
        $.ajax({
            type: 'GET',
            url: "http://f090bbea.ngrok.io/article/all",
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
            <ArticleList posts={this.state.posts}/>
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
    return yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;
}
module.exports = Article;