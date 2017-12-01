/**
 * Created by Katherine on 11/30/17.
 */
import env_variables from '../components/environment.js';

const startUserFetch=()=>{
    return {
        type:'START_CURRENTUSER_FETCH',
        payload:{}
    }
};

const completeUserFetch=(user)=>{
    return {
        type:'COMPLETE_CURRENTUSER_FETCH',
        payload:user
    }
};

export const fetchUser=(articleId)=>{
    return (dispatch)=>{
        dispatch(startUserFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/user?userId='+articleId,
            success: function (res) {
                dispatch(completeUserFetch(res));
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};
