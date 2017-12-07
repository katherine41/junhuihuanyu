/**
 * Created by Katherine on 11/30/17.
 */
import env_variables from '../components/environment.js';
import actionFunctions from './actionFunctions';


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

export const fetchUser=(userId)=>{
    return (dispatch)=>{
        dispatch(startUserFetch());
        $.ajax({
            type: 'GET',
            url: env_variables.apiEndpoint + '/rest/user?userId='+userId,
            success: function (res) {
                dispatch(completeUserFetch(res));
                $("#profileUsername").val(res.userName);
                $("#profilePhone").val(res.phoneNumber);
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
};

export const modifyUser=(userInfo)=>{

    return (dispatch)=>{
        console.log(userInfo);
        $.ajax({
            type:'PUT',
            url:env_variables.apiEndpoint+'/rest/user?userId='+userInfo.userId,
            data: JSON.stringify(userInfo),
            contentType: "application/json",
            dataType: 'text',
            success: function(data) {
                console.log("Put success",data);
                $.ajax({
                    type: 'GET',
                    url: env_variables.apiEndpoint + '/rest/user?userId='+userInfo.userId,
                    success: function (res) {
                        dispatch(completeUserFetch(res));
                        $("#profileBeforeEdit").css("display","block");
                        $("#profileAfterEdit").css("display","none");
                        $("#editUserBtn").css("display","block");
                        $("#profileUsername").val(res.userName);
                        $("#profilePhone").val(res.phoneNumber);
                    },
                    error: function (err) {
                        console.log(err)
                    }
                });

            },
            error:function(err){
                console.log("Put error",err);
            }
        });
    }
};



