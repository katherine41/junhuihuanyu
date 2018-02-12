/**
 * Created by Katherine on 10/17/17.
 */
var React = require('react');
var {Link} = require('react-router');
var PopupPanel = require('../PopupPanel');
import ReactHtmlParser from 'react-html-parser';
import env_variables from '../../components/environment';



function ArticleBlog(props) {
  let userRole = env_variables.fetchUserRole();
	let articleDeleteBtn=null;
	  if(userRole==="ADMINISTRATOR"){
			  articleDeleteBtn= <span className="deleteArticleBtn pull-right"
                                 onClick={() => props.openPopupModal(props.articleId)}>
                        <img src="../../../image/delete.svg"/>
                    </span>;
    }
    return (
        <li className="articleBlog">
            <div className="thumbnail">
                <div className="caption">
                    {articleDeleteBtn}
                    <h3>{props.title}
                        <small>{props.createDate}</small>
                    </h3>
                    <div>{props.summary}</div>
                    <div className="article_cate_btn">
                        <span>文章分类：<Link to={`/articleCates/${props.category.id}`}>{props.category.categoryName}</Link></span>
                        <Link to={`/articles/${props.articleId}`}>
                            <button type="button" className="btn btn-primary">
                                点击阅读&nbsp;&nbsp;>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
}


var ArticleList = React.createClass({
    render: function () {
        const posts = this.props.posts;
        const deleteArticle = this.props.deleteArticle;
		const deletedArticleId = this.props.deletedArticleId;
		const clickDeletedArticle = this.props.clickDeletedArticle;
        const openPopupModal = function(articleId){
			$("#addSuccessModal").css("display","block");
			clickDeletedArticle(articleId);
        };
        const listItems = posts.map(
            function (post) {
                var formattedPost = {

                    title: post.title,
                    summary: post.summary,
                    content: ReactHtmlParser(post.content),
                    createDate: env_variables.formatDate(new Date(post.createDate))
                };
                return <ArticleBlog key={post.articleId} articleId={post.articleId} title={formattedPost.title}
                                    summary={formattedPost.summary} content={ formattedPost.content }
                                    createDate={formattedPost.createDate} category={post.articleCategory}
                                    clickDeletedArticle={clickDeletedArticle} openPopupModal={openPopupModal}/>
            }
        );
        return (
        <div>
            <PopupPanel deletedArticleId={deletedArticleId} deleteArticle={deleteArticle}/>
            <ul className="articleList">{listItems}</ul>
        </div>
        )
    }

});


module.exports = ArticleList;
