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

export const fetchVideos=()=>{
    return (dispatch)=>{
        dispatch(startVideosFetch());
        actionFunctions.ajaxGetFetch(dispatch,completeVideosFetch,'/rest/video/all');
    }
};
