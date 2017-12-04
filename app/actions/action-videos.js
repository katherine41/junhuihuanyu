/**
 * Created by Katherine on 11/12/17.
 */
import env_variables from '../components/environment.js';
import actionFunctions from './actionFunctions';
const startVideosFetch=()=>{
    return {
        type:'START_VIDEOS_FETCH',
        payload:[]
    }
};

const completeVideosFetch=(videos)=>{
    return {
        type:'COMPLETE_VIDEOS_FETCH',
        payload:videos
    }
};

const startVideoFetch=()=>{
    return {
        type:'START_CURRENTVIDEO_FETCH',
        payload:{}
    }
};

const completeVideoFetch=(video)=>{
    return {
        type:'COMPLETE_CURRENTVIDEO_FETCH',
        payload:video
    }
};
export const fetchVideos=()=>{
    return (dispatch)=>{
        dispatch(startVideosFetch());
        actionFunctions.ajaxGetFetch(dispatch,completeVideosFetch,'/rest/video/all');
    }
};

export const fetchVideo=(videoId)=>{
    return (dispatch)=>{
        dispatch(startVideoFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/video/'+videoId,
            success: function (res) {
                // var categoryName=res.articleCategory.categoryName;
                // var cateId=res.articleCategory.id;
                dispatch(completeVideoFetch(res));
                // $("#articleHeader").val(res.title);
                // $("#articleSummary").val(res.summary);
                // $("#react-trumbowyg").html(res.content);
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};

export const deleteVideo=(videoId)=>{
    console.log(videoId);
    return (dispatch)=>{
        actionFunctions.ajaxDeleteObj(dispatch,completeVideosFetch,'/rest/video/'+videoId,'/rest/video/all');
    }
};
