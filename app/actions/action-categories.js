/**
 * Created by Katherine on 11/11/17.
 */
import env_variables from '../components/environment.js';
import actionFunctions from './actionFunctions';

const startCategoryFetch=()=>{
    return {
        type:'START_CATEGORY_FETCH',
        payload:[]
    }
};

const completeCategoryFetch=(cates)=>{
    return {
        type:'COMPLETE_CATEGORY_FETCH',
        payload:cates
    }
};
export const fetchCategory=()=>{
    return (dispatch)=>{
        dispatch(startCategoryFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/article/category',
            success: function (res) {
                res.forEach(function(item){
                    item.articlesNum=item.articles.length;
                });
                dispatch(completeCategoryFetch(res))
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};


export const addCategory=(newCateName)=>{
    return (dispatch)=>{
        var newCateObj=  {
            categoryName:newCateName
        };
        console.log(newCateObj);
        if(newCateName!==""){
            $.ajax({
                type: 'POST',
                url: env_variables.apiEndpoint + '/rest/article/category',
                data: JSON.stringify(newCateObj),
                contentType: "application/json",
                dataType: 'text',
                success: function () {
                    actionFunctions.ajaxGetFetch(dispatch,completeCategoryFetch,'/rest/article/category');
                },
                error: function (err) {
                    console.log("error", err);
                }
            });
        }
    }
};

export const deleteCategory=(cateId)=>{
    console.log(cateId);
    return (dispatch)=>{
        actionFunctions.ajaxDeleteObj(dispatch,completeCategoryFetch,'/rest/article/category/'+cateId,'/rest/article/category');
    }
};