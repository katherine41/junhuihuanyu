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

        if(articleHeader!==""){
            actionFunctions.ajaxPostObj(articleObj,'/article');
        }
    }
};

export const fetchArticles=()=>{
    return (dispatch)=>{
        dispatch(startArticlesFetch());
        actionFunctions.ajaxGetFetch(dispatch,completeArticlesFetch,'/article/all');
    }
};

export const fetchArticle=(articleId)=>{
    return (dispatch)=>{
        dispatch(startArticleFetch());
        actionFunctions.ajaxGetFetch(dispatch,completeArticleFetch,'/article/'+articleId);
    }
};