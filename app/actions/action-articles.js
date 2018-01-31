/**
 * Created by Katherine on 11/11/17.
 */
import env_variables from '../components/environment.js';
import actionFunctions from './actionFunctions';
const startArticlesFetch=()=>{
    return {
        type:'START_ARTICLES_FETCH',
        payload:[]
    }
};

const completeArticlesFetch=(articles)=>{
    return {
        type:'COMPLETE_ARTICLES_FETCH',
        payload:articles
    }
};

const startArticleFetch=()=>{
    return {
        type:'START_CURRENTARTICLE_FETCH',
        payload:{}
    }
};

const completeArticleFetch=(article)=>{
    return {
        type:'COMPLETE_CURRENTARTICLE_FETCH',
        payload:article
    }
};


const passDeletingArticleId=(articleId)=>{
	return {
		type:'PASS_DELETINGARTICLE_ID',
		payload:articleId
	}
};

const getCurrentCate=(category)=>{
    return {
        type:'GET_CURRENT_CATEGORY',
        payload:category
    }
};

export const addArticle=()=>{
    return (dispatch)=>{
        var articleHeader = $("#articleHeader").val();
        var articleSummary = $("#articleSummary").val();
        var articleContent = "<div>" + $("#react-trumbowyg").html() + "</div>";
        var articleCate = $("#formSelect").val();
        var articleIndex = document.getElementById("formSelect").selectedIndex;
        var articleOptions = document.getElementById("formSelect").options;
        var articleId = articleOptions[articleIndex].id;
        var articleObj={
            title:articleHeader,
            articleCategory:{
                id: articleId,
                categoryName: articleCate
            },
            summary:articleSummary,
            content:articleContent
        };
			if(articleHeader!==""&&articleSummary!==""&&articleContent!==""){
				$("#articleHeader").val("");
				$("#articleSummary").val("");
				$("#react-trumbowyg").html("");
				$("#addSuccessModal").css("display","block");
				actionFunctions.ajaxPostObj(articleObj,'/rest/article');
        }
    }
};

export const fetchArticles=()=>{
    return (dispatch)=>{
        dispatch(startArticlesFetch());
        actionFunctions.ajaxGetFetch(dispatch,completeArticlesFetch,'/rest/article/all');
    }
};

export const fetchArticle=(articleId)=>{
    return (dispatch)=>{
        dispatch(startArticleFetch());
        // actionFunctions.ajaxGetFetch(dispatch,completeArticleFetch,'/rest/article/'+articleId);
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/article/'+articleId,
            success: function (res) {
                var categoryName=res.articleCategory.categoryName;
                var cateId=res.articleCategory.id;
                dispatch(completeArticleFetch(res));
                dispatch(getCurrentCate({"categoryName":categoryName,"id":cateId}));
                $("#articleHeader").val(res.title);
                $("#articleSummary").val(res.summary);
                $("#react-trumbowyg").html(res.content);
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};

export const clickDeletedArticle=(articleId)=>{
	return (dispatch)=>{
		dispatch(passDeletingArticleId(articleId));
	}
};

export const fetchArticleByCate=(cateId)=>{
    return (dispatch)=>{
        dispatch(startArticlesFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + "/rest/article/category/"+cateId,
            success: function (res) {
                var categoryName=res.categoryName;
                res.articles.forEach(function(item){
                    item.articleCategory={"categoryName":categoryName,"id":cateId}
                });
                dispatch(completeArticlesFetch(res.articles));
                dispatch(getCurrentCate({"categoryName":categoryName,"id":cateId}));
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};

export const deleteArticle=(articleId)=>{
    console.log(articleId);
    return (dispatch)=>{
		$.ajax({
			type:'DELETE',
			url:env_variables.apiEndpoint+'/rest/article/'+articleId,
			contentType: "application/json",
			dataType: 'text',
			success: function(res) {
				actionFunctions.ajaxGetFetch(dispatch,completeArticlesFetch,'/rest/article/all');
				$("#addSuccessModal").css("display","none");
				console.log("DELETE success",res)
			},
			error:function(err){
				console.log("DELETE error",err);
			}
		});
    }
};

export const modifyArticle=(articleId)=>{

    return (dispatch)=>{
        var articleHeader = $("#articleHeader").val();
        var articleSummary = $("#articleSummary").val();
        var articleContent = "<div>" + $("#react-trumbowyg").html() + "</div>";
        var articleCate = $("#formSelect").val();
        var articleIndex = document.getElementById("formSelect").selectedIndex;
        var articleOptions = document.getElementById("formSelect").options;
        var articleCateId = articleOptions[articleIndex].id;
        var articleObj={
            title:articleHeader,
            articleCategory:{
                id: articleCateId,
                categoryName: articleCate
            },
            summary:articleSummary,
            content:articleContent
        };
        console.log(articleObj);
        if(articleHeader!==""){
            actionFunctions.ajaxPutObj(articleObj,'/rest/article/'+articleId);
        }
    }
};
